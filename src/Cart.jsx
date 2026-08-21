import { CartContext, CartProvider } from "./CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart } = useContext(CartProvider);

  return (
    <>
      {cart.map((c) => (
        <div key={c.id}>
          <p>{c.name}</p>
          <p>${c.price}</p>
        </div>
      ))}
    </>
  );
}
