import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const StoreListingStyles = StyleSheet.create({
    InnerContainer: {

        height: viewportHeight - viewportWidth * 0.21,
        backgroundColor: color.COLOR_WHITE,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        position: 'relative'
    },
    container: {
        flex: 1,
        width: viewportWidth,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingBottom: viewportHeight * 0.1,
        borderWidth: 0,
        backgroundColor: 'red',
        //height: viewportHeight - viewportWidth * 0.5
    },
    Height100: {
        height: 3000,
        backgroundColor: 'red',
        width: 300
    },
    textBoxInner: {
        position: "absolute",
        left: viewportWidth * 0.035,
        top: 10,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'red'
    },
    textBoxContent: {
        position: "relative",
        borderBottomWidth: 1,
        borderBottomColor: '#969696',
        marginBottom: viewportWidth * 0.05,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '83%'


    },

    textBoxImg: {
        height: viewportWidth * 0.060,
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.035
    },
    passwordImg: {
        height: viewportWidth * 0.06,
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.035,


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
        backgroundColor: color.COLOR_WHITE
    },
    loginBg: {
        position: "absolute",
        width: viewportWidth,
        height: viewportHeight,
        top: 0
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
        justifyContent: "space-between"
    },
    logoImg: {
        width: viewportWidth - viewportWidth * 0.15,
        height: viewportWidth * 0.17
    },

    textBoxInner: {
        position: "absolute",
        left: 0,
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
    passwordImg: {
        height: viewportWidth * 0.05,
        width: viewportWidth * 0.04,
        marginRight: viewportWidth * 0.035
    },
    // signButton:{
    //     backgroundColor:color.COLOR_YELLOW,
    //     borderRadius:viewportWidth*0.01,
    // },
    flexBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 0,
    },
    signText: {
        borderRadius: viewportWidth * 0.009,
        height: 42,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: Typography.FONT_SIZE12,
        color: color.COLOR_DARKBLUE,
        backgroundColor: color.COLOR_YELLOW,
        paddingHorizontal: viewportWidth * 0.07
    },
    accountText: {
        color: color.COLOR_WHITE,
        fontSize: Typography.FONT_SIZE12,
        lineHeight: 50,
        letterSpacing: 0,
        textAlign: 'center',
        fontFamily: Typography.FONT_OpenSansRegular
    },
    btnGreen: {
        marginTop: viewportWidth * 0.04
    },
    btnText: {
        fontSize: Typography.FONT_SIZE17,
        //lineHeight:45,
        textAlign: 'center',
        color: Styles.color.COLOR_WHITE,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        textTransform: 'none',
        width: '100%'

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
        paddingBottom: viewportWidth * 0.01,
        backgroundColor: color.COLOR_PRIMARY


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
    ButtonBox: {
        width: '83%'
    },

    BtnCancle: {
        backgroundColor: color.COLOR_DARKGRAYTWO,
    },
    WineListBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        //width: '100%',
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.03,
        // height: 1500

    },
    BottoleImage: {
        width: viewportWidth * 0.2,
        height: viewportWidth * 0.2
    },
    WineImage: {
        borderWidth: 0,
    },
    WineTextDetail: {
        borderWidth:0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 90,
        paddingTop: viewportWidth * 0.01
    },
    WineButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderWidth: 0,
        minWidth: viewportWidth * 0.09,
        height: 80,
    },
    WinePrice: {
        fontSize: viewportWidth * 0.04,
        fontFamily: Typography.FONT_MEDIUM,
        marginBottom: viewportWidth * 0.015
    },
    WineTexBottle: {
        fontSize: viewportWidth * 0.035,
        fontFamily: Typography.FONT_MEDIUM,
    },
    WineStoreName: {
        fontSize: viewportWidth * 0.035,
        fontFamily: Typography.FONT_MEDIUM,
        maxWidth: viewportWidth * 0.6,
        borderWidth: 0
    },

    BtnGetRoute: {
        backgroundColor: '#696969',
        color: color.COLOR_WHITE,
        fontSize: viewportWidth * 0.03,
        borderRadius: viewportWidth * 0.01,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: viewportWidth * 0.010,
        paddingBottom: viewportWidth * 0.015,
        paddingHorizontal: viewportWidth * 0.02
    },
    BtnText: {
        color: color.COLOR_WHITE,
        fontSize: viewportWidth * 0.03
    },
    SearchStore: {
        backgroundColor: color.COLOR_PRIMARY,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: viewportWidth,
        paddingHorizontal: viewportWidth * 0.020,
        paddingVertical: viewportWidth * 0.02,
        paddingBottom: viewportWidth * 0.04,

    },
    CheckBoxText: {
        color: '#c670b1',
        marginTop: viewportWidth * 0.011
    },
    CheckBoxSearch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    CheckBoxBox: {
        marginRight: viewportWidth * 0.02,
        borderColor: color.COLOR_WHITE,
    },
    PickeBoxMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PickeBox: {
        width: '48%',
        borderBottomWidth: 1,
        borderBottomColor: '#c670b1'

    },
    PickeElement: {
        color: '#c670b1',
    },
    BototmButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.COLOR_PRIMARY,
        paddingVertical: viewportWidth * 0.04,
        paddingTop: viewportWidth * 0.033,
        paddingHorizontal: viewportWidth * 0.05,
        width: viewportWidth,


    },
    WineTexBottle: {
        fontWeight: 'bold'
    },
    BtnFeedback: {
        color: color.COLOR_WHITE,
        paddingHorizontal: viewportWidth * 0.03,
        fontWeight: 'bold',
        // backgroundColor: '#a52586',
        paddingVertical: viewportWidth * 0.020,
        paddingTop: viewportWidth * 0.020,
        paddingHorizontal: viewportWidth * 0.0,
        borderRadius: viewportWidth * 0.3,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    WhiteText: {
        color: color.COLOR_WHITE,
        fontSize: viewportWidth * 0.04,
    },
});

export default StoreListingStyles;
