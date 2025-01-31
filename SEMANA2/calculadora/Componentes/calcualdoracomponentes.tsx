import React from 'react';
import { View, Text,TextInput,Button,StyleSheet } from 'react-native';
import { useState } from 'react';

interface calcualdoracomponentesprops{
   
}

export default function calcualdoracomponentes() {
    
    const CalcularComponent = ({ }: calcualdoracomponentesprops) => {
        const [a] = useState<string>('');
        const [b] = useState<string>('');
        const [operacion, setOperacion] = useState<number>(1);
        const [resultado, setResultado] = useState<number | string>('');
      
        const calcular = () => {
            const A = parseFloat(a);
            const B = parseFloat(b);
        
            if (A || B) {
              setResultado('Error: Valores no válidos');
              return;
            }
        
            switch (operacion) {
              case 1:
                setResultado(A + B);
                break;
              case 2:
                setResultado(A - B);
                break;
              case 3:
                setResultado(A * B);
                break;
              case 4:
                if (B !== 0) {
                    setResultado(A / B);
                } else {
                    setResultado('División por cero');
                }
                break;
              default:
                setResultado('Operación no válida');
            }
          };
  return (
    <View >
    <TextInput
     
      placeholder="Ingrese el valor de a"
      keyboardType="numeric"
      value={a}
      
    />
    <TextInput
      
      placeholder="Ingrese el valor de b"
      keyboardType="numeric"
      value={b}
      
    />
    <View>
      <Button title="Sumar (1)" onPress={() => setOperacion(1)} />
      <Button title="Restar (2)" onPress={() => setOperacion(2)} />
      <Button title="Multiplicar (3)" onPress={() => setOperacion(3)} />
      <Button title="Dividir (4)" onPress={() => setOperacion(4)} />
    </View>
    <Button title="Calcular" onPress={calcular} />
    <Text >Resultado: {resultado}</Text>
  </View>
);
};
}
