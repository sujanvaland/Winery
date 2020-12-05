import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, fonts, Typography } = Styles;
const Homestyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.COLOR_WHITE,
        borderWidth: 0,


    },
    InnerContainer: {

        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    ContainerMargin: {
        marginHorizontal: viewportWidth * 0.03,
        marginVertical: viewportWidth * 0.02,
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    Homebanner: {
        backgroundColor: color.COLOR_WHITE,
        height: viewportHeight * 0.40,
        borderWidth: 0,
    },
    LinkButton: {
        paddingHorizontal: viewportWidth * 0.02,
        paddingVertical: viewportWidth * 0.02,
        color: color.COLOR_LINKCOLOR,
        textAlign: 'right'

    },
    HomeLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    MarTop10: {
        marginTop: viewportWidth * 0.03
    },
    ServicesTitle: {

        color: color.COLOR_GREY,
        fontSize: viewportWidth * 0.042,
        marginBottom: viewportWidth * 0.02

    },
    MarginBottom10: {
        marginBottom: viewportWidth * 0.02
    },
    ServicesBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#e2e2e2',
        paddingBottom: viewportWidth * 0.04,
        paddingTop: viewportWidth * 0.04,
        display: 'flex'
    },
    ServicesBoxList: {
        display: 'flex',


    },
    SubTitle: {
        color: '#9b9b9b'
    },
    InnerTitle: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        width: '100%',
        marginTop: viewportWidth * 0.02

    },
    MarTopzero: {
        marginTop: 0,
    },
    DateText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        borderWidth: 0,
        textAlign: 'right',
        fontSize: Typography.FONT_SIZE10,
        lineHeight: viewportWidth * 0.035,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_REGULAR,
    },
    EventLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        textAlign: 'left',
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE10,
        color: color.COLOR_INNERTITLE
    },
    RedButtonBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    RedButton: {
        backgroundColor: color.COLOR_LINKCOLOR,
        width: 100,
        borderRadius: viewportWidth * 0.01,
        paddingVertical: viewportWidth * 0.01,
        paddingBottom: viewportWidth * 0.015,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    BtnText: {
        color: color.COLOR_WHITE
    },
    RatingBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    EventTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        fontFamily: Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        marginBottom: viewportWidth * 0.02,
    },
    LastEventText: {
        fontSize: Typography.FONT_SIZE12,
        fontFamily: Typography.FONT_REGULAR,
        lineHeight: viewportWidth * 0.048
    },
    WhiteBox: {

        paddingHorizontal: viewportWidth * 0.04,
        paddingVertical: viewportWidth * 0.035,
        backgroundColor: color.COLOR_WHITE,
        borderRadius: viewportWidth * 0.01,
        marginTop: viewportWidth * 0.035,
        shadowColor: '#d7d7d7',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2.62,
        elevation: 3,
        borderWidth: 0,
        borderColor: '#d7d7d7',
        width: '100%',


    },
    MarBtm20: {
        paddingBottom: viewportWidth * 0.05
    },
    FullWidthTitleBack: {
        paddingHorizontal: viewportWidth * 0.03,
        paddingVertical: viewportWidth * 0.025,
        backgroundColor: color.COLOR_WHITE,
        borderRadius: 0,
        marginBottom: viewportWidth * 0.02,
        shadowColor: '#d7d7d7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2.62,
        elevation: 3,
        borderWidth: 0,
        borderColor: '#d7d7d7',
        width: '100%',
    },
    ResultText: {
        fontSize: viewportWidth * 0.032
    },
    InnerTitleIcon: {
        width: viewportWidth * 0.05,
        marginRight: viewportWidth * 0.02
    },
    InnerTitleText: {
        fontSize: Typography.FONT_SIZE17,
        color: color.COLOR_INNERTITLE,
        fontFamily: Typography.FONT_MEDIUM
    },
    StarImage: {
        width: 18,
        height: 18,
        resizeMode: 'cover',
    }

});

export default Homestyles;
