import {
  decrementCounterAction,
  incrementCounterAction,
  multiplyAction
} from "../redux/counter/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CounterApp() {
  // useSelector allows us to read data from redux
  const reduxState = useSelector((state) => state);
  console.log(reduxState);

  const { counterState } = reduxState;
  const { count } = counterState;
  //dispatch
  // dispatch is used to send actions into our redux store
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounterAction(1));
  };

  const handleDecrement = () => {
    dispatch(decrementCounterAction(1));
  };

  const handleMultiply = () => {
    dispatch(multiplyAction(5));
  };

  return (
    <>
      <Link to="/">Home</Link>
      <div className="App">
        <h1>Counter is {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleMultiply}>Multiply by 5</button>
      </div>
    </>
  );
}

export default CounterApp;
