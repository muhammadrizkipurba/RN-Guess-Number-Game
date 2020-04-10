import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Color from "../components/common/Color";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Game is Over!</Text>
      <Text style={styles.text}>Number of Rounds : {props.roundsNumber}</Text>
      <Text style={styles.textUserNumber}>Your chosen number was : {props.userNumber}</Text>
      <Button 
        title="NEW GAME"
        color={Color.mainBlue}
        onPress={props.onRestartGame }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textUserNumber: {
    fontSize: 18,
    marginBottom: 20
  }
});

export default GameOverScreen;