import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Testing Demo</h1>
      </header>
      
      <main>
        <section>
          <h2>Counter Component</h2>
          <Counter />
        </section>

        <section>
          <h2>Todo List</h2>
          <TodoList />
        </section>

        <section>
          <h2>User Registration</h2>
          <UserForm onSubmit={addUser} />
          <div>
            <h3>Registered Users: {users.length}</h3>
            {users.map(user => (
              <div key={user.id} data-testid="user-item">
                {user.name} - {user.email}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;