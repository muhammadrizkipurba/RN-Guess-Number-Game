import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

import Color from "../components/common/Color";
import BodyText from "../components/BodyText";
import RoundButton from "../components/RoundButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Image
        resizeMode="contain"
        // source={{ uri: 'https://...image_url'}}  --> for web source images
        source={require("../assets/stay-at-home.png")}
        style={styles.image}
      />
      <View style={styles.resultContainer}>
        <BodyText style={styles.text}>
          Your opponent needed <Text style={styles.highlight}>{props.roundsNumber}</Text> {props.roundsNumber > 1 ? 'rounds' : 'round'} to guess your chosen number
          which was <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <RoundButton 
        onPress={props.onRestartGame}
        paddingHorizontal={30}
      >
        START GAME
      </RoundButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "helvetica-bold",
    fontSize: 22,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 35
  },
  resultContainer: {
    width: '80%'
  },
  highlight: {
    fontSize: 21,
    fontFamily: 'helvetica-bold',
    color: Color.mainBlue
  },
  image: {
    width: "80%",
    height: 300,
    marginTop: 30,
    marginBottom: 20
  },
});

export default GameOverScreen;
