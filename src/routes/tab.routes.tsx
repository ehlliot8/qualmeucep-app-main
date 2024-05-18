import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CreateAnnounceScreen from '../pages/CreateAnnounceScreen/CreateAnnounceScreen';
import MyAnnouncesScreen from '../pages/MyAnnouncesScreen/MyAnnouncesScreen';
import ExploreScreen from '../pages/ExploreScreen/ExploreScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();
export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Início'
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={size} />,
          tabBarLabel: 'Explorar'
        }}
      />
      <Tab.Screen
        name="CreateAnnounceScreen"
        component={CreateAnnounceScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus-square" color={color} size={size} />,
          tabBarLabel: 'Criar Anúncio'
        }}
      />
      <Tab.Screen
        name="MyAnnounceScreen"
        component={MyAnnouncesScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="folder" color={color} size={size} />,
          tabBarLabel: 'Meus Anúncios'
        }}
      />
    </Tab.Navigator>
  );
}