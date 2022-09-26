import React from "react";
import "./Home.css";
import menImage from "../../images/men-fashion.png";

const Home = ({ setMenu }) => {
  document.title = "Simple React eCommerce App";

  return (
    <div className="home-container">
      <div>
        <p className="save-percent">Save up to 70% off</p>
        <h2>New Collection For Fall</h2>
        <p className="subheading">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <button onClick={() => setMenu("Shop")}>SHOP NOW</button>
      </div>
      <div>
        <img src={menImage} alt="Men Fashion" />
      </div>
    </div>
  );
};

export default Home;
