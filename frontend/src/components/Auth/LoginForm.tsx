import React, { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import "./LoginForm.css";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login exitoso - el usuario será redirigido por el hook useAuth
    } catch (err) {
      console.error('Error completo:', err);
      if (err instanceof Error) {
        console.log('Mensaje de error:', err.message);
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      console.log('Starting Google Sign-In popup...');
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In successful:', result.user.email);
    } catch (err) {
      console.error('Error completo Google Sign-In:', err);
      if (err instanceof Error) {
        console.log('Mensaje de error Google:', err.message);
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <button 
        className="auth-button google-button" 
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        <img 
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
          alt="Google" 
          width="18" 
          height="18" 
        />
        <span>Continuar con Google</span>
      </button>

      <div className="divider">
        <span>o</span>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <input
            type="email"
            className="auth-input"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            className="auth-input"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>

      {error && <p className="error-message">
        {error === "Firebase: Error (auth/invalid-credential)." 
          ? "Correo electrónico o contraseña incorrectos"
          : error === "Firebase: Error (auth/invalid-email)."
          ? "El formato del correo electrónico no es válido"
          : error === "Firebase: Error (auth/popup-closed-by-user)."
          ? "Se cerró la ventana de inicio de sesión"
          : error === "Firebase: Error (auth/account-exists-with-different-credential)."
          ? "Este correo ya está registrado con otro método de inicio de sesión. Intenta iniciar sesión con Google."
          : error === "Firebase: Error (auth/user-disabled)."
          ? "Esta cuenta ha sido deshabilitada"
          : error === "Firebase: Error (auth/operation-not-allowed)."
          ? "Este método de inicio de sesión no está habilitado"
          : "Ocurrió un error. Por favor, intenta de nuevo."}
      </p>}

      <p style={{ textAlign: "center", marginTop: "1rem", color: "#fff" }}>
        ¿No tienes una cuenta?{" "}
        <button 
          onClick={onSwitchToRegister} 
          className="auth-link" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Crear cuenta
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
