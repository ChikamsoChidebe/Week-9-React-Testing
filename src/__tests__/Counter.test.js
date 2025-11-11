import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  test('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 2');
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: -1');
  });

  test('resets count to 0 when reset button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const resetBtn = screen.getByTestId('reset-btn');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 2');
    
    fireEvent.click(resetBtn);
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0');
  });
});