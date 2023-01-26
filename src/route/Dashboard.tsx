import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({color, name}: {color: string; name: string}) => (
  <MaterialCommunityIcons name={name} color={color} size={26} />
);

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => TabBarIcon({color, name: 'home'}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => TabBarIcon({color, name: 'account'}),
        }}
      />
    </Tab.Navigator>
  );
}
