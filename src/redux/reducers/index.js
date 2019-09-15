import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import todosImmutable from "./todos-immutable";

// export default combineReducers({ todos, visibilityFilter });
export default combineReducers({ todos, todosImmutable });
