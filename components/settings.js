import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Settings = ({ setThemeColor, themeColor }) => {
  const handleBluePress = () => {
    setThemeColor("#6495ED");
  };
  const handleRedPress = () => {
    setThemeColor("#FF6347");
  };

  const handleGreenPress = () => {
    setThemeColor("#32CD32");
  };

  const handleYellowPress = () => {
    setThemeColor("#BD8904");
  };

  const handlePurplePress = () => {
    setThemeColor("#A020F0");
  };
  return (
    <View style={styles.container}>
      {/* Add the settings content here */}
      <Text style={[styles.text, { color: themeColor }]}>Pick Your Theme</Text>
      <View style={styles.boxContainer}>
        <Pressable onPress={handleRedPress}>
          <View style={[styles.box, { backgroundColor: "#FF6347" }]} />
        </Pressable>
        <Pressable onPress={handleBluePress}>
          <View style={[styles.box, { backgroundColor: "#6495ED" }]} />
        </Pressable>
        <Pressable onPress={handleGreenPress}>
          <View style={[styles.box, { backgroundColor: "#32CD32" }]} />
        </Pressable>
        <Pressable onPress={handleYellowPress}>
          <View style={[styles.box, { backgroundColor: "#BD8904" }]} />
        </Pressable>
        <Pressable onPress={handlePurplePress}>
          <View style={[styles.box, { backgroundColor: "#A020F0" }]} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("100%"),
    width: "100%",
    borderTopColor: "#BD8904",
    borderTopWidth: 2,
    flexDirection: "row",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
  },
  boxContainer: {
    flexDirection: "row",
  },
  box: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  text: {
    width: wp("50%"),
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    marginTop: hp("5%"),
    marginBottom: hp("5%"),
  },
});

export default Settings;
