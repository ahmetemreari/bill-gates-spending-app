// src/components/ReceiptItem.js
import React from 'react';

const ReceiptItem = ({ item }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
      <div className="flex">
        <span className="font-medium">{item.name}</span>
        <span className="ml-2 text-gray-500">x {item.quantity}</span>
      </div>
      <div>{formatCurrency(totalPrice)}</div>
    </div>
  );
};

export default ReceiptItem;