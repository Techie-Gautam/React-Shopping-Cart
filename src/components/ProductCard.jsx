import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    function handleNavigateToProductDetailsPage(currentProductId) {
        navigate(`/product-details/${currentProductId}`)
    }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
        <img src={product?.thumbnail} alt={product?.title} className="h-full w-full object-contain" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap truncate">{product?.title}</h3>
        <p className="text-green-600 font-semibold">${product?.price}</p>
        <button onClick={() => handleNavigateToProductDetailsPage(product.id)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
