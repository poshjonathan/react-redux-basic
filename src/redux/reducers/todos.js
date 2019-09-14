import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id], // add new id to state
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;

      // Remove the 'byIds' element from original
      const { ['byIds']: byIdsList, ...restOfTheStore } = state;
      // Remove the 'id' from the 'byIds' element
      const { [id]: removedValue, ...restOfIdsList } = byIdsList;
      // Merge back together
      // This step copy 'restOfTheStore' then add '['byIds']: restOfIdsList' to it
      const updatedByIdsList = { ...restOfTheStore, ['byIds']: restOfIdsList };

      const { ['allIds']: parentValue2, ...noChild2 } = updatedByIdsList;
      const updatedAllIdsArray = parentValue2.filter(el => el !== id)
      const merged = { ...noChild2, ['allIds']: updatedAllIdsArray };
      
      return merged;
/* 
  Removal source code is from:
  https://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably

  // To do a deep removal with property names from variables
  const deep = {
    foo: 'bar',
    c: {
    x: 1,
    y: 2
    }
  };

  const parentKey = 'c';
  const childKey = 'y';
  // Remove the 'c' element from original
  const { [parentKey]: parentValue, ...noChild } = deep;
  // Remove the 'y' from the 'c' element
  const { [childKey]: removedValue, ...childWithout } = parentValue;
  // Merge back together
  const withoutThird = { ...noChild, [parentKey]: childWithout };
  console.log(withoutThird); // Will be { "foo": "bar", "c": { "x": 1 } }
*/
    }
    default:
      return state;
  }
}
