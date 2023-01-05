import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsThunk } from "../redux/product/actions";

function Products() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const { productState } = reduxState;
  const { isLoading, error, products } = productState;

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {isLoading ? <h1>Loading...!</h1> : null}
      <Link to="/">Home</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        {products.length
          ? products.map((item, index) => (
              <div
                key={index}
                style={{
                  height: "300px",
                  width: "150px",
                  padding: "5px"
                }}
              >
                <img
                  src={item.image}
                  alt="prductImage"
                  height="90px"
                  width="90px"
                />
                <p>{item.title}</p>
                <p>Rs: {item.price}</p>
                <button>Buy Now</button>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
export default Products;
