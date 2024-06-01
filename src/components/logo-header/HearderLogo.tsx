import React from 'react'
import { Logo } from './style';
import { View } from 'react-native';


function HeaderLogo() {

  const logo = require('../../../layout/logo.png');
  return (
    <View style={{padding:10}}>
      <Logo
        source={logo}
      />
    </View>
  )
}

export default HeaderLogo;


