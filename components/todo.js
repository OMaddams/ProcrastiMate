import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

const todo = ({ todoo, setTodoOpen, editTodo }) => {
  const [isComplete, setIsComplete] = useState(todoo.is_completed);
  const [isPinned, setIsPinned] = useState(todoo.is_pinned);
  console.log(todoo);
  function handleOpenPress() {
    console.log(todoo);
    setTodoOpen(todoo);
  }

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded || todoo == null) {
    return null;
  }

  function handlePinPress() {
    const currentState = isPinned;
    setIsPinned(!currentState);
    todoo.is_pinned = !currentState;
    editTodo(todoo);
  }

  function handleCompletePress() {
    const currentState = isComplete;
    setIsComplete(!currentState);
    todoo.is_completed = !currentState;
    editTodo(todoo);
  }

  return (
    <Pressable onPress={() => handleOpenPress()}>
      <View style={styles.container}>
        <Pressable onPress={() => handlePinPress()}>
          <Image
            style={styles.pin}
            source={
              +todoo.is_pinned == true
                ? require("../assets/pinned.svg")
                : require("../assets/unPinned.svg")
            }
          />
        </Pressable>
        <Text style={styles.text}>{todoo.title}</Text>
        <Pressable onPress={() => handleCompletePress()}>
          <Image
            style={styles.checkmark}
            source={
              +todoo.is_completed == true
                ? require("../assets/completeCheck.svg")
                : require("../assets/uncompleteCheck.svg")
            }
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3737",
    minHeight: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("90%"),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 10,
    marginTop: hp("2%"),
  },
  pin: {
    width: wp("7%"),
    height: hp("5%"),
  },
  checkmark: {
    width: wp("10%"),
    height: hp("5%"),
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
});

export default todo;
