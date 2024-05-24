import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const UserNumber = ({ children }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default UserNumber;

const styles = StyleSheet.create({
  main: {
    width: width - 40,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    borderWidth: 2,
    borderColor: "black",
    padding: 20,
    borderRadius: 7,
    textAlign: "center",
  },
});
