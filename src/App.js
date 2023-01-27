import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState(['Do this first', 'Do this second', 'Do this third', 'Make cool apps', 'Drink water']);

  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todo List</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
