import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalTextHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          value={enteredGoal}
          onChangeText={goalTextHandler}
        />
        <View style={styles.buttonStyle}>
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    textAlign: "center",
    margin: 10,
    width: "80%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '40%'
  }
});
export default GoalInput;
