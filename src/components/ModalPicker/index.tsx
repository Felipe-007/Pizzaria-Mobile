//Mostra as opções a serem selecionadas na categoria
import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CategoryProps } from '../../pages/Order'

interface ModalPickerProps{
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectedItem: (item: CategoryProps) => void;
}

export function ModalPicker({ options, handleCloseModal, selectedItem }: ModalPickerProps){
  
  function onPressItem(item: CategoryProps){
    //console.log(item);
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity key={index} style={styles.option} onPress={ () => onPressItem(item) }>
      <Text style={styles.item}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  ))
  
  return(
    <TouchableOpacity onPress={handleCloseModal} style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}