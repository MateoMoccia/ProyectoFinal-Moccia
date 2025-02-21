import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambié la importación
import { StrictMode } from 'react';
import App from '/src/App';
import { CarritoProvider } from './Context/CarritoContext';

// Usamos createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </StrictMode>
);
