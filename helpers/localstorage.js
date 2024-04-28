import AsyncStorage from "@react-native-async-storage/async-storage";
storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("todo", jsonValue);
  } catch (e) {
    console.log("error " + e);
  }
};

getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("todo");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error " + e);
  }
};

export default { storeData, getData };
