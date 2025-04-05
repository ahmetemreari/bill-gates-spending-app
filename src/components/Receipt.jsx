// src/components/Receipt.js
import React from 'react';
import ReceiptItem from './ReceiptItem';

const Receipt = ({ items }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate total spent
  const totalSpent = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b-2 border-gray-200">
        Alışveriş Sepeti
      </h2>
      
      <div className="space-y-2">
        {items.map(item => (
          <ReceiptItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="flex justify-between mt-6 pt-4 border-t-2 border-gray-200 font-bold">
        <span>Toplam</span>
        <span>{formatCurrency(totalSpent)}</span>
      </div>
    </div>
  );
};

export default Receipt;