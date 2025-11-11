import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          data-testid="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a todo"
        />
        <button data-testid="add-todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      
      <ul data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id} data-testid="todo-item">
            <span 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;