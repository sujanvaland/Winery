import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Styles from '../config/styles';
const { color, Typography } = Styles;

const NavStyles = StyleSheet.create({
    contentOptions: {
        fontFamily: Typography.FONT_LIGHT,
    },
    UserArea: {
        backgroundColor: '#67024e',
        height: viewportWidth * 0.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfilePicArea: {
        backgroundColor: '#67024e',
    },
    ProfilePic: {
        width: viewportWidth * 0.45,
        // height: viewportWidth * 0.30,
        backgroundColor: '#67024e',
        // borderRadius: 100,
        borderWidth: 0,
        borderColor: '#ffffff',
        // overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    PrifileImage: {
        width: viewportWidth * 0.35,
        height: viewportWidth * 0.35,

    },
    Location: {
        color: '#333333',
        fontSize: viewportWidth * 0.025
    },
    UserName: {
        color: '#67024e',
        fontSize: viewportWidth * 0.045
    },
    MyaccountBox: {
        borderWidth: 0,
        borderColor: "#cccccc",
        marginBottom: viewportWidth * 0.06,
    },
    MyAccountlinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: viewportWidth * 0.020,
        alignItems: 'center',
        paddingVertical: viewportWidth * 0.018
    },
    LinkMenuIcon: {
        width: viewportWidth * 0.06,
        height: viewportWidth * 0.06,
        opacity: 0.6,
        borderWidth: 0,
    },
    AccountTextLink: {
        fontWeight: "bold",
        fontSize: viewportWidth * 0.033
    },
    LogoutBtnText: {
        marginLeft: viewportWidth * 0.08,
        color: '#ffffff',
        fontFamily: Typography.FONT_BOLD,
        fontWeight: 'bold'
    },
    LeftMenuarea: {
        height: viewportHeight,
        position: 'relative',
        borderWidth: 0
    },
    LogoutBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0,
        paddingLeft: viewportWidth * 0.035,

    },
    SafeAeaMenu: {
        borderWidth: 0,
        height: viewportHeight,
        position: 'relative',
    },
    LogoutMenuIcon: {
        width: viewportWidth * 0.06,
        height: viewportWidth * 0.06,
        borderWidth: 0,
        borderColor: 'black',
        margin: 0, opacity: 0.6,

    },
    AccountLinks: {
        borderWidth: 0,
        paddingLeft: viewportWidth * 0.01,
        marginTop: viewportWidth * 0.03,
        fontWeight: 'bold'
    }


});

export default NavStyles;

