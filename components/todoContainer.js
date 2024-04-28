import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import Todo from "./todo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const todoContainer = ({ todos, todoOpen, isLoading }) => {
  if (isLoading) {
    return (
      <ScrollView contentContainerStyle={styles.containerLoading}>
        <Image style={styles.loading} source={require("../assets/ZNeT.gif")} />
      </ScrollView>
    );
  } else if (todoOpen === null) {
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
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    width: "100%",
    overflow: "scroll",
    marginHorizontal: wp("5%"),
    paddingBottom: hp("2%"),
  },
  containerLoading: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    overflow: "scroll",
    marginHorizontal: wp("5%"),
    paddingBottom: hp("2%"),
  },
  loading: {
    width: wp("10%"),
    height: hp("5%"),
    marginHorizontal: hp("20%"),
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
  },
});

export default todoContainer;
