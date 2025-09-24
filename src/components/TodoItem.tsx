// src/components/TodoItem.tsx
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

interface TodoItemProps {
  text: string;
  index: number;
  onPress?: () => void;
  onDelete?: () => void;
  completed?: boolean;
}

export default function TodoItem({
  text,
  index,
  onPress,
  onDelete,
  completed = false,
}: TodoItemProps) {
  return (
    <View style={styles.container}>
      <Text
        key={index}
        style={[styles.todoItem, completed && styles.completedTodo]}
        onPress={onPress}
      >
        {text}
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    minWidth: 200,
    padding: 8,
  },
  todoItem: {
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
