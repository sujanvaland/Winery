/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
import { Dimensions, ColorPropType } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const AppStyles = {
    color: {

        COLOR_PRIMARY: '#67024e',
        COLOR_SECONDARY: '#111',
        COLOR_WHITE: '#FFFFFF',
        COLOR_BLACK: '#000000',
        COLOR_BUTTONCOLOR: '#a42585',
        COLOR_DISABLEDBUTTON: '#790c5e',
        COLOR_GREY: '#787878',
        COLOR_GREEN: 'green',
        COLOR_PLACEHOLDER: '#111111',
        COLOR_GREY_WHITE: '#fafafa',
        COLOR_DARK_SEPERATOR: '#d4d4d4',
        COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
        COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
        COLOR_DARTGRAY: '#cccccc',
        COLOR_BLUE: '#00c6f0',
        COLOR_LINKCOLOR: '#fe17c5',
        COLOR_LIGHTRED: '#e9c4c6',
        COLOR_DARTBLACK: '#2a2a2a',
        COLOR_DARKRED: '#611a1f',
        COLOR_BLUE: '#3a5794',
        COLOR_LIGHTGRAY: '#969696',
        COLOR_DARKGRAYTWO: '#2b2b2b',
        COLOR_INNERTITLE: '#353535',
        COLOR_LEVELCOLOR: '#dedede',
        COLOR_MENUTOP: '#f5f5f5',
        COLOR_TEXTCOLOR: '#ffffff',
        COLOR_DARKTEXT: '#000000'



    },
    fonts: {
        FONT_REGULAR: 'Century_Gothic',
        FONT_BODY: 'Poppins_Regular',
        FONT_MEDIUM: 'Bold',
        FONT_14: viewportWidth * 0.033,
        FONT_15: viewportWidth * 0.04,
        FONT_20: viewportWidth * 0.05
    },
    Typography: {
        FONT_REGULAR: 'OpenSans',
        FONT_MEDIUM: 'OpenSans',
        FONT_BOLD: 'OpenSans',
        FONT_Italic: 'OpenSans',
        FONT_LIGHT: 'OpenSans',
        FONT_LibreBaskerville: "LibreBaskerville-Regular",
        FONT_OpenSansRegular: "OpenSans",
        FONT_Roboto: 'Roboto',
        FONT_SIZE: viewportWidth * 0.04,
        FONT_SIZE14: viewportWidth * 0.036,
        FONT_SIZE15: viewportWidth * 0.037,
        FONT_SIZE12: viewportWidth * 0.032,
        FONT_SIZE10: viewportWidth * 0.029,
        FONT_SIZE8: viewportWidth * 0.026,
        FONT_SIZE6: viewportWidth * 0.023,
        FONT_SIZE18: viewportWidth * 0.045,
        FONT_SIZE17: viewportWidth * 0.041,
        FONT_SIZE10: viewportWidth * 0.03,
        FONT_SIZE20: viewportWidth * 0.048,
        FONT_SIZE22: viewportWidth * 0.05,
        FONT_SIZE24: viewportWidth * 0.06,
        FONT_SIZE26: viewportWidth * 0.065,
        FONT_SIZE28: viewportWidth * 0.07,
        FONT_SIZE30: viewportWidth * 0.072,
        FONT_SIZE32: viewportWidth * 0.074,
        FONT_SIZE34: viewportWidth * 0.076,
        FONT_SIZE36: viewportWidth * 0.078,
        FONT_SIZE38: viewportWidth * 0.08,
        FONT_SIZE40: viewportWidth * 0.082,
        FONT_WEIGHT_NORMAL: "normal",
        FONT_WEIGHT_500: "500",
        FONT_WEIGHT_BOLD: "bold",
        FONT_STYLE_NORMAL: "normal",
    }
};
export default AppStyles;
