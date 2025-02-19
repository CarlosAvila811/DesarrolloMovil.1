
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { ContextoPedido } from '../context/PedidoContext';

export default function PantallaInicio({ navigation }: { navigation: any }) {
  const { menu, agregarPlato } = useContext(ContextoPedido);

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemMenu}>
            <Text style={styles.textoPlato}>{item.nombre} - {item.precio}</Text>
            <Button title="Añadir" onPress={() => agregarPlato(item)} />
          </View>
        )}
      />
      <Button title="Ver Pedido" onPress={() => navigation.navigate('Pedido')} />
      <Button title="Ver Eliminados" onPress={() => navigation.navigate('Eliminados')} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textoPlato: {
    fontSize: 16,
  },
});