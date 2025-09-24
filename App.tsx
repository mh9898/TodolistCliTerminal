import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TodoApp from './src/TodoApp';

export default function App() {
  return (
    <SafeAreaProvider>
      <TodoApp />
    </SafeAreaProvider>
  );
}
