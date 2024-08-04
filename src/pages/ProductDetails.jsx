import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    addToCart,
    cartItems,
    removeFromCart
  } = useContext(ShoppingCartContext);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (data) {
        setProductDetails(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const isInCart = cartItems.some(item => item.id === productDetails?.id);

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(productDetails.id);
      toast.error("Item removed from cart");
    } else {
      addToCart(productDetails);
      toast.success("Item added to cart");
    }
  };

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <h1 className="text-center text-xl font-semibold">Product Details</h1>
        {loading ? (
          <h1 className="text-center text-2xl font-semibold mt-10">Loading...</h1>
        ) : (
          <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-md p-6">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 py-10 rounded-xl shadow-xl relative">
                <img
                  className="w-4/5 rounded object-cover"
                  src={currentImage === null ? productDetails?.thumbnail : currentImage}
                  alt={productDetails?.title}
                />
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                {productDetails?.images?.length
                  ? productDetails?.images.map((image) => (
                      <div
                        onClick={() => setCurrentImage(image)}
                        className="rounded-xl p-4 shadow-lg"
                        key={image}
                      >
                        <img
                          src={image}
                          className="w-24 cursor-pointer"
                          alt="Product secondary image"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#333333]">{productDetails?.title}</h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-xl font-bold">${productDetails?.price}</p>
              </div>
              <div>
                <button
                  onClick={handleCartClick}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  {isInCart ? "Remove From Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
