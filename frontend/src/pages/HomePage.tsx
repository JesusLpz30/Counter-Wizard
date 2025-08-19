import React from "react";
import { auth } from "../firebase/firebase";

const HomePage: React.FC = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
