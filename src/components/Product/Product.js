import React from "react";
import "./Product.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Product = ({ products, addToCart }) => {
  return (
      <div className="product-container">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
  );
};

export default Product;
