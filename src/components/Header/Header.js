import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = ({ setMenu }) => {
  return (
    <nav>
      <a href="/" className="site-identity">
        <img src={logo} alt="Logo" />
      </a>
      <div className="menu">
        <a
          onClick={(e) => {
            setMenu("Home");
            e.preventDefault();
          }}
          href="/"
        >
          Home
        </a>
        <a
          onClick={(e) => {
            setMenu("Shop");
            e.preventDefault();
          }}
          href="/"
        >
          Shop
        </a>
        <a
          onClick={(e) => {
            setMenu("OrderReview");
            e.preventDefault();
          }}
          href="/"
        >
          Order Review
        </a>
        <a
          onClick={(e) => {
            setMenu("ManageInventory");
            e.preventDefault();
          }}
          href="/"
        >
          Manage Inventory
        </a>
        <a
          onClick={(e) => {
            setMenu("Login");
            e.preventDefault();
          }}
          href="/"
        >
          Login
        </a>
        <a
          onClick={(e) => {
            setMenu("SignUp");
            e.preventDefault();
          }}
          href="/"
        >
          SignUp
        </a>
      </div>
    </nav>
  );
};

export default Header;
