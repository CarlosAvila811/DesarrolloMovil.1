
import React, { createContext, useState, useEffect,ReactNode } from 'react';


type alumno = {
    nombre: string;
  };
  
  type alumnoContextType = {
    estudiantes: alumno[];
  };
  export const alumnoContext = createContext<alumnoContextType>({
    estudiantes: [],
  });
  export default function Estudiante({ children }: { children: ReactNode }) {
    const [estudiantes , setestudiantes] = useState<alumno[]>([]);
  
    useEffect(() => {
      
      const NombreEstudiantes: alumno[] = [
        {  nombre: 'Juan' },
        {  nombre: 'Luisa' },
        {  nombre: 'Jose' },
        {  nombre: 'Isabel' },
        {  nombre: 'Luis' },
        {  nombre: 'Andrea' },
        {  nombre: 'Pedro' },
        {  nombre: 'Laura' },
        {  nombre: 'Pablo' },
        {  nombre: 'Ariana' },
      ];
  
      setestudiantes(NombreEstudiantes);
  
     
      const tiempo = setTimeout(() => {
        const NombreApellidoEstudiantes: alumno[] = [
          {  nombre: 'Juan castro' },
          {  nombre: 'Luisa Espinoza' },
          {  nombre: 'Jose Martinez' },
          {  nombre: 'Isabel Carrasco' },
          {  nombre: 'Luis Palma' },
          {  nombre: 'Andrea Reyes' },
          {  nombre: 'Pedro Velazques' },
          {  nombre: 'Laura Espinal' },
          {  nombre: 'Pablo Avila' },
          {  nombre: 'Ariana Sevilla' },
        ];
  
        setestudiantes(NombreApellidoEstudiantes);
      }, 5000);
  
      return () => clearTimeout(tiempo); 
    }, []);
  
    return  (
        <alumnoContext.Provider value={{ estudiantes }}>
          {children}
        </alumnoContext.Provider>
      );
  }