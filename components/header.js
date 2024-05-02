import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Logo from "../assets/Logo.js";
import SettingsIcon from "../assets/SettingsIcon.js";
const header = ({ themeColor }) => {
  return (
    <View style={[styles.container, { borderBottomColor: themeColor }]}>
      <View style={styles.logoContainer}>
        {/* <Image source={require("../assets/Logo.svg")} style={styles.image} /> */}
        <Logo containerStyle={styles.image} themeColor={themeColor} />
      </View>
      <SettingsIcon
        themeColor={themeColor}
        containerStyle={styles.settingsIcon}
      />
      {/* <Image
        source={require("../assets/settingsIcon.svg")}
        style={styles.settingsIcon}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("15%"),
    width: "100%",
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp("15%"),
  },
  image: {
    marginTop: hp("3%"),
    width: wp("50%"),
    height: hp("5.5%"),
  },

  settingsIcon: {
    marginRight: wp("5%"),
    marginTop: hp("3"),
    width: wp("10%"),
    height: hp("5%"),
  },
});
export default header;
