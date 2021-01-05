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

export  async function getTours(action) {
  let userId =  await retrieveData("customerguid");
  return Api(
      ApiConstants.TOURS,
      {
        UserId:userId
      },
      'post',
      null
  );
}

export function getTourById(action){
  return Api(
    ApiConstants.GETTOURBYID,
    {
      Id:action.tourid
    },
    'post',
    null
  );
}

export function deleteTour(action){
  return Api(
    ApiConstants.DELETETOUR,
    {
      Id:action.tourid
    },
    'post',
    null
  );
}

export async function updatePersonalDetail(action) {
  let userId =  await retrieveData("customerguid");
  let customeremail =  await retrieveData("customeremail");
  let password =  await retrieveData("password");
  return Api(
      ApiConstants.UPDATEPERSONALDETAIL,
      {
        Id: userId,
        firstname:action.personaldetail.firstname,
        lastname:action.personaldetail.lastname,
        mobile:action.personaldetail.phone,
        DateOfBirth:action.personaldetail.birthDate,
        email:customeremail,
        password:password
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

export async function changePassword(action) {
  let userId =  await retrieveData("customerguid");
  let customeremail =  await retrieveData("customeremail");
  let customername = await retrieveData("customername");
  let strcustomername = String(customername).split(' ');
  let firstname =  strcustomername[0];
  let lastname =  strcustomername[1];
  let customerphone =  await retrieveData("customerphone");
  let customerbirthdate = await retrieveData("customerbirthdate");
  return Api(
    ApiConstants.CHANGEPASSWORD,
    {
      Id: userId,
      firstname:firstname,
      lastname:lastname,
      mobile:customerphone,
      DateOfBirth:customerbirthdate,
      email:customeremail,
      password:action.action.newpassword
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

export function updateFeedback(action){
  return Api(
    ApiConstants.UPDATEFEEDBACK,
    {
      Id: action.FeedbackData.Id,
      Rating: action.FeedbackData.Rating,
      Feedback: action.FeedbackData.Feedback
    },
    'post',
    null
  );
}
