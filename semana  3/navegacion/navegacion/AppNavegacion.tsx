import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import AddTodoScreen from '../home/addtodoscreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Agregar" component={AddTodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}