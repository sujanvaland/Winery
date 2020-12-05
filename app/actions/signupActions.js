/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestSignUp(userdetail) {
    return {
        type: types.SIGNUP_REQUEST,
        userdetail
    };
}

export function signupFailed(response) {
    return {
        type: types.SIGNUP_FAILED,
        response
    };
}

export function onsignupResponse(response) {
    return {
        type: types.SIGNUP_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

export function requestAccountVerification(verificationdetails) {
    return {
        type: types.ACCOUNTVERIFICATION_REQUEST,
        verificationdetails
    };
}

export function accountverificationFailed(response) {
    return {
        type: types.ACCOUNTVERIFICATION_FAILED,
        response
    };
}

export function onaccountverificationResponse(response) {
    return {
        type: types.ACCOUNTVERIFICATION_RESPONSE,
        response
    };
}
