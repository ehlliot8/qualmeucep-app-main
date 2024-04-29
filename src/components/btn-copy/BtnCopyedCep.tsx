import React from 'react';
import { Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard'; 

type Props = {
  cep: string;
};

const BtnCopyCep = (props: Props) => {
  const handleCopyClick = () => {
      Clipboard.setString(props.cep);
      Alert.alert('Copiado com sucesso');
    }
  

  return (
      <IconButton
        icon="content-copy"
        onPress={handleCopyClick}
        disabled={false}
      />
  );
};

export default BtnCopyCep;