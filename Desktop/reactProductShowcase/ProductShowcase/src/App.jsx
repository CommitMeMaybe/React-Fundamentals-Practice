import { useState } from "react";
import Productcard from "./Productcard";
import ProductList from "./Productlist";
import Header from "./Header";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = function () {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />

      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
}

export default App;
