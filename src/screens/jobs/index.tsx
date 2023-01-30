import Description from './Description';
import AboutCompany from './AboutCompany';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
const Jobs = ({navigation}: {navigation: Navigation}) =>{
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
          {label: 'Description',comp : <Description navigation={navigation} />},
          {label: 'AboutCompany',comp : <AboutCompany navigation={navigation} />},
        ]}
      />
    </>
    )

}

export default Jobs;