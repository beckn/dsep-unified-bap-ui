import Description from './Description';
import AboutCompany from './AboutCompany';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/tabs';
import {Navigation} from '@interfaces/commonInterfaces';
const Jobs = ({navigation}: {navigation: Navigation}) =>{
    return(
    <>
    <Header navigation={navigation} 
            heading="UX Designer" 
            online={''} 
            video={''} 
            education='Senior Fulltime Remote'
            rating={''}
    />
    <Tabs
        tabData={[
          {label: 'Description',comp : <Description navigation={navigation} />},
          {label: 'About Company', comp : <AboutCompany  navigation={navigation} />},
        ]}
      />
    </>
    )

}

export default Jobs;