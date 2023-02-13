import React from 'react';
import Routes from './src/route';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '@styles/commonStyles';
import {ListViewProvider, JobsInternshipsViewProvider} from '@context';

export default function App() {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <ListViewProvider>
        <JobsInternshipsViewProvider>
          <Routes />
        </JobsInternshipsViewProvider>
      </ListViewProvider>
    </SafeAreaView>
  );
}
