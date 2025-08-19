import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const AuthPage: React.FC = () => {
  return (
    <div>
      <h1>Authentication</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default AuthPage;
