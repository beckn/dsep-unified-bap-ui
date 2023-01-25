import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import Description from '../screens/training/Description';

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
      <Tab.Screen
        name="Description"
        component={Description}
        options={{
          tabBarIcon: ({color}) => TabBarIcon({color, name: 'description'}),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
