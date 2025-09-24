// src/components/TodoList.tsx
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
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
  const renderTodoItem = ({ item }: { item: Todo }) => (
    <TodoItem
      text={item.text}
      index={parseInt(item.id)}
      completed={item.completed}
      onPress={() => onToggleTodo?.(item.id)}
    />
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderTodoItem}
      keyExtractor={item => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});
