import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TodoContainer from "./components/todoContainer";
import Footer from "./components/Footer";
import AddTodoWindow from "./components/addTodoWindow";
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
    {
      id: 3,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 4,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 5,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 6,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 7,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 8,
      title: "Buy milk",
      description: "I need to buy milk",
      completed: false,
      pinned: false,
    },
    {
      id: 9,
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
