// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./login.css";
// import { Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
// import { auth } from "./firebase";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("succes");
//       window.location.href = "/main";
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="formWrapper mt-5">
//             <h2 className="logo1">UP-GRADE⬆</h2>
//             <h3 className="title1">Login</h3>
//             <form className="form1" onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" to="/main" className="btn btn-primary">
//                 Sign in
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import "./login.css"; // Import your custom CSS file
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      window.location.href = "/main";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="formWrapper mt-5">
            <span className="logo1">UP</span>
            <span className="logo1">-</span>
            <span className="logo1">GRADE⬆</span>

            <h3 className="title1">Login</h3>
            <form className="form1" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control1"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" to="/main" className="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
