import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Estudiante from './constexapi/Estudiantecontex';
import ListaEstudiantes from './Componentes/ListaEstudiantes';


export default function App() {
  return (
    <Estudiante>
      <SafeAreaView style={styles.container}>
        <ListaEstudiantes />
      </SafeAreaView>
      </Estudiante>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

