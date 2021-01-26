import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const goalAddHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    console.log(courseGoals);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          value={enteredGoal}
          onChangeText={goalTextHandler}
        />
        <Button title="ADD" onPress={goalAddHandler} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign: "center",
    margin: 10,
    width: "80%",
  },
});
