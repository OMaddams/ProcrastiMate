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
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todo;
