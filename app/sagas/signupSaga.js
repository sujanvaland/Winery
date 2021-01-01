/* Redux saga class
 * Registers the user into the app
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as signupActions from 'app/actions/signupActions';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import { signup, accountverification } from 'app/api/methods/signUp';
import Toast from 'react-native-simple-toast';
// import analytics from '@react-native-firebase/analytics';

// Our worker Saga that registers the user
function* signupAsync(action) {
    yield put(loginActions.enableLoader());
    const response = yield call(signup, action.userdetail);
    //console.log(response);
    if (response.status === "true") {
      Alert.alert(
        'Success',
        'Signup Success :' + response.message,
        [
          {text: 'OK'},
        ]
      );
      yield put(signupActions.onsignupResponse(response));
      yield put(loginActions.disableLoader({}));
      navigationActions.navigateToLogin();
    } 
    else 
    {
      Toast.show(response.message, Toast.LONG);
      yield put(signupActions.signupFailed(response));
      yield put(loginActions.disableLoader({}));
    }
}

function* accountverificationAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(accountverification, action.verificationdetails);
  //mock response
  //console.log(response);
  if (response.Message === "success") {
      yield put(signupActions.onaccountverificationResponse(response));

      _storeData("login_token",response.accessToken)
      _storeData("customerguid",response.results[0].userguid);
      _storeData("customerfirstname",response.results[0].firstname);
      _storeData("customerlastname",response.results[0].lastname);
      _storeData("customerimage",response.results[0].customerimage);
      if(response.results[0].countcartitems == null || response.results[0].countcartitems == undefined){
      }else{
        _storeData("countcartitems",response.results[0].countcartitems.toString());
      }
      _storeData("loginuser",response.results[0].username);
      _storeData("password",response.results[0].password);

      yield call(navigationActions.navigateToDashboard);
      yield put(loginActions.disableLoader({}));  
  } 
  else 
  {
    yield put(signupActions.signupFailed(response));
    Alert.alert(
      'Fail',
      'Account Verification Failed :' + response.Message,
      [
        {text: 'OK'},
      ]
    );
    yield put(loginActions.disableLoader({}));
  }
}

_storeData = async (key,value) => {
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

export { signupAsync, accountverificationAsync }