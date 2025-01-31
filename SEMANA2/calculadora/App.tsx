import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import calcualdoracomponentes from './Componentes/calcualdoracomponentes';

export default function App() {

  
  return (
    <View>
    <calcualdoracomponentes/>
  </View>
    
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
