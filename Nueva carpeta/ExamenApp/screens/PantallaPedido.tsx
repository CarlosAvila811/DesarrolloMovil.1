
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { ContextoPedido } from '../context/PedidoContext';

export default function PantallaPedido() {
  const { pedidoActual, quitarPlato, finalizarPedido } = useContext(ContextoPedido);
  const [nombreCliente, setNombreCliente] = useState('');

  const total = pedidoActual.reduce((sum, item) => sum + item.precio, 0);

  const confirmar = () => {
    if (!nombreCliente.trim()) {
      Alert.alert('Por favor, ingresa tu nombre.');
      return;
    }
    finalizarPedido(nombreCliente, total);
  };

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={pedidoActual}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemPedido}>
            <Text>{item.nombre} - {item.precio}</Text>
            <Button title="Quitar" onPress={() => quitarPlato(item.id)} />
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={nombreCliente}
        onChangeText={setNombreCliente}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <Button title="Confirmar Pedido" onPress={confirmar} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
  },
  itemPedido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});