import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import { useState } from 'react';
import { CepResponse } from '../../interface/ICepResponse';


import React from 'react';

import PreferencesContext from '../../theme/preferencesContext';
import ShowCepAndStreet from '../../components/show-cep-street/ShowCepAndStreet';
import HeaderLogo from '../../components/logo-header/HearderLogo';
import BtnGetCep from '../../components/btn-get/BtnGetCepAndStreet';
import BtnReset from '../../components/btn-reset/BtnReset';
import darkScheme from '../../theme/darkScheme';
import lightScheme from '../../theme/lightScheme';
export default function Home() {

  const { isThemeDark } = React.useContext(PreferencesContext)
  
  const homeBackGroundColor = isThemeDark ? darkScheme.COLORS.BACKGROUND : lightScheme.COLORS.BACKGROUND;

  const [cepResponse, setCepResponse] = useState<CepResponse[]>([]);


  const uniqueResponse = cepResponse.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t.cep === item.cep && t.street === item.street
    ))
  ).slice(0, 2);

  const cepResponseLength = cepResponse.length;
  return (
    <Container style={{ backgroundColor: homeBackGroundColor}}>

      <HeaderLogo />

       <BtnReset
        resetFunction={async () => {
          setCepResponse([]);
        }} 
        cepResponseLength={cepResponseLength}
      />

      <ShowCepAndStreet cepResponse={uniqueResponse} setCepResponse={setCepResponse} />
      <BtnGetCep setCepResponse={setCepResponse} setText={uniqueResponse} />
        
      <StatusBar style="auto" />

    </Container>
  );
}


