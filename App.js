import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TodoContainer from "./components/todoContainer";
import Footer from "./components/Footer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./components/header";
import { useState } from "react";
import todo from "./components/todo";
export default function App() {
  const [todoOpen, setTodoOpen] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Dentist",
      description: "I need to go to the dentist",
      completed: false,
      pinned: false,
    },
    {
      id: 2,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
  ]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <TodoContainer todoOpen={todoOpen} todos={todos} />
      <StatusBar style="auto" />
      <Footer addTodo={addTodo} />
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
