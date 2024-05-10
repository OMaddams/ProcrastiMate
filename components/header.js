import React, { useContext } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Logo from "../assets/Logo.js";
import SettingsIcon from "../assets/SettingsIcon.js";
import TrashIcon from "../assets/TrashIconv2.js";

const header = ({ themeColor, setIsViewingSettings, isViewingSettings }) => {
  const handleSettingsPress = () => {
    setIsViewingSettings(!isViewingSettings);
    console.log(isViewingSettings);
  };

  return (
    <View style={[styles.mainContainer, { borderBottomColor: themeColor }]}>
      <View style={[styles.container, { borderBottomColor: themeColor }]}>
        <Pressable>
          <TrashIcon
            themeColor={themeColor}
            containerStyle={styles.trashIcon}
          />
        </Pressable>
        <View style={styles.logoContainer}>
          <Logo containerStyle={styles.image} themeColor={themeColor} />
        </View>

        <Pressable onPress={handleSettingsPress}>
          <SettingsIcon
            themeColor={themeColor}
            containerStyle={styles.settingsIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("15%"),
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainContainer: {
    justifyContent: "space-between",
    display: "flex",
    borderBottomWidth: 2,
    paddingHorizontal: wp("5%"),
  },
  logoContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    marginTop: hp("3%"),
    width: wp("50%"),
    height: hp("5.5%"),
  },

  settingsIcon: {
    marginTop: hp("4%"),
    width: wp("11%"),
    height: hp("5.4%"),
  },
  trashIcon: {},
});
export default header;
