import AboutScholarship from './AboutScholarship';
import Eligibility from './Eligibility';
import React,{useState, useEffect} from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import {ReqContextView} from '@context';
import { View } from 'react-native';
import Loader from '@components/Loader/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles}  from './styles';
import NavBar from '@components/Navbar';

const ScholarshipStatus = ({navigation, route}: {navigation: Navigation, route:any}) =>{
  const {reqData,headerData, setreqData, setHeaderData} = ReqContextView();
  const [data, setData]: any = useState();
  const [loader, setLoader] = useState(true);
  
  
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log('req?.data---Scholarshipship>>>', JSON.stringify(reqData))
    const resp = await callService(ApiMethods.POST,ENDPOINT.SCHOLARSHIP_STATUS,reqData);
    console.log('resp?.data---Scholarshipship>>>', JSON.stringify(resp?.data))
    if (resp?.status == 200) {
      setData(resp?.data);
      setLoader(false)
      console.log('resp?.data---Scholarshipship>>>', JSON.stringify(resp?.data))
    } else {
      console.log(resp);
      // setLoader(false)
      setLoader(true)
    }
  };
    return(
   <SafeAreaView style={styles.container}>
    {loader ? (
        <Loader />
      ) : (data == "")?(<View></View>) : (
      <View style={styles.container2}>
    {/* <Header navigation={navigation}  heading={data?.scholarshipProviders[0]?.scholarships[0]?.name} /> */}
    <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title={data?.scholarshipProviders[0]?.scholarships[0]?.name}  />
    <NavBar hasBackArrow={false} hasRightIcon = {false}  hasSecondaryRightIcon ={false} 
       title=  {data?.scholarshipProviders[0].scholarships? data?.scholarshipProviders[0]?.scholarships[0]?.scholarshipDetails.scholarshipStatus.code: "no status"}  />
    <Tabs
     tabData={[
          {label: 'About Scholarship',comp : <AboutScholarship navigation={navigation} data = {data} loader={loader} />},
          {label: 'Eligibility',  comp : <View></View>
          // <Eligibility  navigation={navigation} data = {data} loader={loader} />
        },
        ]}
      />
      </View>
    
      )  }
      </SafeAreaView>
    )

}

export default ScholarshipStatus;