import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function verifyOtp(action) {
    return Api(
        ApiConstants.VERIFYOTP,
        {
          email: action.action.email,
          password: action.action.password,
          confirmpassword: action.action.confirmpassword,
          otpverify: action.action.otp
        },
        'post',
        null
    );
}
