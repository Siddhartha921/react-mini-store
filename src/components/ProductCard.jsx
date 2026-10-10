import { Link } from "react-router-dom";

function ProductCard({ product, cart, setCart }) {
  function addToCart() {
    const alreadyInCart = cart.some(
      (item) => item.id === product.id
    );

    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  }

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.category}</p>

      <Link to={`/product/${product.id}`}>
        View Details
      </Link>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;