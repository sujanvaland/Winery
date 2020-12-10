/*
 * Reducer actions related with login
 */
import * as types from './types';


export function verifyOtprequest(action) {
    return {
        type: types.VERIFYOTP_REQUEST,
        action
    };
}

export function onVerifyOtpResponse(response) {
    return {
        type: types.VERIFYOTP_RESPONSE,
        response
    };
}
export function verifyOtpFailed(response) {
    return {
        type: types.FAILEDVERIFYOTP_RESPONSE,
        response
    };
}