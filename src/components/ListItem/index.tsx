import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface ItemProps {
  data: {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
  }
}

export function ListItem({ data }: ItemProps) {
  return (
    <View style={styles.container}>
      <Text>Item da lista</Text>
    </View>
  )
}