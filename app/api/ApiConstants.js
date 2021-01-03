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
    GETTOURBYID:'gettourdetailsbytourid.php',
    DELETETOUR:'deletetour.php',
    EVENTLIST: 'event-attendances',

    // Update before build
    BUILDNO: "b01",
    VERSION: "1.0.0"
};

export default ApiConstants;
