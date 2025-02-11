import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { TodoContext } from '../context/TodoContext';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { todos } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.todoItem}>{item.text}</Text>}
      />
      <Button title="Agregar" onPress={() => navigation.navigate('AddTodo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  todoItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});