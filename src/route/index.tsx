import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MentoringListScreen from '../screens/mentoring-list';
import SlotBookedScreen from '../screens/mentor-slot-booked';
import Dashboard from './Dashboard';
import {ThemeProvider} from '@context';
import SlotListScreen from '../screens/mentor-slot-list';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MentoringList" component={MentoringListScreen} />
          <Stack.Screen name="MentorSlotConfirmation" component={SlotBookedScreen}   options={{headerShown: false}}/>
          <Stack.Screen name="MentorSlotList" component={SlotListScreen}   options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;
