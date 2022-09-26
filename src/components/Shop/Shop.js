import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import CartBar from "../CartBar/CartBar";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = ({cart, setCart, setMenu}) => {
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

  return (
    <div className="shop-container">
      <div>
        <Product products={products} addToCart={addToCart} />
      </div>
      <aside className="cart-sidebar">
        <CartBar setMenu={setMenu} cart={cart} setCart={setCart} />
      </aside>
    </div>
  );
};

export default Shop;
