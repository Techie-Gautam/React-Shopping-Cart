import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShoppingCartContext = createContext(null);

export default function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && data.products.length > 0) {
        setProductList(data.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  function addToCart(currentProductDetails) {
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === currentProductDetails.id
    );

    if (findIndexOfCurrentItem === -1) {
      copyExistingCartItems.push({
        ...currentProductDetails,
        quantity: 1,
        totalPrice: currentProductDetails?.price,
      });
    } 

    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
  }

  function removeFromCart(id) {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  function updateQuantity(id, increment) {
    let updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === id) {
        const updateQuantity = increment 
          ? cartItem.quantity + 1 
          : cartItem.quantity - 1;
        const updatedTotalPrice = updateQuantity * cartItem.price;
        return {
          ...cartItem,
          quantity: updateQuantity,
          totalPrice: updatedTotalPrice
        };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        addToCart,
        cartItems,
        removeFromCart,
        updateQuantity
      }}
    >
      {children}
      <ToastContainer  position="top-center" />
    </ShoppingCartContext.Provider>
  );
}
