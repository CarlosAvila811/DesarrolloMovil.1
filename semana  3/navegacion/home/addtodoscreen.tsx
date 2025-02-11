import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TodoContext } from '../context/TodoContext';

export default function AddTodoScreen({ navigation }: { navigation: any }) {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      addTodo(todoText);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="añadir"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="agregar" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});