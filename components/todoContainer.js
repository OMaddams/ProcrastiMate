import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Todo from "./todo";

const todoCopntainer = () => {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3737",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "5px",
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todoContainer;
