import React from 'react';
import Routes from './src/route';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '@styles/commonStyles';
import {ListViewProvider, JobsInternshipsViewProvider, UserProfileDetailsProvider,MentorProvider, ReqContextProvider} from '@context';

export default function App() {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <ListViewProvider>
        <MentorProvider>
        <JobsInternshipsViewProvider>
          <UserProfileDetailsProvider>
          <ReqContextProvider>
          <Routes />
          </ReqContextProvider>
          </UserProfileDetailsProvider>
        </JobsInternshipsViewProvider>
        </MentorProvider>
      </ListViewProvider>
    </SafeAreaView>
  );
}
