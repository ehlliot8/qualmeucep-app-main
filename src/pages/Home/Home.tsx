import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import BtnGetCep from '../../components/BtnGetCepAndStreet';
import { useState } from 'react';
import { CepResponse } from '../../interface/ICepResponse';

export default function Home() {
  const [cepResponse, setCepResponse] = useState<CepResponse[]>([]);
  return (
    <BtnGetCep setCepResponse={setCepResponse} setText={cepResponse} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
