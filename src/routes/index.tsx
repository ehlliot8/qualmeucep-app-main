import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import PreferencesContext from '../theme/preferencesContext';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import DarkScheme from '../theme/darkScheme';
import LightScheme from '../theme/lightScheme';
import merge from 'deepmerge';

export default function Routes() {
    // Combinando os temas padrão do react-native-paper com os temas personalizados
    const CombinedDefaultTheme = merge(LightScheme, NavigationDefaultTheme);
    const CombinedDarkTheme = merge(DarkScheme, NavigationDarkTheme);

    // Definindo o estado para o tema escuro ou claro
    const [isThemeDark, setIsThemeDark] = React.useState(false);

    // Função para alternar entre os temas
    const toggleTheme = React.useCallback(() => {
        setIsThemeDark(!isThemeDark);
    }, [isThemeDark]);

    // Contexto de preferências com o estado do tema e a função para alterná-lo
    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            isThemeDark,
        }),
        [toggleTheme, isThemeDark]
    );

    // Selecionando o tema com base no estado
    const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    <TabRoutes />
                </NavigationContainer>
            </PaperProvider>
        </PreferencesContext.Provider>
    );
}
