import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = props => <Text style={{...props.style, ...styles.text}}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: 'helvetica',
    fontSize: 18
  }
});

export default BodyText;