import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PlusIcon from "../assets/PlusIcon.js";
import SaveIcon from "../assets/SaveIcon.js";
const Footer = ({ addTodo, themeColor }) => {
  const [showComponent, setShowComponent] = useState(false);

  const handlePress = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View style={[styles.container, { borderTopColor: themeColor }]}>
      {!showComponent && (
        <View style={styles.footer}>
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => {
              return { opacity: pressed ? 0.5 : 1 };
            }}
          >
            {/* <Image
              source={require("../assets/plusIcon.png")}
              style={styles.image}
            /> */}
            <PlusIcon containerStyle={styles.image} themeColor={themeColor} />
          </Pressable>
        </View>
      )}
      {showComponent && (
        <AddTodoWindow
          setShowComponent={setShowComponent}
          addTodo={addTodo}
          themeColor={themeColor}
        />
      )}
    </View>
  );
};

const AddTodoWindow = ({ setShowComponent, addTodo, themeColor }) => {
  const [taskTitle, setTitle] = useState("");
  const [taskInfo, setInfo] = useState("");
  const [animation] = useState(new Animated.Value(0));

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
      setShowComponent(false);
    });
  };

  const handleSavePress = () => {
    if (!taskTitle.trim()) {
      alert("Please enter a title for your task");
      return;
    }
    const newTodo = {
      title: taskTitle,
      description: taskInfo,
      isCompleted: 0,
      isPinned: 0,
    };

    addTodo(newTodo);
    setShowComponent(false);
  };

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
      <Text style={[styles.title, { color: themeColor }]}>Title</Text>
      <TextInput
        value={taskTitle}
        style={[styles.titleInput, { color: themeColor }]}
        onChangeText={setTitle}
      />
      <Text style={[styles.title, { color: themeColor }]}>Task Info</Text>
      <TextInput
        value={taskInfo}
        style={[styles.taskInfoInput, { color: themeColor }]}
        onChangeText={setInfo}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleBackPress}>
          <Image
            source={require("../assets/backIcon.svg")}
            style={styles.backIcon}
          />
        </Pressable>
        <Pressable onPress={handleSavePress}>
          <SaveIcon
            themeColor={themeColor}
            containerStyle={styles.saveIcon}
            style={styles.saveIcon}
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252121",
    height: hp("15%"),
    width: "100%",
    borderTopColor: "#BD8904",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  image: {
    height: hp("7.5%"),
    width: wp("15%"),
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
  titleInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("8%"),
    backgroundColor: "#3A3737",
    borderRadius: 15,
    fontSize: 18,
    textAlign: "center",
  },
  taskInfoInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("15%"),
    backgroundColor: "#3A3737",
    borderColor: "#BD8904",
    borderRadius: 15,
    fontSize: 18,
    textAlign: "center",
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
  backIcon: {
    width: wp("10%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
  saveIcon: {
    width: wp("10%"),
    height: hp("5%"),
    marginTop: hp("3%"),
    marginLeft: wp("5%"),
  },
});

export default Footer;
