import React from 'react';
import { auth } from '../../firebase/firebase';
import './Sidebar.css';
import Icon from "@mdi/react";
import {
  mdiViewDashboard,
  mdiPiggyBank,
  mdiMagicStaff,
  mdiChartLine,
  mdiAccountGroup,
  mdiTargetAccount,
  mdiReceipt,
  mdiSync,
  mdiCog,
  mdiBellOutline,
  mdiLogout
} from "@mdi/js";

const Sidebar: React.FC = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <div className="nav-section">
          <h3 className="nav-title">Mi Bóveda</h3>
                    <ul className="nav-list">
            <li className="nav-item active">
              <Icon path={mdiViewDashboard} size={1} className="nav-icon" />
              <span>Resumen</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiPiggyBank} size={1} className="nav-icon" />
              <span>Activos y Deudas</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiMagicStaff} size={1} className="nav-icon" />
              <span>Ritual de Reconciliación</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiChartLine} size={1} className="nav-icon" />
              <span>Análisis y Proyecciones</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Grupos y Gastos</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <Icon path={mdiAccountGroup} size={1} className="nav-icon" />
              <span>Mis Grupos</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiTargetAccount} size={1} className="nav-icon" />
              <span>Metas de Ahorro</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiReceipt} size={1} className="nav-icon" />
              <span>Registro de Gastos</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiSync} size={1} className="nav-icon" />
              <span>Gastos Recurrentes</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Configuración</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <Icon path={mdiCog} size={1} className="nav-icon" />
              <span>Preferencias</span>
            </li>
            <li className="nav-item">
              <Icon path={mdiBellOutline} size={1} className="nav-icon" />
              <span>Recordatorios</span>
            </li>
            <li className="nav-item" onClick={handleLogout}>
              <Icon path={mdiLogout} size={1} className="nav-icon" />
              <span>Cerrar Sesión</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Grupos y Gastos</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <i className="nav-icon">👥</i>
              <span>Mis Grupos</span>
            </li>
            <li className="nav-item">
              <i className="nav-icon">🎯</i>
              <span>Metas de Ahorro</span>
            </li>
            <li className="nav-item">
              <i className="nav-icon">�</i>
              <span>Registro de Gastos</span>
            </li>
            <li className="nav-item">
              <i className="nav-icon">🔄</i>
              <span>Gastos Recurrentes</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-title">Configuración</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <i className="nav-icon">⚙️</i>
              <span>Preferencias</span>
            </li>
            <li className="nav-item">
              <i className="nav-icon">🔔</i>
              <span>Recordatorios</span>
            </li>
            <li className="nav-item" onClick={handleLogout}>
              <i className="nav-icon">🚪</i>
              <span>Cerrar Sesión</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
