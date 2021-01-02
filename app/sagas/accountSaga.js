import { put, call, select } from 'redux-saga/effects';
import * as loginActions from 'app/actions/loginActions';
import * as accountActions from 'app/actions/accountActions';
import {getAccountDetail,getAllUserType,getWineTypeByUserType,getWineeriesByWineType,insertTour,getTours,
  getTourById,deleteTour,
  updatePersonalDetail,updateDeviceToken,changePassword,loadProfileImage} from 'app/api/methods/accountDetail';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
// Our worker Saga that loads filter

function* getAccountDetailAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getAccountDetail,action);
  //console.log(response);
  if (response.id > 0) {
      yield put(accountActions.ongetAccountDetailResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getAccountDetailFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getWineTypeByUserTypeAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getWineTypeByUserType,action);
  if (response.status ==="True") {
      yield put(accountActions.ongetWineTypeByUserTypeResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.ongetWineTypeByUserTypeFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getAllUserTypeAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getAllUserType,action);
  if (response.status ==="True") {
      yield put(accountActions.ongetAllUserTypeResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.ongetAllUserTypeFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getWineeriesByWineTypeAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getWineeriesByWineType,action);
  if (response.status ==="True") {
      yield put(accountActions.ongetWineriesWineTypeResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.ongetWineriesWineTypeFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* insertTourAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(insertTour,action);
  if (response.status ==="True") {
      yield put(accountActions.oninsertTourResponse(response));
      yield put(loginActions.disableLoader({}));
      _storeData("FeedbackData", "");
      navigationActions.navigateToStoreMap();
  } else {
      yield put(accountActions.oninsertTourFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getToursAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getTours,action);
  //console.log(response);
  if (response.status ==="True") {
      yield put(accountActions.ongetToursResponse(response.Data));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.getToursFailed(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* getTourByIdAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(getTourById,action);
  if (response.status ==="True") {
      yield put(accountActions.ongetTourByIdResponse(response));
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.ongetTourByIdFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

function* deleteTourAsync(action) {
  yield put(loginActions.enableLoader());
  const response = yield call(deleteTour,action);
  if (response.status ==="True") {
      yield put(accountActions.ondeleteTourResponse(response));
      yield put(accountActions.getTours());
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.ondeleteTourFailResponse(response));
      yield put(loginActions.disableLoader({}));
  }
};

// Update Persona Detail
function* updatePersonalDetailAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(updatePersonalDetail,action);
  //console.log(action);
  //console.log(response);
  if (response.Status ==="True") {
      yield put(accountActions.onupdatePersonalDetailResponse(response));
      let userName=action.personaldetail.firstname+" "+action.personaldetail.lastname;
      //console.log(userName);
      _storeData("customername", userName);
      navigationActions.navigateToPersonalDetail();
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.onupdatePersonalDetailFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Update Device Token
function* updateDeviceTokenAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(updateDeviceToken,action);
  console.log(response);
  if (response.Message === "success") {
      yield put(accountActions.onupdateDeviceTokenResponse(response));
      yield put(accountActions.getAccountDetail());
      yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.onupdateDeviceTokenFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
}

// Change Password
function* changePasswordAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(changePassword,action);
  //console.log(response);
  if (response.Status ==="True") {
      Alert.alert(
          'Success',
          'Change Password Successfully.',
          [
            {text: 'OK'},
          ]
      );
      _storeData("password", action.action.newpassword);
      navigationActions.navigateToStoreMap();
      yield put(accountActions.onChangePasswordResponse(response));
      yield put(loginActions.disableLoader({}));
      //console.log(response);
  } else {
      Alert.alert(
          'Fail',
          'Change Password Failed :' + response.Message,
          [
            {text: 'OK'},
          ]
        );
      
      navigationActions.navigateToChangePassword();
      yield put(accountActions.onChangePasswordFailedResponse(response));
      yield put(loginActions.disableLoader({}));
  }
  
}

function* loadprofileimageAsync(action) {
    
  yield put(loginActions.enableLoader());
  //how to call api
  let response = {};
  response = yield call(loadProfileImage,action);
  //console.log(response);
  if (response.Message === "success") {
    if(response.results){
      yield put(accountActions.onProfileImageLoadedResponse(response.results));
    }
    yield put(loginActions.disableLoader({}));
  } else {
      yield put(accountActions.FailedLoadingProfileImage(response));
      yield put(loginActions.disableLoader({}));
  }
}

const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return value;
  } catch (error) {
    // Error saving data
    return null;
  }
};

_retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

export { 
  getAccountDetailAsync,
  updatePersonalDetailAsync,
  updateDeviceTokenAsync,
  changePasswordAsync,
  loadprofileimageAsync,
  getAllUserTypeAsync,
  getWineTypeByUserTypeAsync,
  getWineeriesByWineTypeAsync,
  insertTourAsync,
  getToursAsync,
  getTourByIdAsync,
  deleteTourAsync
}
