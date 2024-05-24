import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

import Colors from "../constants/Colors";

const { width } = Dimensions.get("screen");
const Title = ({ children }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  main: {
    width: width - 40,
  },
  title: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.blue,
    borderWidth: 1,
    borderColor: Colors.blue,
    padding: 10,
    borderRadius: 3,
    textAlign: "center",
  },
});
