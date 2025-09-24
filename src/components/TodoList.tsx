// src/components/TodoList.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoItem from '@components/TodoItem';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo?: (id: string) => void;
  onDeleteTodo?: (id: string) => void;
}

export default function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          index={parseInt(todo.id)}
          completed={todo.completed}
          onPress={() => onToggleTodo?.(todo.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
