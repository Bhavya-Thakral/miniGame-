import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  function pressHandler() {
    console.log("pressed!");
  }
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: Colors.yellow }}
      style={({ pressed }) =>
        pressed ? [styles.pressed, styles.textPressed] : null
      }
    >
      <View style={styles.buttonOuter}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderWidth: 2,
    borderColor: Colors.blue,
    padding: 10,
    borderRadius: 7,
  },
  pressable: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  pressed: {
    backgroundColor: Colors.yellow,
    borderRadius: 7,
  },
  textPressed: {
    color: "green",
  },
  text: {
    color: Colors.blue,
    textAlign: "center",
  },
});
