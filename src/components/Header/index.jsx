import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { switchTheme } from "../../redux/action/commonAction/actions";
import { logOut } from "../../redux/action/loginAction/actions";

const Header = () => {
  const firebaseReducer = useSelector((state) => state.firebaseReducer);
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;
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
          <React.Fragment>
            <button
              onClick={() => dispatch(switchTheme())}
              className="btn_sm btn_default"
            >
              {isLight ? (
                <i className="far fa-moon"></i>
              ) : (
                <i className="far fa-sun"></i>
              )}
            </button>
            <button
              onClick={() => dispatch(logOut())}
              className="btn_sm btn_default"
            >
              Logout
            </button>
            <span className="btn_sm btn_defaut">{auth.email}</span>
          </React.Fragment>
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
