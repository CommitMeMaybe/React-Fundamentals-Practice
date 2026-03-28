import Productcard from "./Productcard";

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      {products.map((product) => (
        <Productcard
          id={product.id}
          name={product.name}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
export default ProductList;
