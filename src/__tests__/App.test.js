import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Integration Tests', () => {
  test('renders all main sections', () => {
    render(<App />);
    
    expect(screen.getByText('React Testing Demo')).toBeInTheDocument();
    expect(screen.getByText('Counter Component')).toBeInTheDocument();
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('User Registration')).toBeInTheDocument();
  });

  test('adds user and updates count', () => {
    render(<App />);
    
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('age-input'), { target: { value: '30' } });
    
    fireEvent.click(screen.getByTestId('submit-btn'));
    
    expect(screen.getByText('Registered Users: 1')).toBeInTheDocument();
    expect(screen.getByText('Test User - test@example.com')).toBeInTheDocument();
  });
});