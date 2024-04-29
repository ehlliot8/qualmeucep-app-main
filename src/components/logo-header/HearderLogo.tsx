import React from 'react'
import { StyleSheet, Image} from 'react-native';


function HeaderLogo()  {
  return (
       <Image
        style={styles.logo}
        source={{
          uri: "https://img.icons8.com/cotton/64/earth-planet--v1.png"
        }}
      />
  )
}

export default HeaderLogo;

const styles = StyleSheet.create({
  logo: {
    width:60,
    height:60,
    marginTop:50,
    justifyContent:'center'
  },
});
