
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ContextoPedido } from '../context/PedidoContext';

export default function PantallaEliminados() {
  const { platosEliminados } = useContext(ContextoPedido);

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={platosEliminados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemEliminado}>
            <Text>{item.nombre} - {item.precio}</Text>
          </View>
        )}
      />
      <Text style={styles.totalEliminados}>Total eliminados: {platosEliminados.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  itemEliminado: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  totalEliminados: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
});