//tela de login
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu email"
          placeholderTextColor="#F0F0F0"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}