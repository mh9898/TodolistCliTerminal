// src/TodoApp.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppHeader from '@components/AppHeader';
import TodoInput from '@components/TodoInput';
import TodoList, { Todo } from '@components/TodoList';

export default function TodoApp() {
  // Test: 'should display todo items when added' - initial state is empty array
  const [todos, setTodos] = useState<Todo[]>([]);
  // Test: 'should handle text input correctly' - tracks input text state
  const [text, setText] = useState('');

  // Test: 'should add todo when button is pressed' & 'should not add empty todos'
  const addTodo = () => {
    if (text.trim()) {
      // Test: 'should not add empty todos' - validates non-empty input
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]); // Test: 'should add todo when button is pressed' - adds todo
      setText(''); // Test: 'should clear input after adding todo' - clears input
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {/* Test: 'renders title "My Todo List"' - verifies title display */}
      <AppHeader title="My Todo List" subtitle={`${todos.length} tasks`} />
      {/* Test: 'renders TextInput component with correct placeholder' - verifies input field */}
      <TodoInput
        value={text}
        onChangeText={setText} // Test: 'handles text input changes' - handles text updates
        onAdd={addTodo} // Test: 'should add todo when button is pressed' - triggers addTodo function
        placeholder="Add a new todo"
        buttonTitle="Add"
      />
      {/* Test: 'should add todo when button is pressed' - renders added todos */}
      <TodoList todos={todos} onToggleTodo={toggleTodo} />
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
});
