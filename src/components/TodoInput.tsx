// src/components/TodoInput.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface TodoInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onAdd: () => void;
  placeholder?: string;
  buttonTitle?: string;
}

export default function TodoInput({
  value,
  onChangeText,
  onAdd,
  placeholder = 'Add a new todo',
  buttonTitle = 'Add',
}: TodoInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Button title={buttonTitle} onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
});
