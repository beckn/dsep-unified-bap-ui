import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import MentoringListScreen from '../screens/mentoring-list';
import SlotBookedScreen from '../screens/mentor-slot-booked';
import Dashboard from './Dashboard';
import LessonPlan from '../screens/training/LessonPlan';
import Debit from '../screens/training/Debit';
import Confirmation from '../screens/training/Confirmation';
import Training from '../screens/training';
import AboutScholarship from '../screens/scholarships/AboutScholarship';
import Eligibility from '../screens/scholarships/Eligibility';
import Scholarships from '../screens/scholarships';
import {ThemeProvider} from '@context';
import SlotListScreen from '../screens/mentor-slot-list';
import DevScreen from '../screens/dev';
import SearchResultScreen from '../screens/search-result';
import SubmitApplication from '../screens/jobs/SubmitApplication';
import Mentorships from '../screens/Mentorships';
import JobConfirmation from '../screens/job-confirmation';
import ScholarshipListScreen from '../screens/scholarships-grants';
import Jobs from '../screens/jobs';
import Settings from '../screens/settings';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="DevScreen" component={DevScreen} />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MentoringList" component={MentoringListScreen} />
          <Stack.Screen
            name="MentorSlotConfirmation"
            component={SlotBookedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MentorSlotList"
            component={SlotListScreen}
            options={{headerShown: false}}
          />
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
            name="Scholarships"
            component={Scholarships}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Jobs"
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
          <Stack.Screen
            name="SearchResult"
            component={SearchResultScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubmitApplication"
            component={SubmitApplication}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="JobConfirmation"
            component={JobConfirmation}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="ScholarshipList"
            component={ScholarshipListScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Settings"
            component={Settings}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;
