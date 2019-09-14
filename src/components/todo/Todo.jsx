import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, removeTodo } from "../../redux/actions";
import RemoveTodo from "./RemoveTodo";
import "../../styles.css";

const Todo = ({ todo, toggleTodo, removeTodo }) => {
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  return (
    <div className="todo-container">
      <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
          )}
        >
          {todo.content}
        </span>
      </li>
      <RemoveTodo
        key={`todobutton${todo.id}`}
        id={todo.id}
        onRemoveClick={handleRemoveClick}
      />
    </div>
  );
};

// export default Todo;
export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
