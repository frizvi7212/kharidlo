import products from "./product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <>
      <div className="grid  grid-cols-3 m-3 gap-x-8 gap-y-4">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </>
  );
}
