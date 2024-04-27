import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Todo from "./todo";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const todoContainer = ({ todos, todoOpen }) => {
  if (todoOpen === null) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} />
        ))}
      </ScrollView>
    );
  } else {
    return;
  }
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    width: "100%",
    overflow: "scroll",
    marginHorizontal: wp("5%"),
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todoContainer;
