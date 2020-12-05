/*
 * Reducer actions related with login
 */
import * as types from './types';

export function getAccountDetail() {
    return {
        type: types.GETACCOUNT_REQUEST
    };
}

export function ongetAccountDetailResponse(response) {
    return {
        type: types.GETACCOUNT_RESPONSE,
        response
    };
}

export function getAccountDetailFailed(response) {
    return {
        type: types.GETACCOUNT_FAILED,
        response
    };
}

export function loadProfileImageRequest() {
    return {
        type: types.LOADPROFILEIMAGE_REQUEST
    };
}

export function onProfileImageLoadedResponse(response) {
    return {
        type: types.PROFILEIMAGELOADED_RESPONSE,
        response
    };
}

export function FailedLoadingProfileImage(response) {
    return {
        type: types.FAILEDLOADINGPROFILEIMAGE_RESPONSE,
        response
    };
}

export function changePasswordRequest(action) {
    return {
        type: types.CHANGEPASSWORD_REQUEST,
        action
    };
}

export function onChangePasswordResponse(response) {
    return {
        type: types.CHANGEPASSWORD_RESPONSE,
        response
    };
}
export function onChangePasswordFailedResponse(response) {
    return {
        type: types.CHANGEPASSWORDFAILED_RESPONSE,
        response
    };
}

export function updatePersonalDetail(personaldetail) {
    return {
        type: types.UPDATEPERSONALDETAIL_REQUEST,
        personaldetail
    };
}
export function onupdatePersonalDetailResponse(response) {
    return {
        type: types.UPDATEPERSONALDETAIL_RESPONSE,
        response
    };
}
export function onupdatePersonalDetailFailedResponse(response) {
    return {
        type: types.UPDATEPERSONALDETAILFAILED_RESPONSE,
        response
    };
}

export function updateDeviceToken(devicetoken) {
    return {
        type: types.UPDATEDEVICETOKEN_REQUEST,
        devicetoken
    };
}
export function onupdateDeviceTokenResponse(response) {
    return {
        type: types.UPDATEDEVICETOKEN_RESPONSE,
        response
    };
}
export function onupdateDeviceTokenFailedResponse(response) {
    return {
        type: types.UPDATEDEVICETOKENFAILED_RESPONSE,
        response
    };
}