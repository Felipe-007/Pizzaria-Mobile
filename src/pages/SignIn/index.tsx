//tela de login
import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (email === '' || password === '') {  //não faz nada se não tiver nada digitado
      return;
    }

    await signIn({ email, password })
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
          {loadingAuth ? (
            <ActivityIndicator size={25} color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}