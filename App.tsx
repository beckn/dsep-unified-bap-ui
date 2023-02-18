import React from 'react';
import Routes from './src/route';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '@styles/commonStyles';
import {ListViewProvider, JobsInternshipsViewProvider, UserProfileDetailsProvider,MentorProvider} from '@context';

export default function App() {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <ListViewProvider>
        <MentorProvider>
        <JobsInternshipsViewProvider>
          <UserProfileDetailsProvider>
          <Routes />
          </UserProfileDetailsProvider>
        </JobsInternshipsViewProvider>
        </MentorProvider>
      </ListViewProvider>
    </SafeAreaView>
  );
}
