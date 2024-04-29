import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { CepResponse } from '../../interface/ICepResponse';
import { Container } from './styles';

import React, { useState } from 'react';

import HeaderLogo from '../../components/logo-header/HearderLogo';
import ShowCepAndStreet from '../../components/show-cep-street/ShowCepAndStreet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BtnReset from '../../components/btn-reset/BtnReset';
import PreferencesContext from '../../theme/preferencesContext';



function SearchRecents() {

  const { isThemeDark } = React.useContext(PreferencesContext)
  const homeBackGroundColor = isThemeDark ? '#21222c' : '#ffffff';

  const [historic, setHistoric] = useState<CepResponse[]>([]);


  useFocusEffect(
    React.useCallback(() => {
      const viewSearch = async () => {
        const jsonValue = await AsyncStorage.getItem('@tableceps');
        const historicValue: CepResponse[] = JSON.parse(jsonValue ? jsonValue : '[]')
        const uniqueHistoric = historicValue.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.cep === item.cep && t.street === item.street
          ))
        ).slice(0, 2);
        setHistoric(uniqueHistoric);
      };
      viewSearch();
    }, [])
  );

  const cepHistoricLength = historic.length
  return (
    <Container style={{ backgroundColor: homeBackGroundColor }}>
      <StatusBar style={isThemeDark ? 'dark' : 'light'} backgroundColor={homeBackGroundColor} />
      <HeaderLogo />
      {
        historic.length > 0 &&
        <>
          <BtnReset
            resetFunction={async () => {
              setHistoric([]);
              await AsyncStorage.removeItem('@tableceps');
            }}
           cepResponseLength={cepHistoricLength}
            />
          <ShowCepAndStreet cepResponse={historic} setCepResponse={setHistoric} />
        </>
      }

    </Container>
  );
}

export default SearchRecents;
