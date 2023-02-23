import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {ICONS, Text, SVGIcon} from '@components';
import Button from '@components/AppButton';
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import ResultCard from './ResultCard';
import {Modal, Portal, Provider} from 'react-native-paper';
import {Colors} from '@styles/colors';
import {Dropdown} from '@components/Dropdown';
import Header from './Header';
import SearchListJson from '../../data/search-list.json';
import {useListView,  userSkillView } from '@context';
import {ReqContextView} from '@context';
import {Navigation} from '@interfaces/commonInterfaces';
import NavBar from '@components/Navbar';
import Loader from '@components/Loader/Loader';
import NoData from '@components/NoData';

const SearchResultScreen = ({ navigation, route,}: { navigation: Navigation; route: any;}) => {
  const {searchData} = route.params;
  const [loader, setLoader] = useState(true);
  const [dropdownData, setDropdownData] = useState([
    {label: 'Jobs & Internships', value: 'job-internships'},
    {label: 'Mentorship', value: 'mentorship'},
  ]);
  const [data, setData] = useState();
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  const onFocus = () => alert('input pressed');
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: 400,
  };
  const {list, selectedValue, setList, setSelectedValue} = useListView();
  const {reqData,headerData, setreqData, setHeaderData} = ReqContextView();
  const { profileInfo} = userSkillView();
    let email = profileInfo.profile?.email
    console.log("page reloaded")
  const [savedState, setSavedState] = useState(true);

    const onButtonClick = async(item)=> {
        let req =  {
           "_id": profileInfo.profile?.id,
           "job_id": item?.jobs[0].jobId,
           "provider_id": item?.companyId,
           "application_id": item.applicationId,
           "role": item.jobs[0].role,
           "company": item.company.name,
           "city": item.jobs[0].locations[0].city,
           "data": "entire data item",
           ...data,
           "created_at": new Date()
         }
       // let a = 'test.user@gmail.com'
         console.log("check saved profile req", JSON.stringify(req))
       let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/job/'+email+'/save'
       console.log("check saved profile end", JSON.stringify(end))
         try {
         const resp = await ProfileCallService(ApiMethods.POST, end, req); 
         console.log("check saved profile respo", JSON.stringify(resp)) 
        
         getData();
         
         } catch (error) {
           
         }
         
    }
  const onClickApply = item => {
    setSelectedValue(item);
    console.log('check search screen', JSON.stringify(data));
    let reqdata1 = {
      context: data,
      companyId: item.company.id,
      jobs: {
        jobId: item.jobs[0].jobId,
      },
    };
    let userSavedItem = item.jobs[0].userSavedItem;
    let userAppliedItem = item.jobs[0].userAppliedItem;
    setHeaderData({"userSavedItem":userSavedItem, "userAppliedItem":userAppliedItem} )
    setreqData(reqdata1);
    console.log('check search screen', JSON.stringify(reqData));
    navigation.navigate('Jobs', {userSavedItem, userAppliedItem});
  };
  useEffect(() => {
    getData();
    if(list.length !=0){
      console.log('check list data', JSON.stringify(list[0]?.jobs[0].role));
    }
    
  }, []);
  const onPress = () => {
    showModal();
  };
  const ResultCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <ResultCard data={item}  onButtonClick={onButtonClick} onItemPressed={item => onClickApply(item)} />
        )}
      />
    );
  };

  const getData = async () => {
    console.log('searchData:::', JSON.stringify(searchData));
    setLoading(true);
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.SEARCH_JOBS,
      searchData,
    );
    console.log('resp:::::::', resp);
    if (resp?.status === 200) {
      //console.log("check search data", JSON.stringify(resp?.data.jobResults))
      
      setData(resp?.data.context);
      setList(resp?.data.jobResults);
      setLoading(false);
    } else {
      console.log(resp);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader />
      ) : list.length == undefined ? (
        <View>
          <NavBar
            hasBackArrow={true}
            hasRightIcon={false}
            hasSecondaryRightIcon={false}
            title=""
          />
          <NoData message={'No Data found'} />
        </View>
      ) : (
        <View>
          <Header
            navigation={navigation}
            heading={list[0]?.jobs[0].role}
            // {list[0]?.jobs[0]?.role}
            onPress={onPress}
            count={list.length}
          />

          <ResultCards />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchResultScreen;
