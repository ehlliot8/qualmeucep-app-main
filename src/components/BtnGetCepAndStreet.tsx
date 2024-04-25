import { useEffect, useState } from "react";
import  Coordenadas  from "../interface/ICoordenadas";
import  calcularParesDeLocalizacao  from "../../service/getCoords";
import { CepResponse } from "../interface/ICepResponse";
import { getCep } from "../../service/getCepAndStreet";
import { ActivityIndicator, Button, useTheme } from 'react-native-paper';
import * as Location from 'expo-location'
import { Alert, StyleSheet } from "react-native";
import useAsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from "@react-native-async-storage/async-storage";


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
            const localizations = calcularParesDeLocalizacao(userLocation);
            localizations.push(userLocation);

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

            
            const jsonValue = await AsyncStorage.getItem('@myData') ?? '';


            let data = []
            try {
                data = JSON.parse(jsonValue)
            } catch (error) {
                await useAsyncStorage.setItem('@myData', JSON.stringify([uniqueCepResponse, ...data]));

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


    return (
        <>
            <ActivityIndicator animating={loading} color={colors.primary} />
            
            <Button mode="contained-tonal" 
            style={[styles.btngetcep, { backgroundColor: colors.primary }]}
             onPress={stateClick}> Buscar
             </Button>
        </>
    );
};

const styles = StyleSheet.create({
    btngetcep: {
        marginBottom: '2%',
    },

});

export default BtnGetCep;

