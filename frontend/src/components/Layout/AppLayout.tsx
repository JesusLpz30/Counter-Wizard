import React from 'react';
import './AppLayout.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
