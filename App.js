import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require("./assets/adaptive-icon.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252121",
    alignItems: "center",
    justifyContent: "center",
  },
});
