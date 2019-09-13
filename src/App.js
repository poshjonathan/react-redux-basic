import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/todo/AddTodo';
import TodoList from './components/todo/TodoList';


/* 
  Source code from https://codesandbox.io/s/9on71rvnyo
*/

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
