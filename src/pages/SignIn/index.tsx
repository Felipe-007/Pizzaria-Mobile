//tela de login
import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(){
    if(email === '' || password === ''){  //não faz nada se não tiver nada digitado
      return;
    }

    console.log('Dados digitados: ' + email)
  }

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
          value={email}
          onChangeText={setEmail}  //passa para o setEmail oq for digitado
        />

        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          placeholderTextColor="#F0F0F0"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}  //passa para o setPassword oq for digitado
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}