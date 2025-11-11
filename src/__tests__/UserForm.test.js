import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserForm from '../components/UserForm';

describe('UserForm Component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('submits form with valid data', () => {
    render(<UserForm onSubmit={mockOnSubmit} />);
    
    fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'john@test.com' } });
    fireEvent.change(screen.getByTestId('age-input'), { target: { value: '25' } });
    
    fireEvent.click(screen.getByTestId('submit-btn'));
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@test.com',
      age: '25'
    });
  });

  test('shows validation errors for empty fields', () => {
    render(<UserForm onSubmit={mockOnSubmit} />);
    
    fireEvent.click(screen.getByTestId('submit-btn'));
    
    expect(screen.getByTestId('name-error')).toHaveTextContent('Name is required');
    expect(screen.getByTestId('email-error')).toHaveTextContent('Email is required');
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});