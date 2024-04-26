import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Todo from "./todo";

const todoContainer = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    width: "100%",
    marginTop: 15,
    overflow: "scroll",
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todoContainer;
