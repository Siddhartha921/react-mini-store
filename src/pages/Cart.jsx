function Cart({ cart, setCart }) {
  function removeFromCart(productId) {
    const updatedCart = cart.filter(
      (product) => product.id !== productId
    );

    setCart(updatedCart);
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h2>{product.name}</h2>
              <p>₹{product.price}</p>

              <button onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;