import React, { useState } from "react";
import { 
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Color from "../components/common/Color";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/common/BodyText";

const StartGameScreen = props => {
  
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
 
  const onChangeInput = value => {
    // drop any value which not a number
    const regex = RegExp(/[^0-9]/g);
    const inputText = regex.test(value);

    if(!inputText) {
      setEnteredValue(value);
    } else {
      setEnteredValue('');
    };
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      
      Alert.alert(
        'Invalid number!', 
        'Input a number between 1 and 99.', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );

      return ;
    };

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmOutput;

  if(confirmed) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{fontSize: 18}}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)} color={Color.mainBlue} />
      </Card>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card>
          <BodyText>Type a Number</BodyText>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2} 
            onChangeText={onChangeInput}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title='Reset' 
                onPress={resetInputHandler} 
                color={Color.red}
              />
            </View>
            <View style={styles.button}>
              <Button 
                title='Confirm' 
                onPress={confirmInputHandler} 
                color={Color.mainBlue}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontFamily: "helvetica-bold",
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 20
  },
  button: {
    width: 100
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: "center",
    marginBottom: 20
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  }
});

export default StartGameScreen;
