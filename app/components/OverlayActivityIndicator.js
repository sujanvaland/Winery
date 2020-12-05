import React from "react";
import { View, ActivityIndicator } from "react-native";
import Styles from "../config/styles";
const { color} = Styles;
// import { color } from "../config/styles";

const OverlayActivityIndicatorElement = props => {
  const { size = "small" } = props;
  const loadingStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: color.COLOR_BLACK,
    height:"100%",
    width:"100%",
    opacity:0.6,
    zIndex:9999999999,
  }
  return (
    <View pointerEvents="none" style={loadingStyle}>
      <ActivityIndicator size='large' color="#444"/>
    </View>
  )
};

export { OverlayActivityIndicatorElement };
