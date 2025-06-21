import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p className="price">${product.price}</p>
      <p className="old-price">${(product.price + 20).toFixed(2)}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
