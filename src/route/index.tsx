import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MentoringListScreen from '../screens/mentoring-list';
import Dashboard from './Dashboard';
import LessonPlan from '../screens/training/LessonPlan';
import Debit from '../screens/training/Debit';
import Confirmation from '../screens/training/Confirmation';

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
         <Stack.Screen
          name="LessonPlan"
          component={LessonPlan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Debit"
          component={Debit}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MentoringList" component={MentoringListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
