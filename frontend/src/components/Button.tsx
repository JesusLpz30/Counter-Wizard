import React from 'react';
import './Button.css';

// Definimos los tipos para las propiedades del componente con TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * Un componente de botón reutilizable con estilos de la guía y tipos de TypeScript.
 */
const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const className = `button button-${variant}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
