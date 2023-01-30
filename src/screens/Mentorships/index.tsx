import AboutMentor from './AboutMentor';
import AboutCompany from './AboutCompany';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
const Mentorships = ({navigation}: {navigation: Navigation}) =>{
    return(
    <>
    <Header navigation={navigation} 
            heading="Mentoring" 
            online={''} 
            video={''} 
            education=''
            rating={''}
    />
    <Tabs
        tabData={[
          {label: 'About Mentor',comp : <AboutMentor navigation={navigation} />},
        ]}
      />
    </>
    )

}

export default Mentorships;