import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import { ICONS, Text, SVGIcon,  } from '@components';
import Button from '@components/AppButton';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import ResultCard from './ResultCard';
import { Modal, Portal,  Provider } from 'react-native-paper';
import { Colors } from '@styles/colors';
import {Dropdown} from '@components/Dropdown';
import Header from './Header';
import SearchListJson from '../../data/search-list.json';
import { useListView } from '@context';
import {Navigation} from '@interfaces/commonInterfaces';
import NavBar from '@components/Navbar';
import Loader from '@components/Loader/Loader';
import NoData from '@components/NoData';

const SearchResultScreen = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const { searchData } = route.params;
  const [loader, setLoader] = useState(true);
  const [dropdownData, setDropdownData] = useState([
    {label: 'Jobs & Internships', value: 'job-internships'},
    {label: 'Mentorship', value: 'mentorship'},
  ]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const onFocus = () => alert("input pressed");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', position: 'absolute', bottom: 0, height: 300, width: 400  };
  const {list, selectedValue, setList, setSelectedValue} = useListView();
  // console.log("checking list", JSON.stringify((list[0].jobs[0].jobId)))
  const onClickApply =(item) =>{
    setSelectedValue(item);
    let reqdata =  {
      "companyId": "1",
      "jobs": {
        "jobId": list?list[0].jobs[0].jobId : ""
      } 
    }
    navigation.navigate("Jobs", {reqdata});
  }
  useEffect(() => {
    getData();
    
  }, []);
  const onPress =() =>{
    showModal();
  }
  const ResultCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => <ResultCard data={item} onItemPressed={item => onClickApply(item)} />}
      />
    );
  };

  const getData = async () => {
    setLoading(true);
    const resp = await callService(ApiMethods.POST,ENDPOINT.SEARCH_JOBS, searchData);
    if (resp?.status === 200) {
      console.log("check search data", searchData)
      
      setData(resp?.data.jobResults);
      setList(resp?.data.jobResults)
      setLoading(false);
    } else {
       console.log(resp);
    }
  };
  return (
    <SafeAreaView  style={styles.container}>
      {loading?( 
        <Loader />
      ):((list.length == undefined)?(
        <View>
 <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title=""   />
 <NoData message= {"No Data found"} />
 </View> 
 ):(
    <View >
      <Header navigation={navigation} 
    heading='UX Designer'
    onPress={onPress}
    count = {list.length}
    />
   
  <ResultCards/>
   
        </View>
        ))}
    </SafeAreaView>
  );
};

export default SearchResultScreen;
