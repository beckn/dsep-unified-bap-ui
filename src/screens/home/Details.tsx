import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Description from './Description';
import Lesson from './Lesson';

const Tab = createMaterialTopTabNavigator();

const Details = () => {
  return (
    
      <Tab.Navigator>
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Lesson Plan" component={Lesson} />
    </Tab.Navigator>
    
    
  )
}

export default Details