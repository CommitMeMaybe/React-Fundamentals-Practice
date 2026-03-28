import Productlist from "./Productlist";

function Productcard({ name, price, id, onAddToCart }) {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>

      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}
export default Productcard;
