import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Styles from '../config/styles';
const { color, Typography } = Styles;

const NavStyles = StyleSheet.create({
    contentOptions: {
        fontFamily: Typography.FONT_LIGHT,
    },
    UserArea: {
        backgroundColor: color.COLOR_MENUTOP,
        height: viewportWidth * 0.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProfilePic: {
        width: viewportWidth * 0.30,
        height: viewportWidth * 0.30,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#ffffff',
        overflow: 'hidden',
        marginBottom: viewportWidth * 0.03,
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
        borderColor: "#cccccc"
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
        fontFamily: Typography.FONT_BOLD
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
        position: 'absolute',
        bottom: viewportWidth * 0.2
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


});

export default NavStyles;

