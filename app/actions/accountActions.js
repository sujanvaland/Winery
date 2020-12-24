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

export function getAllUserType() {
    return {
        type: types.GETALLUSERTYPE_REQUEST
    };
}

export function ongetAllUserTypeResponse(response) {
    return {
        type: types.GETALLUSERTYPE_RESPONSE,
        response
    };
}

export function ongetAllUserTypeFailResponse(response) {
    return {
        type: types.GETALLUSERTYPEFAIL_RESPONSE,
        response
    };
}

export function getWineTypeByUserType(UserTypeId) {
    return {
        type: types.GETWINETYPEBYUSERTYPE_REQUEST,
        UserTypeId
    };
}

export function ongetWineTypeByUserTypeResponse(response) {
    return {
        type: types.GETWINETYPEBYUSERTYPE_RESPONSE,
        response
    };
}

export function ongetWineTypeByUserTypeFailResponse(response) {
    return {
        type: types.GETWINETYPEBYUSERTYPEFAIL_RESPONSE,
        response
    };
}

export function getWineriesWineType(WineTypeIds) {
    return {
        type: types.GETWINERIESBYWINETYPE_REQUEST,
        WineTypeIds
    };
}

export function ongetWineriesWineTypeResponse(response) {
    return {
        type: types.GETWINERIESBYWINETYPE_RESPONSE,
        response
    };
}

export function ongetWineriesWineTypeFailResponse(response) {
    return {
        type: types.GETWINERIESBYWINETYPEFAIL_RESPONSE,
        response
    };
}

export function insertTour(TourDetails) {
    return {
        type: types.INSERTTOUR_REQUEST,
        TourDetails
    };
}

export function oninsertTourResponse(response) {
    return {
        type: types.INSERTTOUR_RESPONSE,
        response
    };
}

export function oninsertTourFailResponse(response) {
    return {
        type: types.INSERTTOURFAIL_RESPONSE,
        response
    };
}

export function getTourById() {
    return {
        type: types.GETTOURBYID_REQUEST
    };
}

export function ongetTourByIdResponse(response) {
    return {
        type: types.GETTOURBYID_RESPONSE,
        response
    };
}

export function ongetTourByIdFailResponse(response) {
    return {
        type: types.GETTOURBYIDFAIL_RESPONSE,
        response
    };
}

export function deleteTour() {
    return {
        type: types.DELETETOUR_REQUEST
    };
}

export function ondeleteTourResponse(response) {
    return {
        type: types.DELETETOUR_RESPONSE,
        response
    };
}

export function ondeleteTourFailResponse(response) {
    return {
        type: types.DELETETOURFAIL_RESPONSE,
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

export function ongetRoute(response) {
    return {
        type: types.GETROUTE_RESPONSE,
        response
    };
}