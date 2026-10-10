import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  function addToCart() {
    const alreadyInCart = cart.some(
      (item) => item.id === product.id
    );

    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>

      <button onClick={addToCart}>Add to Cart</button>

      <br />
      <br />

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default ProductDetails;