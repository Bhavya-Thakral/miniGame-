import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import Title from "@/components/Title";
import Colors from "@/constants/Colors";
import PrimaryButton from "@/components/PrimaryButton";

const { width } = Dimensions.get("screen");

const GameOverScreen = ({ userNum, steps, restartGame }) => {
  function restartNow() {
    restartGame();
  }

  return (
    <View style={styles.main}>
      <Title>Game Over</Title>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/end2.jpeg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <Text style={styles.outText}>
        You took <Text style={styles.inText}>{steps}</Text> chances to guess{" "}
        <Text style={styles.inText}>{userNum}</Text> number.
      </Text>
      <PrimaryButton onPress={restartNow}>Restart</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  imgContainer: {
    width: "80%",
    aspectRatio: 1,
    borderRadius: width / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.blue,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  outText: {
    fontSize: 24,
    textAlign: "center",
  },
  inText: {
    color: Colors.blue,
  },
});
