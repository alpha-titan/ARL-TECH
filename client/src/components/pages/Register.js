import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import bcrypt from "bcryptjs"; // ? used for hashing password
import Cookies from "js-cookie"; // ? library for interacting with Cookies which makes it easier

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setName] = useState("");
  const [number, setNumber] = useState("");
  let [image, setImage] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Cookies.get("email")) Cookies.remove("email");
    if (Cookies.get("password")) Cookies.remove("password");
    if (Cookies.get("fullname")) Cookies.remove("fullname");
    if (Cookies.get("image")) Cookies.remove("image");
    if (Cookies.get("number")) Cookies.remove("number");

    // ? Email validation String

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return M.toast({ html: "Invalid Email", classes: "rounded" });
    }

    // ? Number Validation String

    const valNum = /^\d{10}$/;
    if (!number.match(valNum)) {
      return M.toast({
        html: "Number should be exactly 10 digits and no other characters",
        classes: "rounded",
      });
    }

    // ? password validation string

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!password.match(passw)) {
      return M.toast({
        html:
          "password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter",
        classes: "rounded",
      });
    }

    //?check password

    if (password !== cpassword) {
      return M.toast({ html: "password doesnot match", classes: "rounded" });
    }

    // ? hashing password after check

    const salt = await bcrypt.genSalt(12); // ? generating salt
    const hashedPassword = await bcrypt.hash(password, salt); // ? hashing password with given salt

    // ? storing value in cookies

    image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyGgMKBT024rt6L2TRw-D5Gm_zKhqvGIYyQ&usqp=CAU";

    Cookies.set("fullname", fullName, { expires: 1 });
    Cookies.set("email", email, { expires: 1 });
    Cookies.set("number", number, { expires: 1 });
    Cookies.set("password", hashedPassword, { expires: 1 });
    Cookies.set("image", image);
    M.toast({ html: "Registered succefully !!", classes: "rounded" });

    history.push("/login");
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
          Register
        </h3>

        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Fullname
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setName(e.target.value)}
        />

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
          Phone Number
        </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <div class="file-field input-field">
          <div class="btn">
            <span>Upload Image </span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>

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
        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          Confirm Password
        </label>
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <div
          style={{
            fontFamily: "Grandstander, cursive",
            textAlign: "center",
            margin: "6px",
          }}
        >
          <button onClick={(e) => handleSubmit(e)} className="btn">
            Register
          </button>
        </div>
        <Link
          style={{
            fontFamily: "Grandstander, cursive",
            display: "block",
            textAlign: "center",
            color: "black",
          }}
          to="/login"
        >
          Have an account ?{" "}
        </Link>
      </div>
    </div>
  );
};

export default Register;
