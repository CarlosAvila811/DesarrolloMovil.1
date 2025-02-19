
import React, { createContext, useState,ReactNode } from 'react';

interface ProveedorPedidoProps{
  children: ReactNode
}

interface Plato {
  id: number;
  nombre: string;
  precio: number;
}

interface ContextoPedido {
  menu: Plato[];
  pedidoActual: Plato[];
  platosEliminados: Plato[];
  agregarPlato: (plato: Plato) => void;
  quitarPlato: (id: number) => void;
  finalizarPedido: (nombreCliente: string, total: number) => void;
}

export const ContextoPedido = createContext<ContextoPedido>({
  menu: [],
  pedidoActual: [],
  platosEliminados: [],
  agregarPlato: () => {},
  quitarPlato: () => {},
  finalizarPedido: () => {},
});

export const ProveedorPedido: React.FC<ProveedorPedidoProps> = ({ children }) => {
  const [menu] = useState<Plato[]>([
    { id: 1, nombre: 'Pizza ', precio: 120 },
    { id: 2, nombre: 'Hamburguesa ', precio: 180 },
    { id: 3, nombre: 'Tortas', precio: 160 },
  ]);
  const [pedidoActual, setPedidoActual] = useState<Plato[]>([]);
  const [platosEliminados, setPlatosEliminados] = useState<Plato[]>([]);

  const agregarPlato = (plato: Plato) => {
    setPedidoActual([...pedidoActual, plato]);
  };

  const quitarPlato = (id: number) => {
    const plato = pedidoActual.find((p) => p.id === id);
    if (plato) {
      setPlatosEliminados([...platosEliminados, plato]);
      setPedidoActual(pedidoActual.filter((p) => p.id !== id));
    }
  };

  const finalizarPedido = (nombreCliente: string, total: number) => {
    setPedidoActual([]);
    alert(`Confirmacion {nombreCliente}. Total: {total}`);
  };

  return (
    <ContextoPedido.Provider value={{ menu, pedidoActual, platosEliminados, agregarPlato, quitarPlato, finalizarPedido }}>
      {children}
    </ContextoPedido.Provider>
  );
};