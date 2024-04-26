import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TodoContainer from "./components/todoContainer";
import Footer from "./components/Footer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "./components/header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoContainer />
      <StatusBar style="auto" />
      <Footer />
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
