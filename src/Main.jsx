import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="card" style={{ width: "250px", height: "250px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFqZoEY4oMH9c1vREntlNz0rdabSc3_CxDXaCeupglg&s"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/chemestry" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
