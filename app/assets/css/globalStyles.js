import { StyleSheet, Dimensions } from 'react-native';
import { configureFonts } from 'react-native-paper';
import Styles from '../../config/styles';
const { color, fonts, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const globalStyles = StyleSheet.create({

  container: {
    width: viewportWidth,
    height: viewportHeight - 60,
    padding: viewportWidth * 0.03,
    fontFamily: fonts.FONT_REGULAR
  },
  PageTitle: {
    fontSize: fonts.FONT_20,
    color: color.COLOR_BLUE,
    marginBottom: viewportWidth * 0.02,
    fontFamily: fonts.FONT_REGULAR
  },
  ParaText: {
    color: color.COLOR_GREY,
    fontSize: fonts.FONT_14,
    fontFamily: fonts.FONT_BODY,
    marginBottom: viewportWidth * 0.04
  },
  ImageBack: {
    height: viewportHeight - 65,
    width: viewportWidth,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    display: 'flex',
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  FontLight: {
    fontFamily: Typography.FONT_LIGHT
  },
  FontRegular: {
    fontFamily: Typography.FONT_REGULAR
  },
  FontBold: {
    fontFamily: Typography.FONT_BOLD
  },
  FontSemibold: {
    fontFamily: Typography.FONT_MEDIUM
  }



});

export default globalStyles;
