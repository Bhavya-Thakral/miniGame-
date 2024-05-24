import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import UserNumber from "../../components/UserNumber";
import PrimaryButton from "@/components/PrimaryButton";
import { FlatList } from "react-native-gesture-handler";
import GuessList from "../../components/GuessList";

const { width } = Dimensions.get("screen");

function generateNumber(min, max, exclude) {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) return generateNumber(min, max, exclude);
  else return num;
}

let minBound = 1;
let maxBound = 100;

const GameScreen = ({ userNum, onGamerOver, countHandler }) => {
  console.log("width", width);

  const initialNum = generateNumber(1, 100, userNum);
  const [currentNum, setCurrentNum] = useState(initialNum);
  const [count, setCount] = useState(0);
  const [guessedNum, setGuessedNum] = useState([initialNum]);

  console.log(userNum, "userNum");
  console.log(initialNum, "initialNum");
  console.log(count, "count");
  console.log(guessedNum, "guessed num");
  console.log(minBound, "min");
  console.log(maxBound, "max");

  useEffect(() => {
    console.log("game screen");
    (minBound = 1), (maxBound = 100);
    console.log("ho gya reset");
  }, []);

  useEffect(() => {
    console.log("game screen 2");
    if (currentNum === userNum) {
      console.log("abhi nhi chlna tha");
      onGamerOver();
      countHandler(count);
    }
  }, [currentNum, userNum, onGamerOver, countHandler]);

  function numberHandler(direction) {
    console.log("number handler top");
    if (
      (direction === "lower" && currentNum < userNum) ||
      (direction === "higher" && currentNum > userNum)
    ) {
      Alert.alert("Don't try to fool me!", "Select the correct one", [
        { text: "Sorry!", style: "cancel" },
      ]);
      console.log("number handler inside");

      return;
    }
    if (direction === "lower") {
      maxBound = currentNum;
    } else minBound = currentNum + 1;

    console.log(guessedNum, "bhavya");
    const newNum = generateNumber(minBound, maxBound, currentNum);
    setCurrentNum(newNum);
    setCount((prev) => prev + 1);
    setGuessedNum((prev) => [...prev, newNum]);
  }

  console.log("starting to render");

  return (
    <View style={styles.main}>
      <Title>Opponent's Guess</Title>
      <UserNumber>{currentNum}</UserNumber>
      <Title>Higher or Lower?</Title>
      <View style={styles.buttonComponent}>
        <View style={styles.buttonStyle}>
          <PrimaryButton onPress={numberHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
        <View style={styles.buttonStyle}>
          <PrimaryButton onPress={numberHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <Title>Guessed Numbers</Title>
      <FlatList
        data={guessedNum}
        renderItem={(itemData) => (
          <GuessList item={itemData.item} />
          // <Text>bhavya</Text>
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    width: width,
    gap: 40,
  },
  buttonComponent: {
    // flex: 1,
    width: "80%",
    flexDirection: "row",
    gap: 5,
  },
  buttonStyle: {
    flex: 1,
  },
});
