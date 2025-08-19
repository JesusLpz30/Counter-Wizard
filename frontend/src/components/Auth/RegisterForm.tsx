import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import "./RegisterForm.css";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso - el usuario será redirigido por el hook useAuth
    } catch (err) {
      console.error('Error completo registro:', err);
      if (err instanceof Error) {
        console.log('Mensaje de error registro:', err.message);
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
      await signInWithPopup(auth, googleProvider);
      // Inicio de sesión exitoso - el usuario será redirigido por el hook useAuth
    } catch (err) {
      console.error('Error completo Google Sign-In en registro:', err);
      if (err instanceof Error) {
        console.log('Mensaje de error Google en registro:', err.message);
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
            minLength={6}
          />
        </div>
        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Creando cuenta..." : "Crear cuenta"}
        </button>
      </form>

      {error && <p className="error-message">
        {error === "Firebase: Error (auth/email-already-in-use)." 
          ? "Este correo electrónico ya está registrado. Si te registraste con Google, usa 'Continuar con Google'."
          : error === "Firebase: Error (auth/invalid-email)."
          ? "El formato del correo electrónico no es válido"
          : error === "Firebase: Error (auth/popup-closed-by-user)."
          ? "Se cerró la ventana de registro"
          : error === "Firebase: Error (auth/weak-password)."
          ? "La contraseña debe tener al menos 6 caracteres"
          : error === "Firebase: Error (auth/operation-not-allowed)."
          ? "Este método de registro no está habilitado"
          : error === "Firebase: Error (auth/account-exists-with-different-credential)."
          ? "Este correo ya está registrado con otro método. Intenta iniciar sesión con Google."
          : "Ocurrió un error. Por favor, intenta de nuevo."}
      </p>}

      <p style={{ textAlign: "center", marginTop: "1rem", color: "#fff" }}>
        ¿Ya tienes una cuenta?{" "}
        <button 
          onClick={onSwitchToLogin} 
          className="auth-link" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Iniciar sesión
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
