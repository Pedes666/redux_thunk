import { INCREMENT_COUNT, DECREMENT_COUNT } from "./actionTypes";

/*
Actions are plain JavaScript object whch has type and payload. Action is one of the building blocks of Redux. */

export const incrementCounterAction = (payload) => {
  return {
    type: INCREMENT_COUNT,
    payload
  };
};

// Decrement Counter Action
export const decrementCounterAction = (payload) => {
  return {
    type: DECREMENT_COUNT,
    payload
  };
};
