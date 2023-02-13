import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Checkbox from "expo-checkbox";

function TodoItem(props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={isSelected ? styles.todoDone : styles.todoItem}>
      <Checkbox
        style={styles.checkbox}
        value={isSelected}
        onValueChange={setSelection}
        color={"#000000"}
      ></Checkbox>
      <Text style={isSelected ? styles.doneTodo : styles.itemText}>
        {props.text}
      </Text>
      <Pressable onPress={props.onDelete.bind(this, props.id)}>
        <Image
          source={require("../assets/delete-3.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    marginBottom: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#cab6c9",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoDone: {
    marginBottom: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#efeeee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "black",
    marginLeft: 9,
    marginRight: "auto",
  },
  doneTodo: {
    color: "#9e9c9c",
    marginLeft: 9,
    marginRight: "auto",
    textDecorationLine: 'line-through',
  },
  image: {
    width: 20,
    height: 20,
  },
  checkbox: {
    borderRadius: 100,
  },
});
