import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO } from "./actionTypes";

let nextTodoId = 0;

/*
 creates the action to add todos. 
 It takes a single string variable content and 
 returns an ADD_TODO action with payload containing a 
 self-incremented id and content
*/
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content
    }
  });

  export const toggleTodo = id => ({ 
    type: TOGGLE_TODO,
    payload: {
      id: id,
    }
  });


  export const removeTodo = (id) =>({ 
      type: REMOVE_TODO,
      payload: {
        id: id,
      }
  });
