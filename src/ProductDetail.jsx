import { useParams } from "react-router";
import products from "./product";
import { useState } from "react";

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id == params.id);
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </>
  );
}
console.log(function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}> Clicked {count} times</button>
  );
});
