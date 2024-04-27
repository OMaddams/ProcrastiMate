import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Footer = ({ addTodo }) => {
  const [showComponent, setShowComponent] = React.useState(false);

  const handlePress = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View style={styles.container}>
      {!showComponent && (
        <View style={styles.footer}>
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => {
              return { opacity: pressed ? 0.5 : 1 };
            }}
          >
            <Image
              source={require("../assets/plusIcon.png")}
              style={styles.image}
            />
          </Pressable>
        </View>
      )}
      {showComponent && (
        <AddTodoWindow setShowComponent={setShowComponent} addTodo={addTodo} />
      )}
    </View>
  );
};

const AddTodoWindow = ({ setShowComponent, addTodo }) => {
  const [taskTitle, setTitle] = React.useState("");
  const [taskInfo, setInfo] = React.useState("");

  const handleBackPress = () => {
    setShowComponent(false);
  };

  const handleSavePress = () => {
    const newTodo = {
      id: Math.random(),
      title: taskTitle,
      description: taskInfo,
      completed: false,
      pinned: false,
    };

    addTodo(newTodo);
    setShowComponent(false);
  };

  return (
    <View style={styles.addTodoContainer}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        value={taskTitle}
        style={styles.titleInput}
        onChangeText={setTitle}
      />
      <Text style={styles.title}>Task Info</Text>
      <TextInput
        value={taskInfo}
        style={styles.taskInfoInput}
        onChangeText={setInfo}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={handleBackPress}
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("../assets/backIcon.svg")}
            style={styles.backIcon}
          />
        </Pressable>
        <Pressable
          onPress={handleSavePress}
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("../assets/saveIcon.svg")}
            style={styles.saveIcon}
          />
        </Pressable>
      </View>
    </View>
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
    height: hp("6.8r%"),
    width: wp("14%"),
  },
  addTodoContainer: {
    backgroundColor: "#252121",
    height: hp("100%"),
    width: "100%",
    borderTopColor: "#BD8904",
    borderTopWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  titleInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("8%"),
    color: "#fff",
    backgroundColor: "#3A3737",
    borderColor: "#BD8904",
    borderRadius: 15,
    fontSize: 18,
    color: "#BD8904",
    textAlign: "center",
  },
  taskInfoInput: {
    marginTop: "5%",
    width: wp("80%"),
    height: hp("15%"),
    color: "#fff",
    backgroundColor: "#3A3737",
    borderColor: "#BD8904",
    borderRadius: 15,
    fontSize: 18,
    color: "#BD8904",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    color: "#BD8904",
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
