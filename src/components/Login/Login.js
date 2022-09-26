import React from "react";
import "./Login.css";

const Login = () => {
  document.title = "Login Your Account";

  return (
    <div className="login-container">
      <div className="signup-card">
        <h2>Login</h2>

        <form action="">
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label for="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
        </form>
        <button className="btn-signup">Login</button>
        <p className="login-text">
          New to Ema-john? <a href="/signup">Create New Account</a>
        </p>

        <div className="or-text">
          <hr />
          <p>OR</p>
          <hr />
        </div>

        <button className="btn-google">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
