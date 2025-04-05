// src/components/Product.jsx
import React from 'react';

const Product = ({ product, onBuy, onSell, balance }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Check if buy button should be disabled
  const isBuyDisabled = product.price > balance;
  
  // Check if sell button should be disabled
  const isSellDisabled = product.quantity <= 0;

  return (
    <div className="product-card">
      <img 
        src={product.image || "/api/placeholder/100/100"} 
        alt={product.name}
        className="w-24 h-24 object-contain mb-3"
      />
      <div className="font-bold mb-1">{product.name}</div>
      <div className="text-green-500 mb-4">{formatCurrency(product.price)}</div>
      
      <div className="quantity-control">
        <button 
          onClick={() => onSell(product.id)}
          disabled={isSellDisabled}
          className="buy-sell-btn"
        >
          SAT
        </button>
        
        <span className="mx-2">
          {product.quantity}
        </span>
        
        <button 
          onClick={() => onBuy(product.id)}
          disabled={isBuyDisabled}
          className="buy-sell-btn"
        >
          Satın AL
        </button>
      </div>
    </div>
  );
};

export default Product;