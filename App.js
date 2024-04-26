import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Todo from "./components/todo";
export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252121",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
