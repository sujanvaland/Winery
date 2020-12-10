/* Redux saga class
 * verifyotp the user into the app
 * requires username and password.
 * email
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import verifyOtp from 'app/api/methods/verifyOtp';
import * as loginActions from 'app/actions/loginActions';
import * as verifyOtpActions from 'app/actions/verifyOtpActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
function* verifyOtpAsync(action) {
    yield put(loginActions.enableLoader());
    //how to call api
    const response = yield call(verifyOtp, action);
    //mock response
    //console.log(response);
    if (response.status === "true") {
        Alert.alert(
            'Success', 
            response.message
          ); 
        yield put(verifyOtpActions.onVerifyOtpResponse(response));
        yield put(loginActions.disableLoader({})); 
        yield call(navigationActions.navigateToLogin);
    } else {
        Alert.alert(
            'Error Message', 
            response.message
          );  
        yield put(verifyOtpActions.verifyOtpFailed(response));
        yield put(loginActions.disableLoader({}));
    }
}

export { verifyOtpAsync }
