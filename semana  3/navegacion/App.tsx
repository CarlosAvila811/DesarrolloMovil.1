import React from 'react';
import TodoProvider from './context/TodoContext';
import AppNavigator from './navegacion/AppNavegacion';

export default function App() {
  return (
    <TodoProvider>
    <AppNavigator />
  </TodoProvider>
    
  )
}


