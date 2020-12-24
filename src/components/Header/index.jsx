import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/action/loginAction/actions";

const Header = () => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const { auth } = firebaseReducer;
  const dispatch = useDispatch();
  console.log(auth);
  return (
    <div className="header shadow_md">
      <h2>
        <NavLink className="link" to="/">
          App
        </NavLink>
      </h2>
      <div className="header-actions">
        {auth.uid ? (
          <button
            onClick={() => dispatch(logOut())}
            className="btn_sm btn_default"
          >
            Logout
          </button>
        ) : (
          <React.Fragment>
            <NavLink
              activeClassName="active_link"
              className="link btn_sm btn_default"
              to="/register"
            >
              Register
            </NavLink>

            <NavLink
              activeClassName="active_link"
              className="link btn_sm btn_default"
              to="/login"
            >
              Login
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
