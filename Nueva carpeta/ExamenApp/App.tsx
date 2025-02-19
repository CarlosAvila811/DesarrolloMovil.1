
import React from 'react';
import AppNavegacion from './AppNavegacion';
import { ProveedorPedido } from './context/pedidoContext';

export default function App() {
  return (
    <ProveedorPedido>
    <AppNavegacion />
  </ProveedorPedido>
  );
}
