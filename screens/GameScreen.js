import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Color from "../components/common/Color";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChosenNumber)
  );

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChosenNumber) ||
      (direction === "greater" && currentGuess > props.userChosenNumber)
    ) {
      Alert.alert("Dont't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    };

    if(direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(prevState => prevState+1);
  };

  const { userChosenNumber, onGameOver } = props;

  // Rerun this useEffect if there is changes props (array of the second parameter of useEffect)
  useEffect(() => {
    if(currentGuess === userChosenNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChosenNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          color={Color.red}
          onPress={nextGuessHandler.bind(this, "lower")}
        />
        <Button
          title="GREATER"
          color={Color.mainBlue}
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
