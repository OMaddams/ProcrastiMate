import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const todoInfo = ({ selectedTodo, deleteTodo, setTodoOpen }) => {
  const [animation] = useState(new Animated.Value(0));

  console.log(selectedTodo.title);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const handleDeletePress = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          await deleteTodo(selectedTodo.id);
          setTodoOpen(null);
        },
      },
    ]);
  };

  const handleSaveChangesPress = () => {
    const newTodo = {
      title: taskTitle,
      description: taskInfo,
      isCompleted: false,
      isPinned: false,
    };

    addTodo(newTodo);
    setShowComponent(false);
  };
  return (
    <Animated.View
      style={{
        ...styles.addTodoContainer,
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [400, 0],
            }),
          },
        ],
      }}
    >
      <Text style={styles.title}>Title:</Text>
      <Text style={styles.todoTitle}>{selectedTodo.title}</Text>
      <Text style={styles.title}>Task Info:</Text>
      <Text style={styles.todoInfo}>{selectedTodo.description}</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleDeletePress}>
          <Image
            source={require("../assets/deleteicon.svg")}
            style={styles.deleteIcon}
          />
        </Pressable>
        <Pressable onPress={handleSaveChangesPress}>
          <Image
            source={require("../assets/savechangesicon.svg")}
            style={styles.saveChangesIcon}
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("15%"),
    width: "100%",
    borderTopColor: "#BD8904",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  image: {
    height: hp("6.8%"),
    width: wp("14%"),
  },
  addTodoContainer: {
    backgroundColor: "#252121",
    height: hp("100%"),
    width: "100%",
    borderTopColor: "#BD8904",
    borderTopWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 24,
    color: "#BD8904",
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
  },
  todoInfo: {
    fontSize: 24,
    color: "#BD8904",
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    color: "#BD8904",
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deleteIcon: {
    width: wp("10%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  saveChangesIcon: {
    width: wp("10%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
});

export default todoInfo;
