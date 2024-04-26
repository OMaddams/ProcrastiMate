import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TodoContainer from "./components/todoContainer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./components/header";
import { useState } from "react";
export default function App() {
  const [todoOpen, setTodoOpen] = useState(null);

  return (
    <View style={styles.container}>
      <Header />

      <TodoContainer todoOpen={todoOpen} />
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
