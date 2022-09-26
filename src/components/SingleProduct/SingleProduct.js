import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import noImage from "../../images/no-photo.jpg";

const SingleProduct = ({ product, addToCart }) => {
  const { img, name, price, ratings, seller } = product;

  return (
    <div className="product-card">
      <div className="product-info">
        <img src={img} alt="img" onError={(event)=> event.target.setAttribute('src', noImage)}/>
        <div>
          <div>
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
          </div>
          <div>
            <small>Manufacturer: {seller}</small>
            <small>Rating: {ratings} star</small>
          </div>
        </div>
      </div>
      <button onClick={()=> addToCart(product)} className="product-action">        Add to Cart  <FontAwesomeIcon icon={faCartPlus} /></button>
    </div>
  );
};

export default SingleProduct;
