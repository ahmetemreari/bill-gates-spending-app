// src/components/ProductList.jsx
import React from 'react';
import Product from './Product';

const ProductList = ({ products, onBuy, onSell, balance }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onBuy={onBuy}
          onSell={onSell}
          balance={balance}
        />
      ))}
    </div>
  );
};

export default ProductList;