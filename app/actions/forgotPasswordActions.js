/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestForgotPassword(username) {
   
    return {
        type: types.FORGOTPASSWORD_REQUEST,
        username
    };
}

export function forgotPasswordFailed(response) {
    return {
        type: types.FORGOTPASSWORD_FAILED,
        response
    };
}

export function onForgotPasswordResponse(response) {
    return {
        type: types.FORGOTPASSWORD_RESPONSE,
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
