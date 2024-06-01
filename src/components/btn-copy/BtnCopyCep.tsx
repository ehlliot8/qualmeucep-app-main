import React from 'react';
import { Alert, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  cep: string;
};

const BtnCopyCep = (props: Props) => {
  const handleCopyClick = () => {
    Clipboard.setString(props.cep);
    Alert.alert('Copiado com sucesso');
  }


  return (
    <View>
      <AntDesign name="copy1" size={24} color="black" onPress={handleCopyClick} />
    </View>
  );
};

export default BtnCopyCep;