import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.itemText}>{props.text}</Text>
      <Pressable onPress={props.onDelete.bind(this, props.id)}>
        <Text style={{ color: "white" }}>delete</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#828282",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "white",
  },
});
