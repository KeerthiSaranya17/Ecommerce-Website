import React, { useState, useEffect } from 'react';
import './App.css';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount")) || 0
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>My Store</h2>
        <div className="cart">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>
      </nav>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
