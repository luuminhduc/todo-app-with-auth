import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerRequest } from "../../redux/action/registerAction/actions";

const Register = () => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const registerReducer = useSelector((state) => state.registerReducer);
  const { authError } = registerReducer;

  const onSubmit = (data) => {
    dispatch(registerRequest(data));
  };

  return (
    <div className="register account-form">
      <div className="account-form-container container_sm">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Email</label>
            <input
              className={`${errors.email ? "error" : ""}`}
              name="email"
              ref={register({
                required: true,
                // pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              type="text"
              placeholder="email"
            />
            <small className="form-error">
              {errors.email && errors.email.type === "required"
                ? "Email can not be blank"
                : ""}
            </small>
            <small className="form-error">
              {errors.email && errors.email.type === "pattern"
                ? "Invalid email"
                : ""}
            </small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              className={`${errors.password ? "error" : ""}`}
              name="password"
              ref={register({ required: true, minLength: 6 })}
              type="password"
              placeholder="password"
            />
            <small className="form-error">
              {errors.password && errors.password.type === "required"
                ? "Password can not be blank"
                : ""}
            </small>
            <small className="form-error">
              {errors.password && errors.password.type === "minLength"
                ? "Password must contain at least 6 characters"
                : ""}
            </small>
          </div>
          <div className="switch-text">
            Already have an account?{" "}
            <button className="btn_link btn_default">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </button>
          </div>
          {authError ? <div className="alert_err">{authError}</div> : ""}
          <button className="btn_md btn_block btn_primary shadow_md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
