import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AppLayout from './components/Layout/AppLayout';
import './App.css';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--bg-primary)'
      }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
          <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;