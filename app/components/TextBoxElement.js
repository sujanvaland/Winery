import React from "react";
import { StyleSheet, TextInput, View, Text, Dimensions, Platform } from "react-native";
import Styles from "../config/styles";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;

const TextBoxElement = props => {
  const {
    keyboardType = "default",
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
        paddingLeft: 0,
        paddingRight: viewportWidth * 0.05,
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
        color: color.COLOR_TEXTCOLOR,
      },
      android: {
        marginBottom: viewportWidth * 0,
        paddingLeft: 0,
        paddingRight: viewportWidth * 0.05,
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
        color: color.COLOR_TEXTCOLOR,
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
        marginBottom: viewportWidth * 0.042,
        paddingLeft: viewportWidth * 0.035,
        paddingRight: viewportWidth * 0.05,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 50,
        letterSpacing: 0,
        position: 'relative',
        borderWidth: 0,
        borderColor: Styles.color.COLOR_RED,
        // backgroundColor: color.COLOR_LIGHTRED,
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_TEXTCOLOR,
      },
      android: {
        // marginBottom: viewportWidth * 0.042,
        paddingLeft: 0,
        paddingRight: viewportWidth * 0.05,
        paddingTop: viewportWidth * 0.014,
        paddingBottom: viewportWidth * 0.01,
        fontSize: Typography.FONT_SIZE14,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        fontFamily: Typography.FONT_REGULAR,
        height: 51,
        letterSpacing: 0,
        borderBottomWidth: 1,
        borderColor: 'red',
        // backgroundColor: color.COLOR_LIGHTRED,
        position: 'relative',
        borderRadius: viewportWidth * 0.015,
        color: color.COLOR_TEXTCOLOR,
      },
    }),
  }
});

export { TextBoxElement };
