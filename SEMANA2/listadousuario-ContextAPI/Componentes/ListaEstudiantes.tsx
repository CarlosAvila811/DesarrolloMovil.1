import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { alumnoContext } from '../constexapi/Estudiantecontex';

export default function StudentList() {
    const { estudiantes } = useContext(alumnoContext);

    return (
        
          <FlatList
            data={estudiantes}
            
            horizontal
            renderItem={({ item }) => (
                <View style={styles.item}>
                <Text>{item.nombre}</Text>
              </View>  
            
             
            )}
          />
        
      );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 20,
          paddingHorizontal: 10,
        },
        item: {
          padding: 30,
          fontSize: 40,
          height: 64,
        },
      });
    
   