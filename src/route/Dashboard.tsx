import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICONS, SVGIcon} from '@components';
import HomeScreen from '../screens/home';
import AppliedScreen from '../screens/applied';
import ProfileScreen from '../screens/profile';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({name, size}: {name: ICONS; size: number}) => (
  <SVGIcon name={name} width={size} height={size} />
);

export default function Dashboard() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size}) =>
            TabBarIcon({name: ICONS.IC_HOME_FILLED, size}),
        }}
      />
      <Tab.Screen
        name="Applied"
        component={AppliedScreen}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_APPLIED, size}),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_SAVED, size}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_PROFILE, size}),
        }}
      />
    </Tab.Navigator>
  );
}
