# Visión del Proyecto: Counter Wizard

## 1. Concepto General

Counter Wizard es una **aplicación web** de finanzas personales 360° que combina una potente gestión de gastos en grupo con una completa bóveda de finanzas personales. La aplicación se diferencia por su sólida lógica contable, una interfaz de usuario intuitiva y una capa de gamificación y temática de "magia" que la hace única y atractiva.

## 2. Stack Tecnológico

*   **Frontend:** React.js (usando Vite para el empaquetado).
*   **Backend & Base de Datos:** Firebase (Firestore para la base de datos en tiempo real, Authentication para usuarios, y Hosting para el despliegue).
*   **Diseño:** Basado en componentes de Material Design, pero con un tema personalizado (Guía de Estilo).

## 3. Principio Fundamental (La Regla de Oro)

La lógica de toda la aplicación se basa en un principio contable inmutable:

**"La aplicación no almacena saldos, totales o propiedades. Solo almacena transacciones. Todo lo demás (saldos, deudas, propiedad, etc.) se calcula en tiempo real a partir de este historial de transacciones."**

Esto garantiza precisión, flexibilidad para escenarios complejos y una auditoría completa de todos los movimientos.

## 4. Hoja de Ruta por Fases (Roadmap)

### Fase 1: El Gestor de Grupos (MVP - Producto Mínimo Viable)

El objetivo es lanzar la mejor aplicación web del mercado para gestionar dinero en grupo.

**Funciones Clave:**
*   **Gestión de Grupos:** Creación de grupos e invitación de miembros.
*   **Presupuestos para Gastos:** Control de gastos para eventos o viajes.
*   **Metas de Ahorro Compartido:**
    *   Permite crear objetivos de ahorro dentro de un grupo.
    *   Se basa en un libro contable de aportaciones y retiros para calcular la propiedad real de cada miembro en tiempo real.
*   **Registro de Gastos:**
    *   **Escaneo de Recibos (OCR):** Para añadir gastos automáticamente.
    *   **División Flexible:** Por partes iguales, porcentaje, cantidad exacta o pago completo.
*   **Automatización:**
    *   **Gastos Recurrentes:** Para suscripciones.
    *   **Recordatorios de Pago:** Para servicios y pagos manuales.

### Fase 2: Mi Bóveda Personal y Expansión

El objetivo es convertir la app en un gestor financiero personal completo.

**Funciones Clave:**
*   **Registro de Activos y Deudas:** Cuentas de banco, efectivo, inversiones, tarjetas de crédito, etc.
*   **Ritual de Reconciliación:**
    *   Función estrella para cuadrar las cuentas del usuario con sus estados de cuenta del mundo real.
    *   Las discrepancias se manejan a través de transacciones especiales temáticas como **"Fugas Etéreas"**.
*   **Análisis y Proyecciones:** Cálculo de gastos promedio, registro de ingresos y proyecciones financieras.

## 5. Capa de Gamificación: El Avatar Financiero

Para mejorar la experiencia y el compromiso del usuario, la app incluirá:
*   Un **avatar de mago en pixel art** que representa la salud financiera del usuario.
*   El avatar **evoluciona y se hace más fuerte o débil** basado en acciones financieras positivas (ahorrar, pagar deudas) o negativas (endeudarse, retirar ahorros).
*   El ritmo de progreso hacia las metas también influye en la apariencia del avatar (ej: un aura de poder si vas adelantado).

## 6. Concepto Visual y Temática

La interfaz de la aplicación seguirá un concepto visual claro y coherente:
*   **Tema Principal:** Un "modo oscuro" por defecto, con un tema claro opcional.
*   **Paleta de Colores:**
    *   **Morados:** Para acciones primarias y elementos "mágicos".
    *   **Verdes:** Para cifras positivas (ingresos, ahorros).
    *   **Rojos/Naranjas:** Para cifras negativas (deudas, gastos).
*   **Lenguaje Temático:** Se utilizará un lenguaje inspirado en la magia para funciones clave (ej: "Ritual de Reconciliación", "Fuga Etérea").
