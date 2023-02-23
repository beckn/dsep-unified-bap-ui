import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { styles } from './styles';
import { ScholarshipCard, SearchBox, Tabs } from '@components';
import Header from './Header';
import {Navigation} from '@interfaces/commonInterfaces';
import Loader from '@components/Loader/Loader';
import NavBar from '@components/Navbar';
import NoData from '@components/NoData';
import {ReqContextView} from '@context';


const ScholarshipListScreen = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const { headerData,  setHeaderData} = ReqContextView();
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
        renderItem={({ item, index }) => <ScholarshipCard data={item} index={index} onPress={navigateToSlotList} />}
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

  const getData = async (data) => {
    console.log('scholortitle',scholortitle)
    const resp = await callService(ApiMethods.POST, ENDPOINT.GET_SCHOLARSHIPS,  scholortitle);
    if (resp?.status === 200) {
      setData(resp.data);
      console.log('ScholarshipListScreen',resp.data);
      
      setLoader(false)
    } else {
      console.log(resp?.message);
      setLoader(false)
    }
  };
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
