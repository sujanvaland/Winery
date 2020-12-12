import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const VerifyOtpstyles = StyleSheet.create({
    loginBg: {
        position: "absolute",
        width: viewportWidth,
        height: viewportHeight,
        top: 0
    },
    verificationInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleText: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE22,
        textTransform: 'uppercase',
        fontFamily: Typography.FONT_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        marginBottom: 30,
        borderWidth: 0,
        width: '100%'


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
    loginContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: viewportHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '2',
        width: '100%'
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
    verification: {
        width: viewportWidth * 0.7,
        height: viewportWidth * 0.7,
        overflow: 'visible',
    },
    ImgContainer: {
        marginTop: viewportWidth * 0.15,
        marginBottom: viewportWidth * 0.07
    },

    Detailtext: {
        color: color.COLOR_WHITE,
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE14,
        textAlign: 'center',
    },
    textInput: {
        backgroundColor: color.COLOR_WHITE,
        marginHorizontal: viewportWidth * 0.02,
        marginVertical: viewportWidth * 0.06,
        fontSize: Typography.FONT_SIZE18,
        height: viewportWidth * 0.12,
        width: viewportWidth * 0.11,
        borderRadius: viewportWidth * 0.01,
        paddingHorizontal: viewportWidth * 0.02,
        color: color.COLOR_BLACK,
        textAlign: "center",
        fontFamily: Typography.FONT_BOLD
    },
    textBoxContent: {
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: color.COLOR_LIGHTGRAY,
        marginBottom: viewportWidth * 0.05,

    },
    buttonStyle: {
        fontSize: Typography.FONT_SIZE,
        textAlign: 'center',
        color: Styles.color.COLOR_WHITE,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        textTransform: 'none',
        shadowOpacity: 0,
        marginTop: viewportWidth * 0.018,
        height: 50,

        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: viewportWidth * 0.01,


    },
    FgtText: {
        color: color.COLOR_TEXTCOLOR,
        fontSize: Typography.FONT_SIZE12,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: Typography.FONT_OpenSansRegular
    },
    buttonStyle: {
        fontSize: Typography.FONT_SIZE,
        textAlign: 'center',
        color: Styles.color.COLOR_WHITE,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        textTransform: 'none',
        shadowOpacity: 0,
        marginTop: viewportWidth * 0.035,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: viewportWidth * 0.01


    },
    buttonStyleDisable: {
        backgroundColor: color.COLOR_DISABLEDBUTTON,
        color: '#c06fac'
    },
    buttonStyleActive: {
        backgroundColor: color.COLOR_BUTTONCOLOR,
    },
    buttonStyleText: {
        fontSize: Typography.FONT_SIZE17,
        //lineHeight:45,
        textAlign: 'center',
        color: Styles.color.COLOR_WHITE,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        textTransform: 'none',
        borderRadius: viewportWidth * 0.009,
    },
    loginContainer: {

        height: viewportHeight,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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
    flexBox: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBoxInner: {
        position: "absolute",
        right: viewportWidth * 0.035,
        top: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    lineImg: {
        height: viewportWidth * 0.07,
    },
    textBoxImg: {
        height: viewportWidth * 0.048,
        width: viewportWidth * 0.05,
        marginLeft: viewportWidth * 0.035
    },
    btnGreen: {
        marginTop: viewportWidth * 0.04
    },
    btnText: {
        fontSize: Typography.FONT_SIZE,
        paddingHorizontal: viewportWidth * 0.12,
        paddingVertical: viewportWidth * 0.035,
        color: color.COLOR_WHITE,
        fontFamily: Typography.FONT_REGULAR,
        borderRadius: viewportWidth * 0.01,

    },
    BtnCancle: {
        backgroundColor: color.COLOR_DARKGRAYTWO,
    },

    btnDisable: {
        backgroundColor: color.COLOR_GREY,
    },
    btnActive: {
        backgroundColor: color.COLOR_PRIMARY,
    }
});

export default VerifyOtpstyles;
