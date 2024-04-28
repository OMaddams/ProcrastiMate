import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import TodoContainer from "./components/todoContainer";
import Footer from "./components/Footer";
import * as SQLite from "expo-sqlite";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./components/header";
import { useEffect, useState } from "react";
import todo from "./components/todo";

export default function App() {
  const db = SQLite.openDatabase("todo.db");
  const [isLoading, setIsLoading] = useState(true);

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
    //setTodos([...todos, newTodo]);
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO todos (title, description, is_completed,is_pinned) VALUES (?, ?, ?, ?);`,
        [
          newTodo.title,
          newTodo.description,
          newTodo.isCompleted,
          newTodo.isPinned,
        ],
        (txtObj, resultSet) => {
          let existingTodos = [...todos];
          existingTodos.push({
            id: resultSet.insertId,
            title: newTodo.title,
            description: newTodo.description,
            isCompleted: newTodo.isCompleted,
            isPinned: newTodo.isPinned,
          });
          setTodos(existingTodos);
        },
        (txtObj, error) => console.log(error)
      );
    });
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, is_completed BOOLEAN NOT NULL, is_pinned BOOLEAN NOT NULL)"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos",
        null,
        (txtObj, resultSet) => setTodos(resultSet.rows._array),
        (txtObj, error) => console.log(error)
      );
    });
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodoContainer todoOpen={todoOpen} todos={todos} isLoading={isLoading} />
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
  loadingContainer: {
    display: "flex",
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
