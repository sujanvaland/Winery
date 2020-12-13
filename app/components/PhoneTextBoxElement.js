import React from "react";
import { StyleSheet, TextInput, View, Text, Dimensions } from "react-native";
import Styles from "../config/styles";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const PhoneTextBoxElement = props => {
  const {
    keyboardType = "phone-pad",
    autoCapitalize = "words",
    placeholder = "",
    secureTextEntry = false,
    onChangeText = () => { },
    onEndEditing = () => { },
    onBlur = () => { },
    value,
    inputStyle = {},
    isvalidInput = true,
  } = props;
  const { containerStyle, textBoxStyle, errorTextBox } = styles;

  return (
    <View style={[containerStyle, inputStyle]}>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onBlur={onBlur}
        value={value}
        style={[(isvalidInput) ? textBoxStyle : errorTextBox]}
        placeholderTextColor='#96658a'
      />
      {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center"
  },
  textBoxStyle: {
    ...Platform.select({
      ios: {
        marginBottom: 0,
        paddingLeft: viewportWidth * 0.02,
        paddingRight: 0,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 50,
        letterSpacing: 0,
        borderWidth: 1,
        borderColor: "transparent",
        position: 'relative',
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_WHITE,
      },
      android: {
        marginBottom: viewportWidth * 0,
        paddingLeft: viewportWidth * 0.035,
        paddingRight: viewportWidth * 0.0,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 50,
        letterSpacing: 0,
        // backgroundColor: color.COLOR_WHITE,
        position: 'relative',
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_WHITE,
        borderWidth: 1,
        borderColor: "transparent",
      },
    }),
  },
  errorMessage: {
    color: color.COLOR_RED,
    fontSize: Typography.FONT_SIZE14,
    fontWeight: Typography.FONT_WEIGHT_NORMAL,
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom: 17,
  },
  errorTextBox: {
    ...Platform.select({
      ios: {
        marginBottom: 0,
        paddingLeft: viewportWidth * 0.035,
        paddingRight: viewportWidth * 0.13,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 50,
        letterSpacing: 0,
        borderWidth: 1,
        borderColor: "transparent",
        position: 'relative',
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_WHITE,
      },
      android: {
        marginBottom: viewportWidth * 0,
        paddingLeft: viewportWidth * 0.035,
        paddingRight: viewportWidth * 0.0,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 50,
        letterSpacing: 0,
        backgroundColor: "transparent",
        position: 'relative',
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_WHITE,
        borderWidth: 1,
        borderColor: "transparent",
      },
    }),
  }
});

export { PhoneTextBoxElement };
