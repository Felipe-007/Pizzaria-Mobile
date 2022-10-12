import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackPramsList } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Dashboard(){

  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
  const [number, setNumber] = useState('');

  async function openOrder() {
    if(number === ''){
      return;
    }

    //precisa fazer a requisição e abrir a mesa e navegar para a proxima tela.
    navigation.navigate('Order', { number: number, order_id: 'dc1917e8-351b-4efc-baf4-279b0c569341' })
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        placeholder="Número da mesa"
        placeholderTextColor="#F0F0F0"
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}