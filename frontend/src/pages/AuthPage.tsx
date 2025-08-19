import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import "./AuthPage.css";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <ThemeToggle />
      <div className="auth-card fade-in">
        <div className="auth-header">
          <h1 className="auth-title">Counter Wizard</h1>
          <p className="auth-subtitle">
            {isLogin ? "¡Bienvenido de nuevo!" : "Comienza tu viaje financiero"}
          </p>
        </div>
        
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
