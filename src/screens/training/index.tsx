import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Description from './Description';
import LessonPlan from './LessonPlan';
import React from 'react';
import Header from './Header';

const Tab = createMaterialTopTabNavigator();
const Training = ({navigation}:any) => {

  return (
    <>
     <Header navigation={navigation} />
   <Tab.Navigator  tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: 'gray',
            tabStyle: {
              backgroundColor: '#E5E5E5',
              borderTopWidth: 0.5,
              borderColor:'gray',
              opacity:0.6,
              
            },
            labelStyle: {
                borderColor:'gray',
              },
          }}
          swipeEnabled={false}
          >
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="LessonPlan" component={LessonPlan} />
    </Tab.Navigator>
    </>
  );
};
export default Training;
