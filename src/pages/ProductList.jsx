import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { productList, loading } = useContext(ShoppingCartContext);

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        {loading ? (
          <h1 className="text-center text-xl mt-5 font-semibold">Loading...</h1>
        ) : (
          <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            {productList && productList.length > 0 ? (
              productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <h2>No Products Found</h2>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
