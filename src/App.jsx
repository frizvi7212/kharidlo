import Productlist from "./ProductList";
import { Routes, Route } from "react-router";
import ProductDetail from "./ProductDetail";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
export default function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Productlist />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart/" element={<Cart />}></Route>
        </Routes>
      </CartProvider>
    </>
  );
}
