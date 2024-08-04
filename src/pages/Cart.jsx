import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import SingleCartItem from "../components/SingleCartItem";

const Cart = () => {
  const navigate = useNavigate()

  const {cartItems} = useContext(ShoppingCartContext)

  return(
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
    <h1 className="text-2xl font-bold text-gray-800 text-center">
      My Cart Page
    </h1>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="md:col-span-2 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <SingleCartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h1 className="text-2xl font-semibold">Your Cart Is Empty! 🫠</h1>
        )}
      </div>
      <div className="bg-gray-100 rounded-sm p-4 h-max shadow-xl">
        <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
          Order Summary
        </h3>
        <ul className="text-gray-700 mt-4 space-y-2">
          <p className="flex flex-wrap gap-4 text-sm font-bold">
            Total <span>$ {cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</span>
          </p>
        </ul>
        <div className="mt-5 flex gap-2">
          <button
            className="disabled:opacity-60 rounded text-sm px-4 py-3 bg-black text-white font-extrabold"
          >
            Checkout
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-sm px-4 py-3 rounded bg-black text-white font-extrabold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Cart;
