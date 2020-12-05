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
    
});