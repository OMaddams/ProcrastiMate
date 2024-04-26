import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const todo = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/UnPinned.png")} />
      <Text style={styles.text}>TODO</Text>
      <Image source={require("../assets/CompletionMark.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3737",
    minHeight: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: " 5px",
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todo;
