import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import PreferencesContext from '../theme/preferencesContext';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import DarkScheme from '../theme/darkScheme';
import LightScheme from '../theme/lightScheme';
import merge from 'deepmerge';
import { ThemeProvider } from 'styled-components/native';

export default function Routes() {
   
    const CombinedDefaultTheme = merge(LightScheme, NavigationDefaultTheme);
    const CombinedDarkTheme = merge(DarkScheme, NavigationDarkTheme);

    
    const [isThemeDark, setIsThemeDark] = React.useState(false);

   
    const toggleTheme = React.useCallback(() => {
        setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);

    
    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );


    const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

    return (
        <PreferencesContext.Provider value={preferences}>
            <ThemeProvider theme={theme} >
                <NavigationContainer theme={theme}>
                    <TabRoutes />
                </NavigationContainer>
            </ThemeProvider>
        </PreferencesContext.Provider>
    );
}
