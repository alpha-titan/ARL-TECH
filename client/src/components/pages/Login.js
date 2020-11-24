import React, { useState, useContext } from "react";
import M from "materialize-css";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cemail = Cookies.get("email");
    const cpassword = Cookies.get("password");

    if (!cemail || !cpassword) return M.toast({ html: "No user exists" });

    const validPass = await bcrypt.compare(password, cpassword);
    if (!validPass) return M.toast({ html: "Invalid password" });

    Cookies.set("isLoggedin", "true");

    dispatch({ type: "USER", payload: { email, cpassword } });
    history.push("/");
  };

  return (
    <div
      style={{ maxWidth: "600px", margin: "30px auto", alignItems: "center" }}
    >
      <div
        className="card"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "10px",
          margin: "10px",
        }}
      >
        <h3
          style={{ textAlign: "center", fontFamily: "Grandstander, cursive" }}
        >
          Login
        </h3>
        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ textAlign: "center", margin: "6px" }}>
          <button onClick={(e) => handleSubmit(e)} className="btn">
            Login{" "}
          </button>
          <Link
            to="/register"
            style={{
              fontFamily: "Grandstander, cursive",
              display: "block",
              textAlign: "center",
              color: "black",
            }}
          >
            Dont have an account?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
