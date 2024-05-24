import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const GuessList = ({ item }) => {
  return (
    <View style={styles.mainView}>
      {/* <Text style={styles.text}># {index}</Text> */}
      <Text style={styles.text}>Opponent's guess</Text>
      <View style={styles.viewTwo}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </View>
  );
};

export default GuessList;
const styles = StyleSheet.create({
  mainView: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.yellow,
    padding: 5,
    borderWidth: 2,
    borderColor: Colors.pink,
    borderRadius: 7,
    marginBottom: 10,
  },
  viewTwo: {
    flexDirection: "row",
    gap: 20,
  },
  text: {
    color: Colors.blue,
    fontWeight: "600",
  },
});
