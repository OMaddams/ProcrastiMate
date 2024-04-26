import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.image} />
      </View>
      <Image
        source={require("../assets/settingsIcon.png")}
        style={styles.settingsIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: 150,
    width: "100%",
    borderBottomColor: "#BD8904",
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 65,
  },
  image: {
    marginTop: 20,
    width: 210,
    height: 50,
  },

  settingsIcon: {
    marginRight: 25,
    marginTop: 15,
    width: 50,
    height: 50,
  },
});
export default header;
