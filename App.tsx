import React,{useEffect,useState} from 'react';
import Routes from './src/route';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '@styles/commonStyles';
import {ListViewProvider, JobsInternshipsViewProvider, UserProfileDetailsProvider,MentorProvider, ReqContextProvider, userSkillView} from '@context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileCallService } from '@services/index';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import ErrorBoundary from 'react-native-error-boundary';

const App =()=> {
  const [initialRoute, setInitialRoute] = useState("");
  const [ profileInfo, setProfileInfo ] = useState(null);
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        const userEmail = await AsyncStorage.getItem('email');
        console.log('init email : ', userEmail)
        // setFirstName(fullName);
        // setEmail(userEmail);
        // setMobile(mobileNumber);

        if (userEmail) {
          await getProfileData(userEmail);
          
        }else{
          setInitialRoute('Login')
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  async function getProfileData(userEmail) {
    try {
      const response = await ProfileCallService(ApiMethods.GET, `${ENDPOINT.GET_USER_PROFILE}/${userEmail}`);
      if (response?.status === 200 && response?.data?._id) {
        const { data } = response;
        const updatedProfile = {
          firstName: data.first_name,
          lastName: data.last_name,
          email: userEmail,
          mobile: data.mobile,
          id: data._id,
          profileUrl: data.full_name,
        };

        const updatedProfileInfo = { profile: updatedProfile };
        setProfileInfo(updatedProfileInfo);
        console.log('this is profileinfo ', updatedProfileInfo)
        // navigation.navigate("Resume");
        setInitialRoute('Dashboard')
        
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } 
  }

  const errorHandler = (error: Error, stackTrace: string) => {
   console.log('ERROR OCCURED: ',error)
   console.log('ERROR OCCURED : stackTrace : ',stackTrace)
  }

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <ErrorBoundary onError={errorHandler}>
      <ListViewProvider>
        <MentorProvider>
        <JobsInternshipsViewProvider>
          <UserProfileDetailsProvider>
          <ReqContextProvider>
          {initialRoute && <Routes initialRoute={initialRoute} profileDetails={profileInfo} /> }
          </ReqContextProvider>
          </UserProfileDetailsProvider>
        </JobsInternshipsViewProvider>
        </MentorProvider>
      </ListViewProvider>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default App;
