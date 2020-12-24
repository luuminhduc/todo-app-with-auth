import React from "react";

const Register = () => {
  return (
    <div className="register account-form">
      <div className="account-form-container container_sm">
        <h1>Register</h1>
        <form>
          <div className="form-control">
            <label>Email</label>
            <input type="text" placeholder="email" />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <button className="btn_md btn_block btn_primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
