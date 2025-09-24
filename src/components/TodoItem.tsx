// src/components/TodoItem.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TodoItemProps {
  text: string;
  index: number;
  onPress?: () => void;
  completed?: boolean;
}

export default function TodoItem({
  text,
  index,
  onPress,
  completed = false,
}: TodoItemProps) {
  return (
    <Text
      key={index}
      style={[styles.todoItem, completed && styles.completedTodo]}
      onPress={onPress}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    minWidth: 200,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
    backgroundColor: '#e0e0e0',
  },
});
