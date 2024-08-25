import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./starter.css";
import { NavLink } from "react-router-dom";
const Starter = () => {
  return (
    <>
      <div className="Main d-flex align-items-center justify-content-center ">
        <div className="LoginContainer">
          <h3
            className="text-center "
            style={{ fontWeight: "bold", fontSize: "3.5rem" }}
          >
            START UPGRADING YOURSELF FROM TODAY
          </h3>
          <NavLink
            to="/register"
            className="btn btn-primary btn-lg d-block mx-auto mt-4"
            style={{ fontWeight: "bold", fontSize: "2.0rem", width: "150px" }}
          >
            START
            {/* FontAwesome icon for login */}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Starter;
