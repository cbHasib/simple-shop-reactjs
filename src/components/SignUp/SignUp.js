import React from "react";
import "./SignUp.css";

import google from "../../images/google.svg";

const SignUp = ({setMenu}) => {
  document.title = "Register a New Account";

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form action="">
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label for="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <label for="confirm-password">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </form>
        <button className="btn-signup">Sign Up</button>
        <p className="login-text">
          Already have an account? <a onClick={(e) => {
            setMenu("Login");
            e.preventDefault();
          }} href="/">Login</a>
        </p>

        <div className="or-text">
          <hr />
          <p>OR</p>
          <hr />
        </div>

        <button className="btn-google">
          <img src={google} alt="google login" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
