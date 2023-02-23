import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { callService, ProfileCallService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { styles } from './styles';
import { ScholarshipCard, SearchBox, Tabs } from '@components';
import Header from './Header';
import {Navigation} from '@interfaces/commonInterfaces';
import Loader from '@components/Loader/Loader';
import NavBar from '@components/Navbar';
import NoData from '@components/NoData';
import {ReqContextView, userSkillView} from '@context';


const ScholarshipListScreen = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [reqData, setReqData] = useState();
  const [providerId, setProviderId] = useState();
  const { headerData,  setHeaderData} = ReqContextView();
  const { profileInfo} = userSkillView();
  let email = profileInfo.profile?.email
  const { scholortitle } = route.params;
  console.log(scholortitle);
  const onSearch = (value: string) => {
    setSearch(value);

    const nextValue = {
      "name": value
    }
    getData(nextValue);
  }

  useEffect(() => {
    getData({});
  }, []);

  const getData = async (data) => {
    console.log('scholortitle',scholortitle)
    const resp = await callService(ApiMethods.POST, ENDPOINT.GET_SCHOLARSHIPS,  scholortitle);
    if (resp?.status === 200) {
      setData(resp.data);
      setReqData(resp?.data.context)
      setProviderId(resp?.data.scholarshipProviders[0].id)
      console.log('ScholarshipListScreen',JSON.stringify(resp.data));
      
      setLoader(false)
    } else {
      console.log(resp?.message);
      setLoader(false)
    }
  };

  const onButtonClick = async(item)=> {
    let req =  {
       "_id": profileInfo.profile?.id,
       "scholarship_id": item?.id,
       "provider_id": providerId,
       "fulfillment_id": "DSEP_FUL_58741445",
       "application_id": item.applicationId,
       "title": item?.name,
       "category": "DSEP_CAT_2",
       "data": "entire data item",
       ...reqData,
       "created_at": new Date()
     }
   // let a = 'test.user@gmail.com'
     console.log("check saved profile req", JSON.stringify(req))
   let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/scholarship/'+email+'/save'
   console.log("check saved profile end", JSON.stringify(end))
     try {
     const resp = await ProfileCallService(ApiMethods.POST, end, req); 
     console.log("check saved profile respo", JSON.stringify(resp)) 
    
     getData({});
     
     } catch (error) {
       
     }
     
}



  const navigateToSlotList = () => {
    // change the navigation here
    let userSavedItem = data?.scholarshipProviders[0]?.scholarships[0]?.userSavedItem;
    let userAppliedItem = data?.scholarshipProviders[0]?.scholarships[0]?.userAppliedItem;
    setHeaderData({"userSavedItem":userSavedItem, "userAppliedItem":userAppliedItem} )
    navigation.navigate("Scholarships",{dataFromSearch:data})
  }

  const ScholarshipList = () => {
    return (
      <FlatList
        data={data?.scholarshipProviders?.[0]?.scholarships}
        renderItem={({ item, index }) => 
        <ScholarshipCard data={item} index={index} onButtonClick={onButtonClick}  onPress={navigateToSlotList} />}
        contentContainerStyle={styles.listContainer}
      />
    )
  }

  const Demo = () => {
    return (
      <View>
      </View>
    )
  }

  
  return (
    <View style={styles.container}>
      {loader ? (<Loader />) : ((data == "" || data == null || data== undefined)?(
        <View>
        <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title="No Data found"   />
        <NoData message= {"No Data found"} />
        </View> 
      ):
      (<>
      <Header navigation={navigation}
        heading='Scholarships & Grants'
      />
      <View style={styles.searchBoxContainer}>
        {/* <SearchBox value={search} onSearch={onSearch} /> */}
      </View>
      <Tabs
        tabData={[
          { label: 'Scholarships', comp: <ScholarshipList /> },
          { label: 'Grants', comp: <Demo /> },
        ]}
      />
      </>)
      )}
     

    </View>
  );
};

export default ScholarshipListScreen;
