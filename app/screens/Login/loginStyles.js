import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: viewportHeight,
        width: viewportWidth,
        alignItems: 'center',
        justifyContent: 'center',


    },
    loginBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: viewportWidth * 0.042
    },
    loginView: {
        position: "relative",
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.COLOR_PRIMARY


    },
    logo: {
        width: viewportWidth * 0.65,
    },
    loginContainer: {

        height: viewportWidth,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,




    },
    ImageBack: {
        height: viewportHeight,
        width: viewportWidth,
        borderWidth: 0,
        backgroundColor: '#ffffff',
        display: 'flex',
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 0,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    loginButton: {
        backgroundColor: color.COLOR_PRIMARY
    },
    loginArea: {
        borderWidth: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 40,
        borderColor: color.COLOR_PRIMARY,
        borderRadius: 20,
    },
    loginBg: {
        position: "absolute",
        width: viewportWidth,
        height: viewportHeight,
        top: 0
    },
    textBoxStyle: {
        marginBottom: 17,
        paddingHorizontal: 12,
        paddingVertical: 5,
        fontSize: Typography.FONT_SIZE,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        lineHeight: 20,
        letterSpacing: 0,
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: color.COLOR_CHECKBOX,
        position: 'relative',
        backgroundColor: 'red'
    },
    errorMessage: {
        color: '#ccc',
        fontSize: viewportWidth * 0.035,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        lineHeight: viewportWidth * 0.05,
        letterSpacing: 0,
        paddingLeft: 0,
        position: "relative",
        borderWidth: 0,
        paddingLeft: 22,
        marginBottom: 24
    },
    logomain: {
        width: viewportWidth * 0.5,
        marginBottom: 10
    },
    alertIcon: {
        width: viewportWidth * 0.05,
        height: viewportWidth * 0.05,
        position: "absolute",
        top: 2
    },
    alertMainBox: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logoImg: {
        width: viewportWidth - viewportWidth * 0.15,
        height: viewportWidth * 0.17
    },
    textBoxContent: {
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: '#c9b3c4',
        marginBottom: viewportWidth * 0.05,

    },
    SocialButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,

    },
    BtnFacebook: {
        backgroundColor: '#3a5794',
        width: '48%',
        paddingTop: viewportWidth * 0.030,
        paddingBottom: viewportWidth * 0.035

    },
    BtnText: {
        color: '#ffffff'
    },
    BtnInsta: {
        backgroundColor: '#611a1f',
        width: '48%',
        paddingTop: viewportWidth * 0.030,
        paddingBottom: viewportWidth * 0.035
    },
    SocialIcon: {
        width: viewportWidth * 0.05,
        height: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.02
    },
    SocialComonBtn: {
        borderRadius: 100,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff'
    },
    textBoxInner: {
        position: "absolute",
        left: viewportWidth * 0.035,
        top: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    lineImg: {
        height: viewportWidth * 0.07,
    },
    textBoxImg: {
        height: viewportWidth * 0.060,
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.035
    },
    passwordImg: {
        height: viewportWidth * 0.06,
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.035
    },
    // signButton:{
    //     backgroundColor:color.COLOR_YELLOW,
    //     borderRadius:viewportWidth*0.01,
    // },
    flexBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
    signText: {
        borderRadius: viewportWidth * 0.009,
        textAlign: 'center',
        fontSize: Typography.FONT_SIZE12,
        color: color.COLOR_DARKBLUE,
        backgroundColor: color.COLOR_YELLOW,
        paddingHorizontal: viewportWidth * 0.07
    },
    accountText: {
        color: color.COLOR_TEXTCOLOR,
        fontSize: Typography.FONT_SIZE12,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: Typography.FONT_OpenSansRegular
    },
    NewRegistration: {
        display: 'flex',
        marginTop: viewportWidth * 0.09,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    TextSignup: {
        fontSize: Typography.FONT_SIZE12,
        color: color.COLOR_LINKCOLOR
    },
    BtnSignup: {
        fontSize: Typography.FONT_SIZE12,
        marginLeft: viewportWidth * 0.02
    },
    LogoBox: {
        width: viewportWidth * 0.2
    }
});

export default loginStyles;
