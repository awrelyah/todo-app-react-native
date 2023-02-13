import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";

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
      <Pressable style={styles.button} onPress={addHandler}>
        <Text style={styles.text}>add</Text>
      </Pressable>
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
    backgroundColor: "#efeeee",
    width: "80%",
    padding: 12,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#ae8ca2",
    padding:12,
    borderRadius: 6,
  },
  text: {
    color: 'white',
  }
});
