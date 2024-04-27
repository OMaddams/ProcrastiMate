import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

const todo = (todo) => {
  console.log(todo.title);
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded || todo == null) {
    return null;
  }
  return (
    // <Pressable>
    // </Pressable>
    <View style={styles.container}>
      <Image style={styles.pin} source={require("../assets/unPinned.svg")} />
      <Text style={styles.text}>{todo.title}</Text>
      <Image
        style={styles.checkmark}
        source={require("../assets/uncompleteCheck.svg")}
      />
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
