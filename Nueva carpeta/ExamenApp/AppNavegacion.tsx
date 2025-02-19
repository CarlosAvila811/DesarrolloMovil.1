
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicio from './screens/PantallaInicio';
import PantallaPedido from './screens/PantallaPedido';
import PantallaEliminados from './screens/PantallaEliminados';

const Stack = createStackNavigator();

export default function NavegacionPrincipal() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={PantallaInicio} options={{ title: 'Menú Principal' }} />
        <Stack.Screen name="Pedido" component={PantallaPedido} options={{ title: 'Hacer Pedido' }} />
        <Stack.Screen name="Eliminados" component={PantallaEliminados} options={{ title: 'Platos Eliminados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

