import React from 'react';
import config from '../../tamagui.config'
import { TamaguiProvider } from 'tamagui'
import { useColorScheme } from 'react-native'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import TabRoutes from './tab.routes';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';

import FormScreen from '../pages/FormScreen/FormScreen'


export default function Routes() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
        InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    })

    if (!loaded) {
        return null;
    }
    return (
        <TamaguiProvider config={config}>
            <ThemeProvider  value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <FormScreen />
                {/* <NavigationContainer  >
                    <TabRoutes />
                </NavigationContainer> */}
            </ThemeProvider>
        </TamaguiProvider>
    );
}
