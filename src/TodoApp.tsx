// src/TodoApp.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TodoApp() {
  // Test: 'should display todo items when added' - initial state is empty array
  const [todos, setTodos] = useState<string[]>([]);
  // Test: 'should handle text input correctly' - tracks input text state
  const [text, setText] = useState('');

  // Test: 'should add todo when button is pressed' & 'should not add empty todos'
  const addTodo = () => {
    if (text.trim()) {
      // Test: 'should not add empty todos' - validates non-empty input
      setTodos([...todos, text]); // Test: 'should add todo when button is pressed' - adds todo
      setText(''); // Test: 'should clear input after adding todo' - clears input
    }
  };

  return (
    <View style={styles.container}>
      {/* Test: 'renders title "My Todo List"' - verifies title display */}
      <Text style={styles.title}>My Todo List</Text>
      {/* Test: 'renders TextInput component with correct placeholder' - verifies input field */}
      <TextInput
        placeholder="Add a new todo"
        value={text}
        onChangeText={setText} // Test: 'handles text input changes' - handles text updates
        style={styles.input}
      />
      {/* Test: 'should add todo when button is pressed' - triggers addTodo function */}
      <Button title="Add" onPress={addTodo} />
      {/* Test: 'should add todo when button is pressed' - renders added todos */}
      {todos.map((todo, index) => (
        <Text key={index} style={styles.todoItem}>
          {todo}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
  todoItem: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});
