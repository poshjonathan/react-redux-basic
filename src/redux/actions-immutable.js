import { ADD_TODO_IMMUTABLE } from "./actionTypes";

let nextTodoId = 0;

export const addTodoImmutable = content => ({
  type: ADD_TODO_IMMUTABLE,
  payload: {
    id: ++nextTodoId,
    content
  }
});
