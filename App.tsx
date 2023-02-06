import React from 'react';
import Routes from './src/route';
import {SafeAreaView} from 'react-native';
import {commonStyles} from '@styles/commonStyles';

export default function App() {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <Routes />
    </SafeAreaView>
  );
}
