import { ThemeProvider, userSkillView } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Mentorships from '../screens/Mentorships';
import MentorshipStatus from '../screens/Mentorships/MentoringStatus';
import DevScreen from '../screens/dev';
import JobConfirmation from '../screens/job-confirmation';
import JobStatus from '../screens/job-status';
import Jobs from '../screens/jobs';
import ConfirmApplication from '../screens/jobs/ConfirmApplication';
import SubmitApplication from '../screens/jobs/SubmitApplication';
import LoginScreen from '../screens/login';
import MentorAvailableDate from '../screens/mentor-available-date';
import SlotBookedScreen from '../screens/mentor-slot-booked';
import SlotListScreen from '../screens/mentor-slot-list';
import MentoringListScreen from '../screens/mentoring-list';
import MentorshipConfirmScreen from '../screens/mentorship-confirmation';
import Notification from '../screens/notification';
import ProfileScreen from '../screens/profile';
import AddDegree from '../screens/profile/AddDegree';
import AddLanguage from '../screens/profile/AddLanguage';
import AddSkills from '../screens/profile/AddSkills';
import Education from '../screens/profile/Education';
import SampleProfile from '../screens/profile/SampleProfile';
import WorkExperience from '../screens/profile/WorkExperience';
import ResumeScreen from '../screens/resume';
import ScholarshipStatus from '../screens/scholarship-status';
import Scholarships from '../screens/scholarships';
import ScholarshipListScreen from '../screens/scholarships-grants';
import AboutScholarship from '../screens/scholarships/AboutScholarship';
import ApplyScholorship from '../screens/scholarships/ApplyScholorship';
import Eligibility from '../screens/scholarships/Eligibility';
import ScholarInit from '../screens/scholarships/ScholarInit';
import SearchResultScreen from '../screens/search-result';
import LocationSearch from '../screens/search-result/LocationSearch';
import SkillsSearch from '../screens/search-result/SkillsSearch';
import Settings from '../screens/settings';
import Training from '../screens/training';
import TrainingStatus from '../screens/training-status';
import ConfirmTraining from '../screens/training/Confirm';
import Confirmation from '../screens/training/Confirmation';
import Debit from '../screens/training/Debit';
import InitTraining from '../screens/training/Init';
import LessonPlan from '../screens/training/LessonPlan';
import TrainingListScreen from '../screens/trainings-courses';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();


const  Routes = ({initialRoute, profileDetails})=> {
  const {setProfileInfo } = userSkillView();
  console.log('routeeeee - > ', profileDetails)

  useEffect(()=>{
    setProfileInfo(profileDetails);

  },[profileDetails])

  return (
    <SafeAreaView style={{flex: 1}}>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute.toString()}>
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

          <Stack.Screen
            name="ScholarshipStatus"
            component={ScholarshipStatus}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TrainingStatus"
            component={TrainingStatus}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaView>
  );
}

export default Routes;
