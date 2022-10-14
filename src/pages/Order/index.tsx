import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  return (
    <View style={styles.container}>      
      <View style={styles.header}>
        <Text style={styles.title}>Mesa {route.params.number}</Text>
        <TouchableOpacity>
          <Feather name="trash-2" size={28} color="#FF3F4b" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={{ color: '#FFF' }}>Pizza de calabresa</Text>
      </TouchableOpacity>

      <View style={styles.qtdContainer}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          style={[styles.input, { width: '60%', textAlign: 'center' }]}
          placeholderTextColor="#F0F0F0"
          keyboardType="numeric"
          value="1"
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}