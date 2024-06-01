import React from "react";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { ActivityIndicator, useTheme } from 'react-native-paper';
import * as Location from 'expo-location'

import useAsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CepResponse } from "../../interface/ICepResponse";
import Coordenadas from "../../interface/ICoordenadas";

import calcularParesDeLocalizacao from "../../../service/getCoords";
import { getCep } from "../../../service/getCepAndStreet";

import PreferencesContext from "../../theme/preferencesContext";

import { Container, ButtonStyled, ButtonText } from "./styles";
import darkScheme from "../../theme/darkScheme";
import lightScheme from "../../theme/lightScheme";


type Props = {
    setCepResponse: any,
    setText: any,
}


const BtnGetCep = (props: Props) => {

    const { colors } = useTheme();

    const [click, setClick] = useState(false);
    const [userLocation, setUserLocation] = useState<Coordenadas>();
    const [loading, setLoading] = useState(false);




    const stateClick = async () => {
        setClick(true);
        setLoading(true);
    };

    const handlerLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Para usar nosso recurso é necessário a permissão da sua localização')
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        const coordenadas: Coordenadas = { latitude, longitude };
        setUserLocation(coordenadas);
    };

    const handlerCep = async () => {
        if (userLocation) {
            const localizations = [];

            localizations.push(userLocation);

            localizations.push(...calcularParesDeLocalizacao(userLocation,5))
            localizations.push(...calcularParesDeLocalizacao(userLocation,10))
            localizations.push(...calcularParesDeLocalizacao(userLocation,15))
            localizations.push(...calcularParesDeLocalizacao(userLocation,20))
            localizations.push(...calcularParesDeLocalizacao(userLocation,25))

            const arr: CepResponse[] = [];
            for (const element of localizations) {
                const cepResponseResult = await getCep(element.latitude, element.longitude);
                if (cepResponseResult.erro === false) {
                    arr.push(cepResponseResult);
                }
            }

             
            const uniqueCepResponse = arr.filter((value, index, self) =>
                index === self.findIndex((t) => t.cep === value.cep)
            );
             
            props.setCepResponse(uniqueCepResponse);


            const jsonValue = await AsyncStorage.getItem('@tableceps') ?? '[]';


            let data = []
            try {
                data = JSON.parse(jsonValue)
                await useAsyncStorage.setItem('@tableceps', JSON.stringify([...uniqueCepResponse, ...data]));
            } catch (error) {

            }

        }
    };


    useEffect(() => {
        const fetchData = async () => {
            await handlerLocation();
            await handlerCep();
            setLoading(false);
            setClick(false);
        };

        fetchData();
    }, [click]);

    const { isThemeDark } = React.useContext(PreferencesContext);
    const buttonColor = isThemeDark  ? darkScheme.COLORS.BUTTON : lightScheme.COLORS.BUTTON;
    return (
        <Container>
            <ActivityIndicator animating={loading} color={colors.primary} />

            <ButtonStyled
                style={ { backgroundColor: buttonColor }}
                onPress={stateClick}
                > 
                <ButtonText>Buscar</ButtonText>
            </ButtonStyled>
        </Container>

    );
};


export default BtnGetCep;

