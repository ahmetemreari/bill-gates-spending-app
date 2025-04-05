// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Balance from './components/Balance';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';
import { productData } from './data/products';

function App() {
  const initialBalance = 100000000000;
  const [balance, setBalance] = useState(initialBalance);
  const [products, setProducts] = useState(productData);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const handleBuy = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    
    setProducts(updatedProducts);
    
    const product = products.find(p => p.id === id);
    setBalance(prevBalance => prevBalance - product.price);
    
    updatePurchasedItems(id, 1);
  };

  const handleSell = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    
    setProducts(updatedProducts);
    
    const product = products.find(p => p.id === id);
    setBalance(prevBalance => prevBalance + product.price);
    
    updatePurchasedItems(id, -1);
  };

  const updatePurchasedItems = (id, quantityChange) => {
    const product = products.find(p => p.id === id);
    
    setPurchasedItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item => {
          if (item.id === id) {
            const newQuantity = item.quantity + quantityChange;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        }).filter(Boolean);
        
        return updatedItems;
      } else if (quantityChange > 0) {
        return [...prevItems, { 
          id: product.id, 
          name: product.name, 
          price: product.price, 
          quantity: 1 
        }];
      }
      
      return prevItems;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <Profile />
          <Balance balance={balance} />
        </div>
        
        <ProductList 
          products={products} 
          onBuy={handleBuy} 
          onSell={handleSell} 
          balance={balance}
        />
        
        {purchasedItems.length > 0 && (
          <Receipt items={purchasedItems} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;