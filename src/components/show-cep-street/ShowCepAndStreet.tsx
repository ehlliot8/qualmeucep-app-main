import React from 'react';
import { CepResponse } from '../../interface/ICepResponse';
import PreferencesContext from '../../theme/preferencesContext';
import BtnCopyeCep from '../btn-copy/BtnCopyedCep'; 

import { SecountContainer, TextInfo, ContainerInfo } from './styles';
import { View } from 'react-native';
type Props = {
    setCepResponse: any;
    cepResponse: CepResponse[];
};

const ShowCepAndStreet = (props: Props) => {

    const { isThemeDark } = React.useContext(PreferencesContext);
    const secountContainerBackground = isThemeDark ? '#98EECC' : '#98EECC';
    return (
        <SecountContainer style={ { backgroundColor: secountContainerBackground }}>
           
            {props.cepResponse.map((item, index) =>  ( 
                <ContainerInfo key={index} >
                
                    <View>
                        <TextInfo>{item.cep}</TextInfo>
                        <TextInfo numberOfLines={1} ellipsizeMode='tail'>{item.street}</TextInfo>
                    </View>

                    <View>
                        <BtnCopyeCep cep={item.cep} />
                    </View>
                </ContainerInfo>
            ))}
        </SecountContainer>
    );
};

export default ShowCepAndStreet;
