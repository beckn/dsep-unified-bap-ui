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
import Loader from '@components/Loader/Loader';
import NoData from '@components/NoData';
import {View, } from 'react-native';
import { ReqContextView } from '@context';

const JobStatus = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const { reqData, setreqData, headerData, setHeaderData } = ReqContextView();
  const {setAboutCompany} = useJobsInternshipsView();
  
  const [data, setData]: any = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log("check req in jobs", JSON.stringify(reqData))
    const resp = await callService(ApiMethods.POST,ENDPOINT.JOB_STATUS,
    // {
    //   ...reqData
    // }
    {
      "applicationId": "1676631253211",
      "context": {
        "transactionId": "a9aaecca-10b7-4d19-b640-b047a7c62195",
        "bppId": "affinidi.com.bpp",
        "bppUri": "https://6vs8xnx5i7.execute-api.ap-south-1.amazonaws.com/dsep"
      }
    }
    );
    if (resp?.status == 200) {
      console.log("check respone in job status", JSON.stringify(resp.data.jobFulfillments[0]))
      setData(resp?.data);
       
      
      setLoader(false)  
    } else {
      setLoader(false)
      console.log(resp);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loader ? (
        <Loader />
      ) : ( (data == "")?(
        <View>
        <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title="No Data found"   />
        <NoData message= {"No Data found"} />
        </View> 
      ):(
    <>
       <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title={data?.confirmedJobs[0]?.role}  />
       <NavBar hasBackArrow={false} hasRightIcon = {false}  hasSecondaryRightIcon ={false} 
       title={data?.jobFulfillments? data?.jobFulfillments[0].jobStatus.status: "no status"}  />
       
      <DetailHeader
        title={data?.company?.name}
        description={data?.confirmedJobs[0]?.locations[0]?.city }
        // heading={data?.selectedJobs[0].employmentInformation.name
        //   //employmentInfo[0].value
        // }
        time=""
      />
      <Tabs
        tabData={[
          {label: 'Description', comp: <Description navigation={navigation}  data = {data} headerData = {headerData}   />},
          {
            label: 'About Company',
            comp: <AboutCompany navigation={navigation} data = {data} headerData = {headerData} />,
          },
        ]}
      />
    </>
    ) )
  }
    </SafeAreaView>
  );
};

export default JobStatus;
