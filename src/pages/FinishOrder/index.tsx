import React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';


export default function FinishOrder(){
  return(
    <View style={styles.container}>
      <Text style={styles.alert}>Finalizar pedido?</Text>
      <Text style={styles.title}>Mesa 30</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="1d1d2e" />
      </TouchableOpacity>
    </View>
  )
}