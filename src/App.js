import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Starter from "./Starter";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import Dashboard from "./Dashboard";
import Chemestry from "./Chemestry";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [displayName, setDisplayName] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      console.log(userData);
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Starter />} />
        <Route
          exact
          path="/register"
          element={
            <Register
              displayName={displayName}
              setDisplayName={setDisplayName}
            />
          }
        />
        <Route exact path="login" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/chemestry" element={<Chemestry />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
