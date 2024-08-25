import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = ({ displayName, setDisplayName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      const storageRef = ref(storage, `${user.uid}/${displayName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setError("Failed to upload image");
          console.error(error);
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              email: user.email,
              displayName,
              photoURL: downloadURL,
            });
            setLoading(false);
            window.location.href = "/main"; // Uncomment this line to enable redirection
          });
        }
      );
    } catch (err) {
      setError("Failed to create account");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="Container1">
      <div className="formWrapper">
        <span className="logo">UPGRADE⬆</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="photo"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
