import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('adds new todo when form is submitted', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addBtn = screen.getByTestId('add-todo-btn');
    
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addBtn);
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addBtn = screen.getByTestId('add-todo-btn');
    
    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addBtn);
    
    const todoText = screen.getByText('Test todo');
    fireEvent.click(todoText);
    
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });
});