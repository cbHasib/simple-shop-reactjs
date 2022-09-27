import React from "react";
import { deleteShoppingCart } from "../../utilities/fakedb";
import CartItem from "../CartItem/CartItem";
import "./OrderReview.css";

const OrderReview = ({ cart, setCart, addToCart, decreaseCartItem, increaseCartItem }) => {
  document.title = "Order Review";

  const removeCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  let subTotal = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    subTotal = subTotal + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const total = subTotal + shipping + tax;
  return (
    <div className="order-review-container">
      <div>
        {cart &&
          cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              decreaseCartItem={decreaseCartItem}
              increaseCartItem={increaseCartItem}
            />
          ))}
      </div>

      <div className="cart-overview">
        <div className="cart-info">
          <h4>Order Summary</h4>
          <p>Selected Items: {quantity}</p>
          <p>Total Price: ${subTotal}</p>
          <p>Total Shipping Charge: ${shipping}</p>
          <p>Tax: ${tax}</p>
          <h5>Grand Total: ${total}</h5>
          <div className="cart-action">
            <button onClick={removeCart} className="clear-cart">
              Clear Cart
            </button>
            <button>Review Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
