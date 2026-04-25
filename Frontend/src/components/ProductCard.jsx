import React from 'react';
import useCartStore from '../store/useCartStore';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.imageUrl} alt={product.name} />
        {product.stock <= 5 && product.stock > 0 && (
          <span className="product-tag">Son {product.stock} ürün</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <div className="product-price">{product.price.toFixed(2)} ₺</div>
          <button className="product-btn" onClick={() => addToCart(product)}>
            SEPETE EKLE <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
