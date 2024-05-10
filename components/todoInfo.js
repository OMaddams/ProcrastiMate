import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  Alert,
  BackHandler,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackIcon from "../assets/BackIcon.js";
import DeleteIcon from "../assets/DeleteIcon.js";
import EditIcon from "../assets/EditIcon.js";
import SaveIcon from "../assets/SaveIcon.js";
import LockIcon from "../assets/LockIcon.js";
import UnlockIcon from "../assets/unlockIcon.js";
const todoInfo = ({
  selectedTodo,
  deleteTodo,
  setTodoOpen,
  editTodo,
  themeColor,
}) => {
  const [animation] = useState(new Animated.Value(0));
  const [is_editing, setIsEditing] = useState(false);
  const [newTaskTitle, setTitle] = useState(selectedTodo.title || "");
  const [newTaskInfo, setInfo] = useState(selectedTodo.description || "");

  BackHandler.addEventListener("hardwareBackPress", function () {
    setTodoOpen(null);
  });

  console.log(selectedTodo.title);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const handleBackPress = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTodoOpen(null);
    });
  };

  const handleDeletePress = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          await deleteTodo(selectedTodo.id);
          setTodoOpen(null);
        },
      },
    ]);
  };

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleLockPress = () => {
    if (selectedTodo.is_daily) {
      selectedTodo.is_daily = false;
      console.log(selectedTodo);
      editTodo(selectedTodo);
    } else {
      selectedTodo.is_daily = true;
      console.log(selectedTodo);
      editTodo(selectedTodo);
    }
  };

  const handleSaveChangesPress = () => {
    selectedTodo.title = newTaskTitle;
    selectedTodo.description = newTaskInfo;

    editTodo(selectedTodo);
    setIsEditing(false);
  };
  if (is_editing === false) {
    return (
      <Animated.View
        style={{
          ...styles.addTodoContainer,
          borderTopColor: themeColor,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
        }}
      >
        <Text style={[styles.title, { color: themeColor }]}>Title:</Text>
        <Text style={[styles.todoTitle, { color: themeColor }]}>
          {selectedTodo.title}
        </Text>
        <Text style={[styles.title, { color: themeColor }]}>Task Info:</Text>
        <Text style={[styles.todoInfo, { color: themeColor }]}>
          {selectedTodo.description}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleBackPress}>
            <BackIcon
              themeColor={themeColor}
              containerStyle={styles.backIcon}
              style={styles.backicon}
            />
          </Pressable>
          <Pressable onPress={handleDeletePress}>
            <DeleteIcon
              themeColor={themeColor}
              containerStyle={styles.deleteIcon}
              style={styles.deleteIcon}
            />
          </Pressable>
          <Pressable onPress={handleEditPress}>
            <EditIcon
              themeColor={themeColor}
              containerStyle={styles.editIcon}
              style={styles.editIcon}
            />
          </Pressable>

          <Pressable onPress={handleLockPress}>
            {selectedTodo.is_daily ? (
              <LockIcon
                themeColor={themeColor}
                style={styles.lockIcon}
                containerStyle={styles.lockIcon}
              />
            ) : (
              <UnlockIcon
                themeColor={themeColor}
                style={styles.lockIcon}
                containerStyle={styles.lockIcon}
              />
            )}
          </Pressable>
        </View>
      </Animated.View>
    );
  } else {
    return (
      <Animated.View
        style={{
          ...styles.addTodoContainer,
          borderTopColor: themeColor,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
        }}
      >
        <Text style={[styles.title, { color: themeColor }]}>Title:</Text>
        <TextInput
          value={newTaskTitle}
          style={[styles.titleInput, { color: themeColor }]}
          onChangeText={setTitle}
          defaultValue={selectedTodo.title}
          multiline={true}
          numberOfLines={2}
        />
        <Text style={[styles.title, { color: themeColor }]}>Task Info:</Text>
        <TextInput
          value={newTaskInfo}
          style={[styles.taskInfoInput, { color: themeColor }]}
          onChangeText={setInfo}
          defaultValue={selectedTodo.description}
          multiline={true}
          numberOfLines={4}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleBackPress}>
            <BackIcon
              themeColor={themeColor}
              containerStyle={styles.backIcon}
              style={styles.backicon}
            />
          </Pressable>
          <Pressable onPress={handleDeletePress}>
            <DeleteIcon
              themeColor={themeColor}
              containerStyle={styles.deleteIcon}
              style={styles.deleteIcon}
            />
          </Pressable>
          <Pressable onPress={handleSaveChangesPress}>
            <SaveIcon
              themeColor={themeColor}
              containerStyle={styles.saveIcon}
              style={styles.saveIcon}
            />
          </Pressable>
        </View>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("15%"),
    width: "100%",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  image: {
    height: hp("6.8%"),
    width: wp("14%"),
  },
  addTodoContainer: {
    backgroundColor: "#252121",
    height: hp("100%"),
    width: "100%",
    borderTopWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 24,
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
    marginRight: wp("10%"),
    marginLeft: wp("10%"),
  },
  todoInfo: {
    fontSize: 24,
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
    marginRight: wp("10%"),
    marginLeft: wp("10%"),
  },
  title: {
    fontSize: 24,
    marginTop: "5%",
    minWidth: wp("80%"),
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deleteIcon: {
    width: wp("15%"),
    height: hp("8%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  editIcon: {
    width: wp("15%"),
    height: hp("8%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  backIcon: {
    width: wp("16%"),
    height: hp("8%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  saveIcon: {
    width: wp("15%"),
    height: hp("8%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  lockIcon: {
    width: wp("15%"),
    height: hp("8%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  titleInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("8%"),
    color: "#fff",
    backgroundColor: "#3A3737",
    borderRadius: 5,
    fontSize: 18,
    color: "#BD8904",
    textAlign: "center",
    overflow: "hidden",
  },
  taskInfoInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("15%"),
    color: "#fff",
    backgroundColor: "#3A3737",
    borderRadius: 5,
    fontSize: 18,
    color: "#BD8904",
    textAlign: "center",
    overflow: "hidden",
  },
});

export default todoInfo;
