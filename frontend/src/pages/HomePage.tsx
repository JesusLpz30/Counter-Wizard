import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <section className="welcome-section">
          <h2 className="section-title">Bienvenido a Counter Wizard</h2>
          <p className="section-description">
            Tu asistente mágico para gestionar tus finanzas en grupo
          </p>
        </section>

        <section className="quick-actions">
          <h3 className="subsection-title">Acciones Rápidas</h3>
          <div className="actions-grid">
            <button className="action-card primary">
              <span className="action-icon">📸</span>
              <span className="action-title">Escanear Recibo</span>
            </button>
            <button className="action-card">
              <span className="action-icon">�</span>
              <span className="action-title">Registrar Gasto</span>
            </button>
            <button className="action-card">
              <span className="action-icon">�</span>
              <span className="action-title">Dividir Gasto</span>
            </button>
            <button className="action-card">
              <span className="action-icon">🎯</span>
              <span className="action-title">Meta de Ahorro</span>
            </button>
            <button className="action-card">
              <span className="action-icon">✨</span>
              <span className="action-title">Reconciliar</span>
            </button>
            <button className="action-card">
              <span className="action-icon">👥</span>
              <span className="action-title">Crear Grupo</span>
            </button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
