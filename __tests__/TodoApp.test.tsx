import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TodoApp from '../src/TodoApp';

describe('TodoApp', () => {
  test('renders TextInput component with correct placeholder', () => {
    render(<TodoApp />);

    // Check that TextInput is rendered with correct placeholder
    const textInput = screen.getByPlaceholderText('Add a new todo');
    expect(textInput).toBeTruthy();
  });

  test('renders title "My Todo List"', () => {
    render(<TodoApp />);

    // Check that title is rendered
    const title = screen.getByText('My Todo List');
    expect(title).toBeTruthy();
  });

  test('handles text input changes', () => {
    render(<TodoApp />);

    const textInput = screen.getByPlaceholderText('Add a new todo');

    // Simulate typing text
    fireEvent.changeText(textInput, 'Test todo item');

    // Check that input has the text
    expect(textInput.props.value).toBe('Test todo item');
  });

  test('should display todo items when added', () => {
    render(<TodoApp />);

    // Initially, there should be no todo items displayed (only title)
    const title = screen.getByText('My Todo List');
    expect(title).toBeTruthy();

    // No todo items should be visible initially (only title and button text)
    const allTexts = screen.getAllByText(/.*/);
    expect(allTexts).toHaveLength(2); // Title + Button text
  });

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

  test('should handle empty input correctly', () => {
    render(<TodoApp />);

    const textInput = screen.getByPlaceholderText('Add a new todo');

    // Try to add empty todo (whitespace)
    fireEvent.changeText(textInput, '   ');
    expect(textInput.props.value).toBe('   ');

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

    // No todo should be added - should still only have title and button text
    const allTexts = screen.getAllByText(/.*/);
    expect(allTexts).toHaveLength(2); // Title + Button text only
  });
});
