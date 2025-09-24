import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TodoApp from '@/TodoApp';

describe('TodoApp', () => {
  test('should handle text input correctly', () => {
    render(<TodoApp />);

    const textInput = screen.getByPlaceholderText('Add a new todo');

    // Type text
    fireEvent.changeText(textInput, 'Test todo');
    expect(textInput.props.value).toBe('Test todo');

    // Clear the input
    fireEvent.changeText(textInput, '');
    expect(textInput.props.value).toBe('');
  });

  test('should add todo when button is pressed', () => {
    render(<TodoApp />);

    const textInput = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    // Type a todo
    fireEvent.changeText(textInput, 'Test todo');

    // Press the add button
    fireEvent.press(addButton);

    // Check that the todo appears
    const todoItem = screen.getByText('Test todo');
    expect(todoItem).toBeTruthy();

    // Check that input is cleared
    expect(textInput.props.value).toBe('');
  });

  test('should not add empty todos', () => {
    render(<TodoApp />);

    const textInput = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    // Try to add empty todo (whitespace)
    fireEvent.changeText(textInput, '   ');
    fireEvent.press(addButton);

    // No todo should be added - should still only have title, subtitle, and button text
    const allTexts = screen.getAllByText(/.*/);
    expect(allTexts).toHaveLength(3); // Title + Subtitle + Button text only
  });
});
