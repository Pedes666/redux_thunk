import {
  GET_PRODUCTS,
  GET_PRODUCTS_START,
  GET_PRODUCTS_ERROR
} from "./actionTypes";

const initState = {
  isLoading: false,
  products: [],
  error: ""
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
