import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const PersonalDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.COLOR_WHITE,
    width: viewportWidth,
  },
  Spacer: { width: '100%', height: 10, },
  InnerContainer: {

    borderWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 25,

  },
  ProfileEdit: {
    width: viewportWidth * 0.07,
    height: viewportWidth * 0.07
  },
  btnEditProfile: {
    position: 'absolute',
    right: viewportWidth * 0.03,
    top: 10
  },
  MyprofileBox: {
    backgroundColor: color.COLOR_PRIMARY,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: viewportWidth,
    paddingVertical: viewportWidth * 0.05,
    position: 'relative',
    overflow: 'hidden',
  },
  ProfilePic: {
    borderRadius: 100,
    overflow: 'hidden'
  },
  ProfileEditSmall: {
    width: viewportWidth * 0.05
  },
  ProfileBox: {
    width: viewportWidth * 0.40,
    height: viewportWidth * 0.40,
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#ffffff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  ProfileDetail: {
    color: color.COLOR_WHITE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: viewportWidth * 0.05

  },
  NameBox: {
    color: color.COLOR_WHITE,
    fontSize: viewportWidth * 0.04,
    textTransform: "uppercase"
  },
  LocationBox: {
    color: color.COLOR_WHITE,
    fontSize: viewportWidth * 0.03
  },
  WhiteBox: {

    paddingHorizontal: viewportWidth * 0.04,
    paddingVertical: viewportWidth * 0.035,
    backgroundColor: color.COLOR_WHITE,
    borderRadius: viewportWidth * 0.01,
    marginTop: viewportWidth * 0.045,
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
  ProfileContactdetal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: viewportWidth * 0.02
  },
  IconAddress: {
    width: viewportWidth * 0.05,
    height: viewportWidth * 0.05,
    marginRight: viewportWidth * 0.02
  },
  EmailText: {
    fontSize: Typography.FONT_SIZE14,
    color: color.COLOR_INNERTITLE
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
  MarBtm20: {
    paddingBottom: viewportWidth * 0.05
  },
  CarBbox: {
    marginTop: viewportWidth * 0.03,
    marginBottom: viewportWidth * 0.03
  },
  CardTitle: {
    fontSize: Typography.FONT_SIZE17,
    color: color.COLOR_INNERTITLE,

  },
  InnerTitleIcon: {
    width: viewportWidth * 0.055,
    marginRight: viewportWidth * 0.02
  },
  InnerTitleText: {
    fontSize: Typography.FONT_SIZE17,
    color: color.COLOR_INNERTITLE,
    fontFamily: Typography.FONT_MEDIUM
  },
  MarTopzero: {
    marginTop: 0,
  },
  CustomerFeedLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  InnerTitleIcon: {
    width: viewportWidth * 0.055,
    marginRight: viewportWidth * 0.02
  },
  ResultText: {
    fontSize: viewportWidth * 0.032
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
  AddBtnText: {
    color: color.COLOR_LINKCOLOR

  },
  AddBtn: {
    borderWidth: 0,
    paddingHorizontal: viewportWidth * 0.02
  },
  FullwidthBox: {
    width: '100%',
  },
  Fnt12: {
    fontSize: Typography.FONT_SIZE10
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
  EventLocation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    textAlign: 'left',
    fontFamily: Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE10,
    color: color.COLOR_INNERTITLE,
    marginBottom: viewportWidth * 0.03
  },
  DateText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    borderWidth: 0,
    marginBottom: viewportWidth * 0.020,
    textAlign: 'right',
    fontSize: Typography.FONT_SIZE10,
    lineHeight: viewportWidth * 0.035,
    color: color.COLOR_INNERTITLE,
    fontFamily: Typography.FONT_REGULAR,
  },
  PadTop5: {

  },

});

export default PersonalDetailStyles;
