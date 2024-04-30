import React, { useContext } from 'react';
import { Switch as PaperSwitch } from 'react-native-paper';
import  PreferencesContext  from '../../theme/preferencesContext'; 
import darkScheme from '../../theme/darkScheme';
import lightScheme from '../../theme/lightScheme';
import { Container, Text } from './style';

const ThemeToggleButton = () => {


  const { isThemeDark, toggleTheme } = useContext(PreferencesContext);
  const [isSwitchOn, setIsSwitchOn] = React.useState(isThemeDark);

  
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme(); 
  };
  
  const themeTextStyle = {
    color: isThemeDark ? '#ffffff' : '#21222c',
  };
  const homeBackGroundColor = isThemeDark ? darkScheme.COLORS.BACKGROUND : lightScheme.COLORS.BACKGROUND;

  return (
    <Container style={{backgroundColor: homeBackGroundColor}} >
      <Text style={ themeTextStyle }>
        {isThemeDark ? 'Dark' : 'Light'}
      </Text>
      <PaperSwitch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </Container>
  );
};

export default ThemeToggleButton;