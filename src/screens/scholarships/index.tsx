import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React from 'react';
import Header from '../training/Header';
const Tab = createMaterialTopTabNavigator();
const Scholarships = ({navigation}) =>{

    return(
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
      <Tab.Screen name="AboutScholarship" component={AboutScholarship}
       options={{}}
      />
      <Tab.Screen name="Eligibility" component={Eligibility} />
    </Tab.Navigator>
    </>
    )

}

export default Scholarships;