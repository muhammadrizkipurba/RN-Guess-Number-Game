import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./common/Color";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.mainBlue,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Color.mainBlue,
    fontSize: 30,
    fontFamily: 'helvetica-bold'
  }
});

export default NumberContainer;
