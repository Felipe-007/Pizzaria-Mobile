import React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { api } from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'


type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder(){
  const route = useRoute<FinishOrderRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  async function hadleFinish() {
    try{
      await api.put('/order/send', {
        order_id: route.params?.order_id
      })

      navigation.popToTop(); //após finalizar volta para a tela inicial

    }catch(err){
      console.log("Erro ao finalizar.")
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.alert}>Finalizar pedido?</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={hadleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" size={20} color="1d1d2e" />
      </TouchableOpacity>
    </View>
  )
}