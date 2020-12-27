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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderWidth: 0,
        position: 'relative',
        borderColor: 'red'
    },
    container: {
        flex: 1,
        height: viewportHeight,
        width: viewportWidth,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        paddingBottom: viewportHeight * 0.1,
        borderWidth: 0,

        backgroundColor: color.COLOR_WHITE
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
    FeedbackFormBox: {
        width: '100%',
        borderWidth: 0,

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
    TextBox: {
        color: '#000000'
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
        alignItems: "center",
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
        width: '100%',
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.03
    },
    WineImage: {
        borderWidth: 0,
    },
    WineTextDetail: {
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 90,
        paddingTop: viewportWidth * 0.01
    },
    WineButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderWidth: 0,
        minWidth: viewportWidth * 0.25,
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
        // backgroundColor: color.COLOR_PRIMARY,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: viewportWidth,
        paddingHorizontal: viewportWidth * 0.020,
        paddingVertical: viewportWidth * 0.02,
        paddingBottom: viewportWidth * 0.04,
        position: 'absolute',
        zIndex: 9999

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
        borderWidth: 0,
        borderBottomColor: '#f2f2f2',
        backgroundColor: color.COLOR_WHITE,
        borderRadius: 50,
        overflow: 'hidden',
        paddingLeft: viewportWidth * 0.02,
        paddingRight: 0,
    },
    PickeElement: {
        color: '#000000',
    },
    MapPopup: {
        backgroundColor: '#ffffff',
        paddingHorizontal: viewportWidth * 0.015,
        paddingVertical: viewportWidth * 0.015,
        borderWidth: 1,
        borderColor: '#cccccc',
        position: 'relative'
    },
    StoreImage: {
        // width: 100,
        // height: 150,
        borderWidth: 2,
        zIndex: 9999,
        // position: 'absolute',
        top: 0,
    },
    StoreNameBox: {
        fontSize: viewportWidth * 0.035,
        textAlign: 'center'
    },
    MapImageBox: {
        borderWidth: 0,
        // height: 100,
        // width: 100,
        position: 'relative',
        paddingVertical: 0,
        paddingHorizontal: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
        flexDirection: 'row'
    },
    CallOutBox: {
        borderWidth: 0,
    },
    CheckboxAbsolute: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    MapViewbox: {
        width: viewportWidth,
        height: viewportHeight - viewportWidth * 0.2,
        borderWidth: 0,
    },
    BototmButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: color.COLOR_PRIMARY,
        paddingVertical: viewportWidth * 0.06,
        paddingTop: 0,
        paddingHorizontal: viewportWidth * 0.05,
        width: viewportWidth,
        position: 'absolute',
        bottom: 0,
        zIndex: 9999

    },
    FlexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    BtnFeedback: {
        color: color.COLOR_WHITE,
        paddingHorizontal: viewportWidth * 0.03,
        fontWeight: 'bold',
        backgroundColor: '#a52586',
        paddingVertical: viewportWidth * 0.025,
        paddingTop: viewportWidth * 0.020,
        paddingHorizontal: viewportWidth * 0.05,
        borderRadius: viewportWidth * 0.3,
        marginRight: viewportWidth * 0.02
    },
    WhiteText: {
        color: color.COLOR_WHITE
    },
    BtnStart: {
        color: color.COLOR_WHITE,
        paddingHorizontal: viewportWidth * 0.03,
        fontWeight: 'bold',
        backgroundColor: '#320025',
        paddingVertical: viewportWidth * 0.025,
        paddingTop: viewportWidth * 0.020,
        paddingHorizontal: viewportWidth * 0.05,
        borderRadius: viewportWidth * 0.3
    },
    FeedbackModal: {
        backgroundColor: color.COLOR_WHITE,
        height: viewportHeight,
        width: viewportWidth,
        marginHorizontal: 0,
        paddingHorizontal: viewportWidth * 0.05,

        borderWidth: 0,
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    FeedbackFormBoxMain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: viewportWidth * 0.05,
    },
    FeedbackModalMain: {

        // backgroundColor: color.COLOR_WHITE,
        paddingVertical: 0,
        marginHorizontal: 0,
    },
    TextBoxcontainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',

    },
    ModalHeader: {
        height: viewportWidth * 0.15,
        width: viewportWidth,
        borderBottomWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: viewportWidth * 0.045,
        backgroundColor: '#67024e',
    },
    ModalHeaderText: {
        fontSize: viewportWidth * 0.045,
        fontWeight: 'bold',
        color: color.COLOR_WHITE
    },
    PickerBox: {
        borderWidth: 1,
        width: viewportWidth,
        height: 55,
        borderColor: '#cccccc'
    },
    PickeElementModal: {
        height: 55,
    },
    RatingBox: {
        borderBottomWidth: 1,
        width: '100%',
        minHeight: 55,
        borderColor: '#cccccc',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderTopWidth: 0,
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: viewportWidth * 0.025,
        paddingBottom: viewportWidth * 0.035,
        marginBottom: 5,
    },
    RatingBoxNotedesc: {
        height: viewportWidth * 0.2,
        paddingLeft: 0,
    },
    RatingsBoxforRating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    RatingBoxTitle: {
        marginBottom: viewportWidth * 0.02,
        fontWeight: 'bold'
    },
    RatingBoxTitleValue: {
        fontWeight: 'normal',
        marginBottom: 10,
    },
    ModalButtonArea: {
        marginTop: viewportWidth * 0.03,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ModalButton: {
        backgroundColor: '#a52586',
        paddingTop: viewportWidth * 0.02,
        paddingBottom: viewportWidth * 0.03,
        paddingHorizontal: viewportWidth * 0.15,
        borderRadius: 100,
        marginHorizontal: viewportWidth * 0.02
    },
    ModalButtonText: {
        fontSize: viewportWidth * 0.04,
        color: color.COLOR_WHITE
    },
    ModalButtonSubmit: {
        backgroundColor: '#320025',
        paddingTop: viewportWidth * 0.02,
        paddingBottom: viewportWidth * 0.03,
        paddingHorizontal: viewportWidth * 0.15,
        borderRadius: 100,
        marginHorizontal: viewportWidth * 0.02
    },
    StarImageforRate: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        marginHorizontal: viewportWidth * 0.002
    },



});

export default StoreListingStyles;
