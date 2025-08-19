import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './AppBar.css';

const AppBar: React.FC = () => {
  const { user } = useAuth();
  const displayName = user?.displayName || user?.email?.split('@')[0] || 'Usuario';

  return (
    <header className="app-bar">
      <div className="app-bar-start">
        <h1 className="app-title">Counter Wizard</h1>
      </div>
      
      <div className="app-bar-end">
        <ThemeToggle />
        <div className="user-profile">
          <span className="user-name">{displayName}</span>
          {user?.photoURL ? (
            <img 
              src={user.photoURL} 
              alt="Perfil" 
              className="user-avatar"
            />
          ) : (
            <div className="user-avatar-placeholder">
              {displayName[0].toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
