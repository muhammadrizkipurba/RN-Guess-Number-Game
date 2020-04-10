import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return (
    <View style={{...styles.cardContaiter, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContaiter: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
  }
});

export default Card;
