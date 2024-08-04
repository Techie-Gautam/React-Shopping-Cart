import React, { useContext } from "react";
import {FaPlus, FaMinus} from 'react-icons/fa'
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const SingleCartItem = ({cartItem}) => {
  const {removeFromCart, updateQuantity} = useContext(ShoppingCartContext)

  return (
    <>
    <div className="grid grid-cols-3 items-start gap-5">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
          <img
            src={cartItem?.thumbnail}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900">
            {cartItem?.title}
          </h3>
          <button
            onClick={() => removeFromCart(cartItem.id)}
            className="text-sm rounded px-4 py-3 mt-3 bg-black text-white font-extrabold"
          >
            REMOVE
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <h3 className="text-lg font-bold text-gray-900">
          ${cartItem?.totalPrice.toFixed(2)}
        </h3>
        <p className="mt-2 mb-3 font-bolf text-[16px]">
          Quantity: {cartItem?.quantity}
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => updateQuantity(cartItem.id, false)}
            className="disabled:opacity-65 disabled:cursor-not-allowed border text-black text-lg p-2 border-[#000] hover:bg-black hover:text-white duration-300 cursor-pointer"
            disabled={cartItem?.quantity === 1}
          >
            <FaMinus />
          </button>
          <button
            onClick={() => updateQuantity(cartItem.id, true)}
            className="border text-lg p-2 text-black border-[#000] hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
    <hr className="border-gray-500" />
  </>
  )
};

export default SingleCartItem;
