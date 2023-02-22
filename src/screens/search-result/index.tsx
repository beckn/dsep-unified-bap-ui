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
import { ReqContextView } from '@context';
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
  const [data, setData] = useState();
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  const onFocus = () => alert("input pressed");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', position: 'absolute', bottom: 0, height: 300, width: 400  };
  const {list, selectedValue, setList, setSelectedValue} = useListView();
  const { reqData, setreqData, headerData, setHeaderData } = ReqContextView();
  const onClickApply =(item) =>{
    setSelectedValue(item);
    console.log("check search screen", JSON.stringify(item))
    // reqData to be sent in request as parameter

    let reqdata1 =  {
      "context": data,
      "companyId": item.company.id,
      "jobs": {
        "jobId": item.jobs[0].jobId
      } 
    }
    setreqData(reqdata1);
    //header to show in all screens
    let header = {
      "role":item.jobs[0]?.role,
      "company": item.company?.name,
      "location": item.jobs[0]?.locations[0]?.city,
      "userSavedItem" : item.jobs[0].userSavedItem,
      "userAppliedItem" : item.jobs[0].userAppliedItem
    }
    setHeaderData(header)
    
    
    console.log("check search screen", JSON.stringify(reqData))
    navigation.navigate("Jobs");
  }
  useEffect(() => {
    getData();
    if(list.length !=0){
      setRole(list[0]?.jobs[0].role);
    console.log("check list data", JSON.stringify(list[0]?.jobs[0].role))  
  }else{

  }
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
    
    console.log("check search resp", JSON.stringify(searchData))
    const resp = await callService(ApiMethods.POST,ENDPOINT.SEARCH_JOBS, searchData);
    
    console.log("check search resp", JSON.stringify(resp))
    if (resp?.status === 200) {
       console.log("check search data", JSON.stringify(resp?.data.jobResults))
      
      setData(resp?.data.context);
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
     heading= {role}
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
