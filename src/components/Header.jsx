import React from "react";
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

  return (
    <nav className="bg-gray-100 p-4 flex w-[70vw] sticky top-0 m-auto justify-between items-center shadow-lg ">
      <h1 onClick={() => navigate('/')} className="cursor-pointer text-2xl font-bold text-black">
        My<span className="text-yellow-400">Cart</span>
      </h1>
      <FaCartPlus onClick={() => navigate('/cart')} className="text-black text-3xl cursor-pointer hover:text-yellow-400 transition-colors duration-300" />
    </nav>
  );
};

export default Header;
