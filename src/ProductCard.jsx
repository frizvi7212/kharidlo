export default function ProductCard(props) {
  return (
    <>
      <div className="flex justify-center  place-content-center gap-3.5">
        <div className="border-blue-900 hover:bg-blue-900 hover:rounded-b-lg-xl shadow-xl border-4 text-center bg-blue-950 rounded-2xl text-white place-content-center">
          <img
            src={props.product.image}
            alt={props.product.name}
            className="rounded-lg h-48 object-cover "
          />
          <h3 className="font-bold">{props.product.name}</h3>
          <p className="font-extralight">${props.product.price}</p>
          <p className="text-gray-500">{props.product.description}</p>
        </div>
      </div>
    </>
  );
}
