import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const { auth } = firebaseReducer;
  console.log(auth);
  return (
    <div className="header shadow_md">
      <h2>Todo app</h2>
      <div className="header-actions">
        {auth.uid ? (
          <button className="btn_sm btn_default">Logout</button>
        ) : (
          <React.Fragment>
            <button className="btn_sm btn_default">
              <NavLink className="link" to="register">
                Register
              </NavLink>
            </button>
            <button className="btn_sm btn_default">
              <NavLink className="link" to="register">
                Login
              </NavLink>
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
