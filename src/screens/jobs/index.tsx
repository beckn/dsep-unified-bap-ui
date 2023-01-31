import Description from './Description';
import AboutCompany from './AboutCompany';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import { SafeAreaView } from 'react-native-safe-area-context';
const Jobs = ({navigation}: {navigation: Navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <>
      <Header
        navigation={navigation}
        heading="UX Designer"
        online={''}
        video={''}
        education="Senior Fulltime Remote"
        rating={''}
      />
      <Tabs
        tabData={[
          {label: 'Description', comp: <Description navigation={navigation} />},
          {
            label: 'About Company',
            comp: <AboutCompany navigation={navigation} />,
          },
        ]}
      />
    </>
    </SafeAreaView>
  );
};

export default Jobs;
