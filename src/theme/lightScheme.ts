import { DefaultTheme } from 'react-native-paper';

const lightScheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryContainer: '#FFFFFF', 
    secondaryContainer: '#C3EAE5', 
    secondary: '#5DEBD7',
    tertiary: '#21222c', 
  },
};

export default lightScheme; 