import React from 'react'
import { Logo } from './style';


function HeaderLogo() {

  const logo = require('../../../layout/logo.png');
  return (
    <Logo
    source={logo}
    />
  )
}

export default HeaderLogo;


