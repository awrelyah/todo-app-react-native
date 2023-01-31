import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function TodoInput(props) {
  const [todoItemText, setTodoItemText] = useState("");

  function inputHandler(enteredText) {
    setTodoItemText(enteredText);
  }

  function addHandler() {
    props.onAddItem(todoItemText);
    setTodoItemText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="To do..."
        onChangeText={inputHandler}
        value={todoItemText}
      />
      <Button title="Add" onPress={addHandler}></Button>
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bfbec0",
    width: "80%",
    marginRight: 6,
    padding: 8,
  },
});
