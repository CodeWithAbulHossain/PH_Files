import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase";
const Login = () => {
  const [user, setuser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGooglrSigneIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInuser = result.user;
        console.log(loggedInuser);
        setuser(loggedInuser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .hten((result) => {
        console.log(result);
        setuser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button className="btn btn-ghost" onClick={handleSignOut}>
          Sign out
        </button>
      ) : (
        <button onClick={handleGooglrSigneIn} className="btn btn-ghost">
          Google Login
        </button>
      )}

      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
