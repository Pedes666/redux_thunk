import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Are you excited about learning React-Redux 😄</h1>
      <button>
        <Link to="counter">Counter App</Link>
      </button>
      <p>Let's us Learn, How to do async operation in redux.</p>
      <button>
        <Link to="products">Products App</Link>
      </button>
    </>
  );
}
export default Home;
