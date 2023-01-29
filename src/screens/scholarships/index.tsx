import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
const Scholarships = ({navigation}: {navigation: Navigation}) =>{
    return(
    <>
    <Header navigation={navigation} 
            heading="H.G. Infra Engineering..." 
            online={''} 
            video={''} 
            education='Undergraduate'
            rating={''}
    />
    <Tabs
        tabData={[
          {label: 'About Scholarship',comp : <AboutScholarship navigation={navigation} />},
          {label: 'Eligibility', comp : <Eligibility  navigation={navigation} />},
        ]}
      />
    </>
    )

}

export default Scholarships;