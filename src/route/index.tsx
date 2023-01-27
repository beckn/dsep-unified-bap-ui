import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MentoringListScreen from '../screens/mentoring-list';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MentoringList" component={MentoringListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
