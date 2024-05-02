import React, { useContext } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const header = ({ themeColor, setIsViewingSettings, isViewingSettings }) => {
  const handleSettingsPress = () => {
    setIsViewingSettings(!isViewingSettings);
    console.log(isViewingSettings);
  };

  return (
    <View style={[styles.container, { borderBottomColor: themeColor }]}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.svg")} style={styles.image} />
      </View>
      <Pressable onPress={handleSettingsPress}>
        <Image
          source={require("../assets/settingsIcon.svg")}
          style={styles.settingsIcon}
        />
      </Pressable>
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
