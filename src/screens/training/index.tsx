import Description from './Description';
import LessonPlan from './LessonPlan';
import React from 'react';
import Header from './Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';

const Training = ({navigation}: {navigation: Navigation}) => {
  return (
    <>
    <Header navigation={navigation} 
    heading='Design Thinking'
    online= 'online'
    video = 'video & lecture'
    education={""}
    rating={4.8}
    />
    <Tabs
        tabData={[
          {label: 'Description',comp : <Description navigation={navigation} />},
          {label: 'LessonPlan', comp : <LessonPlan  navigation={navigation} />},
        ]}
      />
    </>
  );
};
export default Training;
