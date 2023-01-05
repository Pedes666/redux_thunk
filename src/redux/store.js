import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReducer } from "./product/reducer";
import { counterReducer } from "./counter/reducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  productState: productReducer
});

// #Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action.

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
