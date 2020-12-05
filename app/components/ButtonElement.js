import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Styles from "../config/styles";
import { Dimensions } from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;
import { Icon, View } from "native-base";




const ButtonElement = props => {
  const { title = "", onPress, disabled = true } = props;

  const { buttonStyle } = styles;
  return (
    <View style={styles.flexBox}>
      <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7} style={[styles.buttonStyle, (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>
        <Text style={[styles.buttonStyleText, (disabled) ? styles.buttonStyleDisable : styles.buttonStyleActive]}>{title}</Text>
        {/* <Icon
          name="chevron-forward"
          style={styles.arrowRight}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingBottom: viewportWidth * 0.01


  },
  buttonStyleDisable: {
    backgroundColor: Styles.color.COLOR_DISABLEDBUTTON,
    color: '#c06fac'



  },
  buttonStyleActive: {
    backgroundColor: Styles.color.COLOR_BUTTONCOLOR,
  },
  buttonStyleText: {
    fontSize: Typography.FONT_SIZE17,
    //lineHeight:45,
    textAlign: 'center',
    color: Styles.color.COLOR_WHITE,
    textTransform: 'none',
    borderRadius: viewportWidth * 0.009,

  },
  arrowRight: {
    color: color.COLOR_WHITE,
    fontSize: Typography.FONT_SIZE18,
    marginLeft: viewportWidth * 0.02,
    marginTop: 2
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  },
});


export { ButtonElement };
