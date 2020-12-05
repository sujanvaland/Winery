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
// import analytics from '@react-native-firebase/analytics';

// Our worker Saga that registers the user
function* signupAsync(action) {
    yield put(loginActions.enableLoader());
    const response = yield call(signup, action.userdetail);
    console.log(response);
    if (response.status === "true") {
        yield put(signupActions.onsignupResponse(response));
        yield put(loginActions.disableLoader({}));
        yield _AddEventLog(action.userdetail.email,action.userdetail.username);
        let obj={ username: action.userdetail.username };
        navigationActions.navigateToAccountVerification(obj);
    } 
    else 
    {
        yield put(signupActions.signupFailed(response));
      //  if(response.status === "missing_required_fields:last_name"){
      //     alermessage = "Please enter last name";
      //  }
      //  if(response.status === "not_unique:email"){
      //    alermessage = "User with this email address already exists";
      //  }

      var alermessage = "Something went wrong.!!!!!";

      if(response.status === "not_unique:login"){
        alermessage = "User with this username already exists";
      }
       
       Alert.alert(
          'Fail',
          'Signup Failed :' + alermessage,
          [
            {text: 'OK'},
          ]
        );
        yield put(loginActions.disableLoader({}));
    }
}

// _AddEventLog = async (emailId,username) => {
//   try {
//       await analytics().logEvent('Customer_creation', {
//         email: emailId,
//         username:username
//       });
//   } catch (error) {
//     // Error retrieving data
//   }
// };

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