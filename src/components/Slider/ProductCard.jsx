import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-700 font-semibold">{product.name}</p>
        <p className="text-gray-500 font-bold">Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
