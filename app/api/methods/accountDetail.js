import Api from 'app/api';
import ApiConstants from '../ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';

retrieveData = async (key) => {
  try {
    //environment
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    }
  } catch (error) {
    // Error retrieving data
  }
};

export  function getAccountDetail(action) {
  return Api(
      ApiConstants.ACCOUNTDETAIL,
      null,
      'get',
      null
  );
}

export function getAllUserType(action){
  return Api(
    ApiConstants.GETALLUSERTYPE,
    null,
    'get',
    null
  );
}

export function getWineTypeByUserType(action){
  return Api(
    ApiConstants.GETWINETYPEBYUSERTYPE,
    {
      UserTypeId:action.UserTypeId
    },
    'post',
    null
  );
}

export function getWineeriesByWineType(action){
  return Api(
    ApiConstants.GETWINERIESBYWINETYPE,
    {
      WineTypeIds:action.WineTypeIds
    },
    'post',
    null
  );
}

export async function insertTour(action){
  let userId =  await retrieveData("customerguid");
  var dateobj = new Date(); 
  var isodate = dateobj.toISOString(); 
  var strSplitDate = String(isodate).split('T');
  var dateArray = strSplitDate[0].split('-');
  var TimeArray = strSplitDate[1];
  var newstrSplitTime = String(TimeArray).split('Z');
  var newtimeArray = newstrSplitTime[0].split('.');
  var newtimeArray = newtimeArray[0];
  let TourDate = dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2] + " " + newtimeArray;
 
  return Api(
    ApiConstants.INSERTTOUR,
    {
      TourDate:TourDate,
      UserId:userId,
      CreatedById:userId,
      TourDetails:action.TourDetails
    },
    'post',
    null
  );
}

export function getTourById(action){
  return Api(
    ApiConstants.GETTOURBYID,
    {
      Id:action.Id
    },
    post,
    null
  );
}

export function deleteTour(action){
  return Api(
    ApiConstants.DELETETOUR,
    {
      Id:action.Id
    },
    'post',
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
