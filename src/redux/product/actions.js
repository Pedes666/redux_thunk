import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_START,
  GET_PRODUCTS_ERROR
} from "./actionTypes";

export const getProductsAction = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload
  };
};

export const getProductStartAction = () => {
  return {
    type: GET_PRODUCTS_START
  };
};

export const getProductErrorAction = (payload) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload
  };
};

export const getProductsThunk = () => async (dispatch) => {
  dispatch(getProductStartAction());
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(getProductsAction(data));
  } catch (error) {
    dispatch(getProductErrorAction("Sorry Something went wrong!"));
  }
};
