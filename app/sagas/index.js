/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync } from './loginSaga';
import { signupAsync } from './signupSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import {verifyOtpAsync} from './verifyOtpSaga';
import { getAccountDetailAsync,updatePersonalDetailAsync,updateDeviceTokenAsync,changePasswordAsync, loadprofileimageAsync } from './accountSaga';
import { getUpcomingEventsAsync, getPastEventsAsync } from './eventSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginAsync)]);
    yield all([takeEvery(types.SIGNUP_REQUEST, signupAsync)]);
    yield all([takeEvery(types.FORGOTPASSWORD_REQUEST, forgotPasswordSaga)]);
    yield all([takeEvery(types.VERIFYOTP_REQUEST, verifyOtpAsync)]);
    
    //account Saga
     yield all([takeEvery(types.GETACCOUNT_REQUEST, getAccountDetailAsync)]);
    // yield all([takeEvery(types.UPDATEPERSONALDETAIL_REQUEST, updatePersonalDetailAsync)]);
    // yield all([takeEvery(types.UPDATEDEVICETOKEN_REQUEST, updateDeviceTokenAsync)]);
    // yield all([takeEvery(types.CHANGEPASSWORD_REQUEST, changePasswordAsync)]);
    // yield all([takeEvery(types.LOADPROFILEIMAGE_REQUEST, loadprofileimageAsync)]);

    //Event Saga
    yield all([takeEvery(types.GETUPCOMINGEVENTS_REQUEST, getUpcomingEventsAsync)]);
    yield all([takeEvery(types.GETPASTEVENTS_REQUEST, getPastEventsAsync)]);
}
