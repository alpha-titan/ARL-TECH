import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";

import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    Cookies.set("isLoggedin", "false");
    dispatch({ type: "CLEAR" });
    history.push("/login");
  };

  const { state } = useContext(UserContext);

  return (
    <>
      <nav>
        <div className="nav-wrapper #03a9f4 light-blue">
          <Link
            to={state ? "/" : "/login"}
            className="brand-logo left "
            style={{ fontFamily: "Grandstander, cursive", marginLeft: "10px" }}
          >
            ARL-TECH
          </Link>

          {state ? (
            <ul
              style={{
                fontFamily: "Grandstander, cursive",
                marginRight: "10px",
              }}
              className="right"
            >
              {Cookies.get("fullname") ? (
                <li>
                  {" "}
                  <strong style={{ color: "darkgreen" }}>
                    Welcome {Cookies.get("fullname")} !!{" "}
                  </strong>{" "}
                </li>
              ) : (
                <li></li>
              )}
              <li>
                <Link to="/">Albums</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button
                  onClick={(e) => handleClick(e)}
                  className="btn #ff5722 deep-orange"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul
              style={{
                fontFamily: "Grandstander, cursive",
                marginRight: "10px",
              }}
              className="right"
            >
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
