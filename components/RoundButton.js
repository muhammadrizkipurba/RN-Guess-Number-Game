import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Color from "./common/Color";

const RoundButton = props => {
  
  const { 
    paddingHorizontal,
    paddingVertical,
    backgroundColor,
    borderColor,
    textColor,
    onPress
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View 
        style={{
          ...styles.button, 
          paddingVertical: paddingVertical ? paddingVertical : 12,
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 12,
          borderColor: borderColor ? borderColor : 'transparent',
          borderWidth: borderColor ? 2 : 0, 
          backgroundColor: backgroundColor ? backgroundColor : Color.mainBlue,
        }}
      >
        <Text style={{...styles.buttonText, color: textColor ? textColor : Color.white}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50
  },
  buttonText: {
    fontFamily: 'helvetica',
    fontSize: 18
  }
});

export default RoundButton;
