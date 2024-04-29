import React from 'react'
import { StyleSheet, Image} from 'react-native';
import { Logo } from './style';


function HeaderLogo()  {
  return (
       <Logo
        source={{
          uri: "https://img.icons8.com/cotton/64/earth-planet--v1.png"
        }}
      />
  )
}

export default HeaderLogo;


