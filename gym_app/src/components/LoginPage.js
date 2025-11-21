import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Login</h2>

      <form className="login-form">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button type="submit">Login</button>

        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
          <a href="#">Help</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
