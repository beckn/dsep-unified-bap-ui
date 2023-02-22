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

const Jobs = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const { reqData, setreqData, headerData, setHeaderData } = ReqContextView();
  const {setAboutCompany} = useJobsInternshipsView();
  
  const [data, setData]: any = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log("check req in jobs", JSON.stringify(reqData))
    const resp = await callService(ApiMethods.POST,ENDPOINT.SELECT_JOBS,
    {
      ...reqData
    });
    if (resp?.status == 200) {
      console.log("check respone in jobs", JSON.stringify(resp.data))
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
       <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title={data?.selectedJobs[0]?.role}  />
      <DetailHeader
        title={data?.company?.name}
        description={data?.selectedJobs[0]?.locations[0]?.city }
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

export default Jobs;
