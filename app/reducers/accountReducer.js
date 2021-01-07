/* account Reducer
 * handles filters states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const accountReducer = createReducer(initialState, {

    [types.GETACCOUNT_RESPONSE](state,action) {
        return {
            ...state,
            accountdetail:action.response
        };
    },
    [types.GETACCOUNT_FAILED](state) {
        return {
            ...state
        };
    },

    [types.GETALLUSERTYPE_RESPONSE](state,action) {
        return {
            ...state,
            getallusertype:action.response.Data
        };
    },
    [types.GETALLUSERTYPEFAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.GETWINETYPEBYUSERTYPE_RESPONSE](state,action) {
        return {
            ...state,
            userwinetype:action.response.Data
        };
    },
    [types.GETWINETYPEBYUSERTYPEFAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.INSERTTOUR_RESPONSE](state,action) {
        return {
            ...state,
            inserttour:action.response
        };
    },
    [types.INSERTTOURFAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.GETTOURS_RESPONSE](state,action) {
        return {
            ...state,
            tours:action.response
        };
    },
    [types.GETTOURS_FAILED](state) {
        return {
            ...state,
            tours:null
        };
    },

    [types.GETTOURBYID_RESPONSE](state,action) {
        return {
            ...state,
            tourdetail:action.response
        };
    },
    [types.GETTOURBYIDFAIL_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.DELETETOUR_REQUEST](state,action) {
        return {
            ...state,
            deletetour:action.response
        };
    },
    [types.DELETETOUR_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.GETWINERIESBYWINETYPE_RESPONSE](state,action) {
        return {
            ...state,
            wineriesbywinetype:action.response.Data
        };
    },
    [types.GETWINERIESBYWINETYPEFAIL_RESPONSE](state) {
        return {
            ...state
        };
    },
    //  Update Personal Detail

    [types.UPDATEPERSONALDETAIL_RESPONSE](state,action) {
        return {
            ...state,
            updatepersonaldetail:action.response
        };
    },
    [types.UPDATEPERSONALDETAILFAILED_RESPONSE](state,action) {
        return {
            ...state,
            updatepersonaldetail:null
        };
    },

    //  Update Device Token

    [types.UPDATEDEVICETOKEN_RESPONSE](state,action) {
        return {
            ...state,
            updatedevicetoken:action.response
        };
    },
    [types.UPDATEDEVICETOKENFAILED_RESPONSE](state,action) {
        return {
            ...state,
            updatedevicetoken:null
        };
    },

    // Change Password
    [types.CHANGEPASSWORD_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:action.response
        };
    },
    [types.CHANGEPASSWORDFAILED_RESPONSE](state,action) {
        return {
            ...state,
            changepasswordresponse:[]
        };
    },

    [types.PROFILEIMAGELOADED_RESPONSE](state,action) {
        return {
            ...state,
            profileimage:action.response
        };
    },

    [types.FAILEDLOADINGPROFILEIMAGE_RESPONSE](state) {
        return {
            ...state
        };
    },

    [types.GETROUTE_RESPONSE](state,action) {
        return {
            ...state,
            routewaypointslist:action.response
        };
    },

    [types.UPDATEFEEDBACK_REQUEST](state,action) {
        return {
            ...state,
            updatefeedback:action.response
        };
    },
    [types.UPDATEFEEDBACK_RESPONSE](state) {
        return {
            ...state
        };
    },
    
});