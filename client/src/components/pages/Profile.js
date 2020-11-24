import React from "react";
import Cookies from "js-cookie";
const Profile = () => {
  const image = Cookies.get("image");
  const name = Cookies.get("fullname");
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        alignItems: "center",
        borderRadius: "50%",
      }}
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
        <div
          className="avatar-holder"
          style={{ marginTop: "10px", textAlign: "center" }}
        >
          <img src={image} alt="" />
        </div>

        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "blue",
          }}
        >
          Name
        </label>
        <div
          style={{
            fontWeight: "100",
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          <h5>{name}</h5>
        </div>
        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "blue",
          }}
        >
          Email
        </label>
        <div
          style={{
            fontWeight: "100",
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          <h5>{Cookies.get("email")}</h5>
        </div>
        <label
          style={{
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "blue",
          }}
        >
          Number
        </label>
        <div
          style={{
            fontWeight: "100",
            fontFamily: "Grandstander, cursive",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          <h5>{Cookies.get("number")}</h5>
        </div>
      </div>
    </div>
  );
};

export default Profile;
