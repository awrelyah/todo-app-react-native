import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addHandler(enteredText) {
    setTodoItems((prev) => [
      ...prev,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }

  function deleteItem(id) {
    setTodoItems((prev) => {
      return todoItems.filter((item) => item.key !== id); //keep items where there is no match
    });
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>TO DO LIST</Text>
      <TodoInput onAddItem={addHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={todoItems}
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.text}
                onDelete={deleteItem}
                id={itemData.item.key}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  title: {
    paddingTop: 60,
    fontSize: 20,
  },
});
