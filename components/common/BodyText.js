import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = props => <Text style={styles.text}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: 'helvetica',
    fontSize: 16
  }
});

export default BodyText;