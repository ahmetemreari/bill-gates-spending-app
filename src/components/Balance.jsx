// src/components/Balance.jsx
import React from 'react';

const Balance = ({ balance }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="balance-bar">
      {formatCurrency(balance)}
    </div>
  );
};

export default Balance;