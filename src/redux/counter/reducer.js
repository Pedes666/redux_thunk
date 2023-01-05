import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionTypes";

const initState = {
  count: 0
};
// Reducers
// #Basically, reducer the basic pure JS func which take prev state and action and retun the newly update state

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        count: state.count + action.payload
      };
    case DECREMENT_COUNT:
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
};
