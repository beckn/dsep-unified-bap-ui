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
            tabStyle: {
              backgroundColor: '#E5E5E5',
              borderColor:'gray',
              opacity:0.6,
            },
              style: {
                elevation: 1,
              },
          }}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarIndicatorStyle: {backgroundColor:'#000000'}
          }}
          swipeEnabled={true}
          >
      <Tab.Screen name="Description" component={Description}
       options={{}}
      />
      <Tab.Screen name="LessonPlan" component={LessonPlan} />
    </Tab.Navigator>
    </>
  );
};
export default Training;
