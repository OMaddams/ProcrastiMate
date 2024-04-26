import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";

const todo = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Pressable>
      <View style={styles.container}>
        <Image source={require("../assets/UnPinned.png")} />
        <Text style={styles.text}>TODO</Text>
        <Image source={require("../assets/CompletionMark.png")} />
      </View>
    </Pressable>
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
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  text: {
    color: "#BD8904",
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
});

export default todo;
