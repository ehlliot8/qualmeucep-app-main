import React from 'react';
import { CepResponse } from '../../interface/ICepResponse';
import PreferencesContext from '../../theme/preferencesContext';
import BtnCopyeCep from '../btn-copy/BtnCopyCep'; 

import { SecountContainer, TextInfo, ContainerInfo } from './styles';
import { View, Text} from 'react-native';
import darkScheme from '../../theme/darkScheme';
import lightScheme from '../../theme/lightScheme';
type Props = {
    setCepResponse: any;
    cepResponse: CepResponse[];
};

const ShowCepAndStreet = (props: Props) => {

    const { isThemeDark } = React.useContext(PreferencesContext);
    const secountContainerBackground = isThemeDark  ? darkScheme.COLORS.SECOUNT_CONTAINER : lightScheme.COLORS.SECOUNT_CONTAINER;
    return (
        <SecountContainer style={ { backgroundColor: secountContainerBackground }}>
           
            {props.cepResponse.map((item, index) =>  ( 
                <ContainerInfo key={index} >
                
                    <View>
                        <TextInfo>{item.cep}</TextInfo>
                        <Text numberOfLines={1} ellipsizeMode='tail'>{item.street}</Text>
                    </View>

                    <View style={{marginTop:10}}>
                        <BtnCopyeCep cep={item.cep} />
                    </View>
                </ContainerInfo>
            ))}
        </SecountContainer>
    );
};

export default ShowCepAndStreet;
