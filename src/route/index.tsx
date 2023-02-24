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
import MentorAvailableDate from '../screens/mentor-available-date';
import SearchResultScreen from '../screens/search-result';
import SubmitApplication from '../screens/jobs/SubmitApplication';
import Mentorships from '../screens/Mentorships';
import JobConfirmation from '../screens/job-confirmation';
import ScholarshipListScreen from '../screens/scholarships-grants';
import Jobs from '../screens/jobs';
import ApplyScholorship from '../screens/scholarships/ApplyScholorship';
import {SafeAreaView} from 'react-native-safe-area-context';
import LocationSearch from '../screens/search-result/LocationSearch';
import SkillsSearch from '../screens/search-result/SkillsSearch';
import home from '../screens/home';
import WorkExperience from '../screens/profile/WorkExperience';
import Education from '../screens/profile/Education';
import JobStatus from '../screens/job-status';
import Settings from '../screens/settings';
import TrainingListScreen from '../screens/trainings-courses';
import ResumeScreen from '../screens/resume';
import SavedJobs from '../screens/saved-jobs';
import AddSkills from '../screens/profile/AddSkills';
import AddDegree from '../screens/profile/AddDegree';
import AddLanguage from '../screens/profile/AddLanguage';
import ProfileScreen from '../screens/profile';
import Notification from '../screens/notification';
import SampleProfile from '../screens/profile/SampleProfile';
import MentorshipConfirmScreen from '../screens/mentorship-confirmation';
import ConfirmApplication from '../screens/jobs/ConfirmApplication';
import InitTraining from '../screens/training/Init';
import ConfirmTraining from '../screens/training/Confirm';
import ScholarInit from '../screens/scholarships/ScholarInit';
import MentorshipStatus from '../screens/Mentorships/MentoringStatus';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <SafeAreaView style={{flex: 1}}>
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
         
          <Stack.Screen name="MentoringList" 
          component={MentoringListScreen}
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
          name="ApplyScholorship"
          component={ApplyScholorship}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Eligibility"
          component={Eligibility}
          options={{headerShown: false}}
        />
        
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
            name="MentorAvailableDate"
            component={MentorAvailableDate}
            options={{headerShown: false}}
          />

<Stack.Screen
              name="MentorshipConfirmation"
              component={MentorshipConfirmScreen}
              options={{headerShown: false}}
            />

<Stack.Screen
              name="MentorshipStatus"
              component={MentorshipStatus}
              options={{headerShown: false}}
            />

        
          <Stack.Screen
            name="SearchResult"
            component={SearchResultScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="LocationSearch"
            component={LocationSearch}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SkillsSearch"
            component={SkillsSearch}
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
            name="WorkExperience"
            component={WorkExperience}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Education"
            component={Education}
            options={{headerShown: false}}
            />
           <Stack.Screen
            name="Settings"
            component={Settings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddSkills"
            component={AddSkills}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddDegree"
            component={AddDegree}
            options={{headerShown: false}}
          />
            <Stack.Screen
           name="TrainingList"
            component={TrainingListScreen}
            options={{headerShown: false}}
            />
           <Stack.Screen
            name="Resume"
            component={ResumeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Language"
            component={AddLanguage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Mentorships"
            component={Mentorships}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="SampleProfile"
            component={SampleProfile}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ConfirmApplication"
            component={ConfirmApplication}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InitTraining"
            component={InitTraining}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="ConfirmTraining"
            component={ConfirmTraining}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScholarInit"
            component={ScholarInit}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="JobStatus"
            component={JobStatus}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaView>
  );
}

export default Routes;
