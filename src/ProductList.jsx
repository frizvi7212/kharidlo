import products from "./product";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

export default function ProductList() {
  return (
    <>
      <Link to={"/cart"}>Cart</Link>
      <div className="grid  grid-cols-3 m-3 gap-x-8 gap-y-4">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </>
  );
}
