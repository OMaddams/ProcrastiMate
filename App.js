import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Appearance, useColorScheme } from "react-native";
import TodoContainer from "./components/todoContainer";
import Footer from "./components/Footer";
import * as SQLite from "expo-sqlite";
import { useKeepAwake } from "expo-keep-awake";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "./components/header";
import { useEffect, useState } from "react";
import todo from "./components/todo";
import TodoInfo from "./components/todoInfo";

export default function App() {
  useKeepAwake();
  const colorScheme = useColorScheme();

  const db = SQLite.openDatabase("todo.db");
  const [isLoading, setIsLoading] = useState(true);
  const [todoOpen, setTodoOpen] = useState(null);
  const [todos, setTodos] = useState([]);
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

  const deleteTodo = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM todos WHERE ID = ?",
        [id],
        (txtObj, resultSet) => {
          let existingTodos = [...todos];
          let newTodos = existingTodos.filter((todo) => todo.id !== id);
          setTodos(newTodos);
        },
        (txtObj, error) => console.log(error)
      );
    });
  };

  useEffect(() => {
    // db.transaction((tx) => {
    //   tx.executeSql("DROP TABLE if exists todos");
    // });
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

  if (todoOpen == null) {
    return (
      <View style={styles.container}>
        <Header />
        <TodoContainer
          todoOpen={todoOpen}
          todos={todos}
          isLoading={isLoading}
          setTodoOpen={setTodoOpen}
        />
        <StatusBar style="auto" />
        <Footer addTodo={addTodo} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar style="auto" />
        <TodoInfo
          selectedTodo={todoOpen}
          deleteTodo={deleteTodo}
          setTodoOpen={setTodoOpen}
        />
      </View>
    );
  }
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
