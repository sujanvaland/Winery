/* App config for apis
 */
const ApiConstants = {
    BASE_URL: 'http://wineloversmap.com/api',
    LANGUAGE: 'language',
    SITEURL:'http://wineloversmap.com/',
    //API PATH
    LOGINPATH: 'login.php',
    SIGNUPPATH:'registerwithout.php',
    FORGOTPASSWORD: 'resetpasswordlinksend.php',
    VERIFYOTP:'resetpassword.php',
    ACCOUNTDETAIL:'account',
    UPDATEPERSONALDETAIL:'userupdate.php',
    CHANGEPASSWORD:'userupdate.php',
    GETALLUSERTYPE:'getallusertypes.php',
    GETWINETYPEBYUSERTYPE:'getwinetypesbyusertype.php',
    GETWINERIESBYWINETYPE:'getwineriesbywinetypes.php',
    INSERTTOUR:'inserttour.php',
    TOURS:'getalltourbyuser.php',
    GETTOURBYID:'gettourbyid.php',
    DELETETOUR:'deletetour.php',
    EVENTLIST: 'event-attendances',
    UPDATEFEEDBACK:'updatebasictourdetails.php',

    // Update before build
    BUILDNO: "b05",
    VERSION: "1.0.5"
};

export default ApiConstants;
