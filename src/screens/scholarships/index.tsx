import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React,{useState, useEffect} from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';

const Scholarships = ({navigation, route}: {navigation: Navigation, route: any}) =>{
  // console.log({navigation, searchData});
  const {data:searchData} = route.params;
  console.log({navigation, searchData});
  const [data, setData]: any = useState();
  useEffect(() => {
    getData();
  }, []);

  const request = {
    context:searchData.context,
    scholarshipProiderId:searchData.scholarshipProviders[0].id,
    scholarshipId:searchData.scholarshipProviders[0].scholarships[0].id,
    scholarshipDetailsId:searchData.scholarshipProviders[0].scholarships[0].scholarshipDetails.id
  }
  const getData = async () => {
    console.log("request", request);
    const resp = await callService(ApiMethods.POST,ENDPOINT.SCHOLARSHIP_SEARCH, request);
    if (resp?.status == 200) {
      setData(resp?.data);
      console.log('resp?.data--->>>', resp?.data)
    } else {
      console.log(resp);
    }
  };

  const onClickApply =async ()=> {
    navigation.navigate("ApplyScholorship",{data});
  }
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
          {label: 'About Scholarship',comp : <AboutScholarship navigation={navigation} data = {data} onClickApply = {onClickApply}/>},
          {label: 'Eligibility', comp : <Eligibility  navigation={navigation} data = {data} onClickApply = {onClickApply}/>},
        ]}
      />
    </>
    )

}

export default Scholarships;