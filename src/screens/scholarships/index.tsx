import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
const Scholarships = ({navigation}: {navigation: Navigation}) =>{
    return(
    <>
    <Header navigation={navigation} />
    <Tabs
        tabData={[
          {label: 'AboutScholarship',comp : <AboutScholarship navigation={navigation} />},
          {label: 'Eligibility', comp : <Eligibility  navigation={navigation} />},
        ]}
      />
    </>
    )

}

export default Scholarships;