import { Map, List, set } from "immutable";
import { ADD_TODO_IMMUTABLE } from "../actionTypes";

const initialState = Map({
  allIds: Map({})
});

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_IMMUTABLE: {
      const { id, content } = action.payload;

      const item = {
        content: `payload content ${id}`,
        status: `payload status ${id}`
      };
      // if 'id' doesn't exist in 'state.allIds', it will create key of 'id'
      // and set the value of 'item'
      return state.setIn(["allIds", id], item);
    }
    default:
      return state;
  }
}
