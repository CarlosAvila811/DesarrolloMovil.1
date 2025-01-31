import React from 'react';
import { View, Text } from 'react-native';

export default function SaludoComponent({nombre}) {
  return (
    <View>
      <Text>Saludando desde el componente hijo</Text>
      <text> </text>
     </View>
  );
}
