import React from "react";
import "./CartItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import noImage from "../../images/no-photo.jpg";
import { removeFromDb } from "../../utilities/fakedb";

const CartItem = ({ product, cart, setCart }) => {
  const { img, name, price, shipping, id } = product;

  const removeItemFromCart = (itemId) => {
    removeFromDb(itemId);
    const restProduct = cart.filter((item) => item.id !== itemId);
    setCart(restProduct);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img
          src={img}
          onError={(event) => event.target.setAttribute("src", noImage)}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <p>
            Price <span className="text-primary text-bold">${price}</span>
          </p>
          <p>
            Shipping Charge{" "}
            <span className="text-primary text-bold">${shipping}</span>
          </p>
        </div>
      </div>
      <div className="cart-item-action">
        <button onClick={()=> removeItemFromCart(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;