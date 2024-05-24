import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";
import Colors from "../../constants/Colors";
import Title from "@/components/Title";

const { width } = Dimensions.get("screen");

const StartGameScreen = ({ onConfirmedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function setNumber(enterText) {
    setEnteredNumber(enterText);
  }
  function resetValue() {
    setEnteredNumber("");
  }

  function confirmValue() {
    const choosenNum = parseInt(enteredNumber);
    console.log("chooseNum", choosenNum);

    if (isNaN(choosenNum) || choosenNum <= 0 || choosenNum > 99) {
      Alert.alert("Invalid number!", "Enter Number Between 1 to 99", [
        { text: "Okay", style: "cancel", onPress: resetValue },
      ]);
      return;
    }

    onConfirmedNumber(choosenNum);
    console.log("ho gya");
  }

  return (
    <View style={styles.main}>
      <Title>Guess my number</Title>
      <Title>Enter a Number Between 1 to 99</Title>
      <View style={styles.textView}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={setNumber}
        />
      </View>
      <View style={styles.buttonsComponent}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetValue}>RESET</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmValue}>CONFIRM</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  buttonsComponent: {
    flexDirection: "row",
    gap: 50,
    width: width - 40,
  },
  textView: {
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 7,
    // elevation: 0.025,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  textInput: {
    minWidth: width - 40,
    // justifyContent: "center",
    height: 50,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,

    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
});
