import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Sincronizar el estado inicial con el tema actual
    const currentTheme = document.body.getAttribute('data-theme');
    setIsLight(currentTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    setIsLight(!isLight);
  };

  return (
    <label className="theme-toggle-switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={isLight}
        aria-label="Cambiar tema"
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
