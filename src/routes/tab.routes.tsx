import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { PreferencesContext } from '../theme/preferencesContext'; // Importe o contexto de preferências
import ThemeToggleButton from '../components/ThemeToggleButton'; // Importe o componente ThemeToggleButton
import SearchRecent from '../pages/SearchRecent/SearchRecent';
import Home from '../pages/Home/Home';

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="SearchRecent"
        component={SearchRecent}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="list" color={color} size={size} />,
          tabBarLabel: 'Buscas'
        }}
      />
      <Tab.Screen
        name="ThemeToggleButton"
        component={ThemeToggleButton}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />,
          tabBarLabel: 'Configuração'
        }}
      />
    </Tab.Navigator>
  );
}