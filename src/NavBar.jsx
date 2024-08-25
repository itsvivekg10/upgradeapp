import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { auth, db } from "./firebase";

const NavBar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await db.collection("users").doc(user.uid).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            console.log(userData.fname);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-black position-relative"
      style={{ height: "70px" }}
    >
      <div className="container-md">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bold", fontSize: "2.5rem" }}
        >
          UP-GRADE⬆
        </NavLink>
        {userName && <li>Welcome, {userName}</li>}
        <NavLink to="/register">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG91Ivd0CD1UA-3GKi8OPGqO9BZvrfsclJFujvxLWQU6z0UR5xNec89_mVGFysedGeUo0&usqp=CAU"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            alt="Profile"
          />
        </NavLink>
      </div>
      <div
        className="border-bottom"
        style={{
          borderColor: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      ></div>
    </nav>
  );
};

export default NavBar;
