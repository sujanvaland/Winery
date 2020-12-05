import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export  function getAccountDetail(action) {
  return Api(
      ApiConstants.ACCOUNTDETAIL,
      null,
      'get',
      null
  );
}

export  function updatePersonalDetail(action) {
  return Api(
      ApiConstants.UPDATEPERSONALDETAIL,
      {
        firstname:action.personaldetail.firstname,
        lastname:action.personaldetail.lastname,
        birthdate:action.personaldetail.birthdate,
        gender:action.personaldetail.gender,
        email:action.personaldetail.email,
        phone:action.personaldetail.phone,
        vehicalno:action.personaldetail.vehicalno,
        role_id:'2'
      },
      'post',
      null
  );
}

export  function updateDeviceToken(action) {
  return Api(
      ApiConstants.UPDATEDEVICETOKEN,
      {
        device_token:action.devicetoken
      },
      'post',
      null
  );
}

export function changePassword(action) {
  return Api(
    ApiConstants.CHANGEPASSWORD,
    {
      oldpassword:action.action.oldpassword,
      newpassword:action.action.newpassword
    },
    'post',
    null
  );
}

export  function loadProfileImage(action) {
  return Api(
      ApiConstants.PROFILEIMAGE,
      null,
      'get',
      null
  );
}
