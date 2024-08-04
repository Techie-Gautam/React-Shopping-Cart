import React from "react";
import {Routes, Route} from 'react-router-dom'
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <main className="w-[90vw] m-auto">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer position="top-center" />
    </main>
  )
};

export default App;
