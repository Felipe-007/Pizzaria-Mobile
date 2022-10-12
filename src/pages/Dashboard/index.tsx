import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

export default function Dashboard(){

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        placeholder="Número da mesa"
        placeholderTextColor="#F0F0F0"
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}