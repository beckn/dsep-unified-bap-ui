import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React,{useState, useEffect} from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';

const Scholarships = ({navigation, route}: {navigation: Navigation, route:any}) =>{
  const [data, setData]: any = useState();
  const {name} = route.params;
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.POST,ENDPOINT.SCHOLARSHIP_SEARCH,
      {
        "name": name
      }
    );
    if (resp?.status == 200) {
      setData(resp?.data);
      console.log('resp?.data--->>>', resp?.data)
    } else {
      console.log(resp);
    }
  };
    return(
    <>
    <Header navigation={navigation} 
            heading={data?.scholarshipProviders[0].scholarships[0].name}
            online={''} 
            video={''} 
            education={data?.scholarshipProviders[0]?.scholarships[0]?.category.name}
            rating={''}
    />
    <Tabs
        tabData={[
          {label: 'About Scholarship',comp : <AboutScholarship navigation={navigation} data = {data} />},
          {label: 'Eligibility', comp : <Eligibility  navigation={navigation} data = {data} />},
        ]}
      />
    </>
    )

}

export default Scholarships;