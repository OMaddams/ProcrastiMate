import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Settings from "./components/settings";
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
import { useEffect, useRef, useState } from "react";
import todo from "./components/todo";
import TodoInfo from "./components/todoInfo";
import notifee from "@notifee/react-native";

export default function App() {
  useKeepAwake();
  const colorScheme = useColorScheme();

  notifee.onBackgroundEvent(() => {});

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("themeColor");
      if (value !== null) {
        // console.log(value);
        return value;
      } else {
        return "BD8904";
      }
    } catch (e) {}
  };
  const [themeColor, setThemeColor] = useState(getData());

  const db = SQLite.openDatabase("todo.db");
  // db.closeAsync();
  // db.deleteAsync();
  const [isLoading, setIsLoading] = useState(true);
  const [isViewingSettings, setIsViewingSettings] = useState(false);
  const [todoOpen, setTodoOpen] = useState(null);
  const [todos, setTodos] = useState([]);
  const sortedTodosRef = useRef([]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("themeColor", value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData().then((color) => setThemeColor(color));
  }, []);

  const addTodo = (newTodo) => {
    //setTodos([...todos, newTodo]);
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO todos (title,  description, is_completed, is_pinned, is_daily) VALUES (?, ?, ?, ?, ?)`,
        [
          newTodo.title,
          newTodo.description,
          newTodo.isCompleted,
          newTodo.isPinned,
          newTodo.isDaily,
        ],
        (txtObj, resultSet) => {
          //let existingTodos = [...todos];
          const newTodoItem = {
            id: resultSet.insertId,
            title: newTodo.title,
            description: newTodo.description,
            is_completed: newTodo.isCompleted,
            is_pinned: newTodo.isPinned,
            is_daily: newTodo.isDaily,
          };
          sortedTodosRef.current.push(newTodoItem);
          setTodos([...sortedTodosRef.current]);
        },
        (txtObj, error) => console.log(error)
      );
    });
  };

  useEffect(() => {
    console.log("useeffect");
    const sortedTodos = sortTodos(todos);
    if (!arraysEqual(sortedTodos, sortedTodosRef.current)) {
      sortedTodosRef.current = sortTodos(todos);
      setTodos([...sortedTodosRef.current]);
    }
  }, [todos]);

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

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
  const editTodo = (todo) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE todos SET title = ?, description = ?, is_completed = ?, is_pinned = ?, is_daily = ? WHERE id = ?",
        [
          todo.title,
          todo.description,
          +todo.is_completed,
          +todo.is_pinned,
          +todo.is_daily,
          todo.id,
        ],
        () => {
          let editedTodoIndex = todos.findIndex((x) => x.id === todo.id);
          todos[editedTodoIndex] = {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            is_completed: +todo.is_completed,
            is_pinned: +todo.is_pinned,
            is_daily: +todo.is_daily,
          };
        }
      );
    });
    let sortedTodos = sortTodos(todos);
    setTodos([...sortedTodos]);
  };

  function sortTodos(todosArray) {
    return todosArray.sort((a, b) => {
      return b.is_pinned - a.is_pinned || a.is_completed - b.is_completed;
    });
  }

  function deleteComplete() {
    currentTodos = todos;
    currentTodos.forEach((todo) => {
      if (!todo.is_daily && todo.is_completed) {
        deleteTodo(todo.id);
      }
    });
  }

  useEffect(() => {
    // db.transaction((tx) => {
    //   tx.executeSql("DROP TABLE IF EXISTS todos");
    // });
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT, is_completed INT NOT NULL, is_pinned INT NOT NULL, is_daily INT NOT NULL)"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos ORDER BY is_pinned DESC, is_completed ASC",
        null,
        (txtObj, resultSet) => setTodos(resultSet.rows._array),
        (txtObj, error) => console.log(error)
      );
    });
    setIsLoading(false);
  }, []);

  if (todoOpen == null && isViewingSettings == false) {
    return (
      <View style={styles.container}>
        <Header
          themeColor={themeColor}
          setIsViewingSettings={setIsViewingSettings}
          isViewingSettings={isViewingSettings}
        />
        <TodoContainer
          todoOpen={todoOpen}
          todos={todos}
          themeColor={themeColor}
          isLoading={isLoading}
          setTodoOpen={setTodoOpen}
          editTodo={editTodo}
        />
        <StatusBar style="auto" />
        <Footer addTodo={addTodo} themeColor={themeColor} />
      </View>
    );
  } else if (todoOpen != null && isViewingSettings == false) {
    return (
      <View style={styles.container}>
        <Header
          themeColor={themeColor}
          setIsViewingSettings={setIsViewingSettings}
          isViewingSettings={isViewingSettings}
        />
        <StatusBar style="auto" />
        <TodoInfo
          selectedTodo={todoOpen}
          deleteTodo={deleteTodo}
          setTodoOpen={setTodoOpen}
          editTodo={editTodo}
          themeColor={themeColor}
        />
      </View>
    );
  } else if (isViewingSettings == true) {
    return (
      <View style={styles.container}>
        <Header
          themeColor={themeColor}
          setIsViewingSettings={setIsViewingSettings}
          isViewingSettings={isViewingSettings}
        />
        <StatusBar style="auto" />
        <Settings
          setThemeColor={setThemeColor}
          storeData={storeData}
          themeColor={themeColor}
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
