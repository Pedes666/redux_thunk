import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import CounterApp from "./pages/Counter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterApp />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
