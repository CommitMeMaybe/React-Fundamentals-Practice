function Header({ cartCount }) {
  return (
    <header>
      <h1>My Store</h1>
      <p>Cart: {cartCount}</p>
    </header>
  );
}

export default Header;
