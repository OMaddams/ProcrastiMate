import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Settings = ({ setThemeColor, themeColor, storeData }) => {
  const colors = [
    { name: "Red", hex: "#FF6347" },
    { name: "Blue", hex: "#6495ED" },
    { name: "Green", hex: "#32CD32" },
    { name: "Yellow", hex: "#BD8904" },
    { name: "Purple", hex: "#A020F0" },
    { name: "White", hex: "#FFFFFF" },
    { name: "VeryYellow", hex: "#ffff00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Lime", hex: "#00FF00" },
    { name: "DarkGreen", hex: "#003300" },
    { name: "DarkRed", hex: "#cc0000" },
  ];

  const storeThemeColor = (color) => {
    setThemeColor(color);
    storeData(color);
  };

  const handleColorPress = (color) => {
    storeThemeColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: themeColor }]}>Pick Your Theme</Text>
      <View style={styles.boxContainer}>
        {colors.map((color, index) => (
          <Pressable key={index} onPress={() => handleColorPress(color.hex)}>
            <View style={[styles.box, { backgroundColor: color.hex }]} />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp("50%"),
  },
  box: {
    width: 65,
    height: 65,
    marginRight: 10,
    marginBottom: 5,
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
