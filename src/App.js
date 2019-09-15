import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";
import { connect } from "react-redux";
import { addTodoImmutable } from "./redux/actions-immutable";

/* 
  Source code from https://codesandbox.io/s/9on71rvnyo
*/

const App = ({ addTodoImmutable }) => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <button
        onClick={() => {
          addTodoImmutable();
        }}
      >
        AddTodoImmutable
      </button>
    </div>
  );
};

export default connect(
  null,
  { addTodoImmutable }
)(App);
