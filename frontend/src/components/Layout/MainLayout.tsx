import React from 'react';
import AppBar from '../Navigation/AppBar';
import Sidebar from '../Navigation/Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <AppBar />
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
