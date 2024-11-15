import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import Home from './screens/Home';
import Doacao from './screens/Doacao'; 
import Perfil from './screens/Perfil'; 

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#121212', 
          paddingBottom: 'auto',
          paddingTop: 'auto', 
        },
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Doar"
        component={Doacao}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="gift" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

