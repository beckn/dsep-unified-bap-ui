import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICONS, SVGIcon} from '@components';
import HomeScreen from '../screens/home';
import AppliedScreen from '../screens/applied';
import ProfileScreen from '../screens/profile';
import Description from '../screens/training/Description';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchResultScreen from '../screens/search-result';
import SavedJobs from '../screens/saved-jobs';
import AppliedJobs from '../screens/applied-jobs';
const Tab = createBottomTabNavigator();

const TabBarIcon = ({name, size}: {name: ICONS; size: number}) => (
  <SVGIcon name={name} width={size} height={size} />
);

export default function Dashboard() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => 
            TabBarIcon({name: ICONS.IC_HOME_ACTIVE, size}),
            headerShown: false
        }}
      />
      <Tab.Screen
        name="Applied"
        component={AppliedJobs}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_APPLIED, size}),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedJobs}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_SAVED, size}),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size}) => TabBarIcon({name: ICONS.IC_PROFILE, size}),
        }}
      />
      {/* <Tab.Screen
        name="Description"
        component={Description}
        options={{
          tabBarIcon: ({color}) => TabBarIcon({color, name: 'description'}),
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
    </SafeAreaView>
  );
}
