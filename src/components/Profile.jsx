// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="mb-5 flex flex-col items-center">
      <img 
        src="https://neal.fun/spend/billgates.jpg" 
        alt="Bill Gates" 
        className="w-20 h-20 rounded-full object-cover mb-2"
      />
      <h2 className="text-xl font-bold">Spend Bill Gates' Money</h2>
    </div>
  );
};

export default Profile;