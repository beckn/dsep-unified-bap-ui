import Description from './Description';
import AboutCompany from './AboutCompany';
import React,{useState} from 'react';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useJobsInternshipsView} from '@context';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import { useEffect } from 'react';
import NavBar from '@components/Navbar';
import DetailHeader from '@components/DetailHeader';
import {Text} from '@components/Text';

const Jobs = ({navigation}: {navigation: Navigation}) => {
  const {setAboutCompany} = useJobsInternshipsView();
  const [data, setData]: any = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.POST,ENDPOINT.SELECT_JOBS,
    {
      "companyId": "1",
      "jobs": {
        "jobId": "1"
      },
      "context": {
        "transactionId": "a9aaecca-10b7-4d19-b640-b047a7c62195",
        "bppId": "affinidibpp.com",
        "bppUri": "http://affinidibpp.com/DSEP-nlb-d3ed9a3f85596080.elb.ap-south-1.amazonaws.com"
      }
    });
    if (resp?.status == 200) {
      console.log("check respone in jobs", JSON.stringify(resp.data))
      setData(resp?.data);
    } else {
      console.log(resp);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {(data == "")?(
        <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title="data not found please go back"   />
        // <Text>No Data found</Text>
      ):(
    <>
       <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title={data?.selectedJobs[0]?.role}  />
      <DetailHeader
        title={data?.company?.name}
        description={data?.selectedJobs[0]?.locations[0]?.city + ', ' +  data?.selectedJobs[0]?.locations[0]?.country}
        heading={data?.selectedJobs[0].employmentInformation.employmentInfo[0].value}
        time=""
      />
      <Tabs
        tabData={[
          {label: 'Description', comp: <Description navigation={navigation} data = {data}/>},
          {
            label: 'About Company',
            comp: <AboutCompany navigation={navigation} data = {data} />,
          },
        ]}
      />
    </>
    )}
    </SafeAreaView>
  );
};

export default Jobs;
