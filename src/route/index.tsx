import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MentoringListScreen from '../screens/mentoring-list';
import Dashboard from './Dashboard';
import LessonPlan from '../screens/training/LessonPlan';
import Debit from '../screens/training/Debit';
import Confirmation from '../screens/training/Confirmation';
import Training from '../screens/training';
import AboutScholarship from '../screens/scholarships/AboutScholarship';
import Eligibility from '../screens/scholarships/Eligibility';
import Scholarships from '../screens/scholarships';
import Jobs from '../screens/jobs';
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
         <Stack.Screen
          name="Training"
          component={Training}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name='Scholarships'
        component={Scholarships}
        options={{headerShown: false}}
        />
        <Stack.Screen 
        name='Jobs'
        component={Jobs}
        options={{headerShown: false}}
        />
         <Stack.Screen
          name="AboutScholarship"
          component={AboutScholarship}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Eligibility"
          component={Eligibility}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
