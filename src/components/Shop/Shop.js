import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  addToDb,
  decreaseFromDb,
  getStoredCart,
  removeFromDb,
} from "../../utilities/fakedb";
import CartBar from "../CartBar/CartBar";
import OrderReview from "../OrderReview/OrderReview";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = ({ cart, setCart, setMenu, menu }) => {
  document.title = "Shop Your Favorite One";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products, setCart]);

  const addToCart = (product) => {
    let newCart = [];
    const cartCheck = cart.find((item) => item.id === product.id);
    if (cartCheck) {
      product.quantity = cartCheck.quantity + 1;
      const restProduct = cart.filter((item) => item.id !== product.id);
      newCart = [...restProduct, cartCheck];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const decreaseCartItem = (product) => {
    let newCart = [];
    const cartCheck = cart.find((item) => item.id === product.id);
    const restProduct = cart.filter((item) => item.id !== product.id);
    if (cartCheck.quantity !== 0) {
      product.quantity = cartCheck.quantity - 1;
      newCart = [...restProduct, cartCheck];
    } 
    if(product.quantity === 0) {
      removeFromDb(product.id);
      newCart = [...restProduct];
    }

    setCart(newCart);
    decreaseFromDb(product.id);
  };
  const increaseCartItem = (product) => {
    addToCart(product)
  };

  return (
    <div>
      {menu === "OrderReview" && (
        <OrderReview
          cart={cart}
          setCart={setCart}
          increaseCartItem={increaseCartItem}
          decreaseCartItem={decreaseCartItem}
        ></OrderReview>
      )}
      {menu === "Shop" && (
        <div className="shop-container">
          <div>
            <Product products={products} addToCart={addToCart} />
          </div>
          <aside className="cart-sidebar">
            <CartBar setMenu={setMenu} cart={cart} setCart={setCart} />
          </aside>
        </div>
      )}
    </div>
  );
};

export default Shop;
