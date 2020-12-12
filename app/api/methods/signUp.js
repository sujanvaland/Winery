import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export function signup(userdetail) {
  return Api(
      ApiConstants.SIGNUPPATH,
      {
        firstname: userdetail.firstname,
        lastname:userdetail.lastname,
        email: userdetail.email,
        mobile: userdetail.phone,
        password: userdetail.password,
      },
      'post',
      null
  );
}

export function accountverification(verificationdetails) {
  var send_otp=verificationdetails.vone+""+verificationdetails.vtwo+""+verificationdetails.vthree+""+verificationdetails.vfour;
  return Api(
      ApiConstants.ACCOUNTVERIFICATIONPATH,
      {
        username: verificationdetails.username,
        send_otp: send_otp
      },
      'post',
      null
  );
}
