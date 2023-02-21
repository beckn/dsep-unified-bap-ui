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
  const [loader, setLoader] = useState(true);
  const {dataFromSearch} = route.params;
  console.log('dataFromSearch',dataFromSearch);
  
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.POST,ENDPOINT.SCHOLARSHIP_SELECT,
      {
        scholarshipProviderId: dataFromSearch.scholarshipProviders[0].id,
        scholarshipId: dataFromSearch.scholarshipProviders[0].scholarships[0].id,
        scholarshipDetailsId: dataFromSearch.scholarshipProviders[0].scholarships[0].scholarshipDetails.id,
        context: {
          transactionId: "bdb5ba09-2241-4f00-b434-73466cd06228",
          bppId: "https://proteanrc.centralindia.cloudapp.azure.com/dsep-bpp-1",
          bppUri: "https://proteanrc.centralindia.cloudapp.azure.com/dsep-bpp-1/public"
        }
      }
    );
    if (resp?.status == 200) {
      setData(resp?.data);
      setLoader(false)
      console.log('resp?.data---Scholarships>>>', resp?.data)
    } else {
      console.log(resp);
      // setLoader(false)
      setLoader(true)
    }
  };
    return(
    <>
    <Header navigation={navigation} 
            heading={data?.scholarshipProviders[0].scholarships[0]?.name}
            
            //education={data?.scholarshipProviders[0]?.scholarships[0]?.category?.name}
           
    />
    <Tabs
        tabData={[
          {label: 'About Scholarship',comp : <AboutScholarship navigation={navigation} data = {data} loader={loader} />},
          {label: 'Eligibility', comp : <Eligibility  navigation={navigation} data = {data} loader={loader} />},
        ]}
      />
    </>
    )

}

export default Scholarships;