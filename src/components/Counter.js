import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button 
        data-testid="increment-btn"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button 
        data-testid="decrement-btn"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button 
        data-testid="reset-btn"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;