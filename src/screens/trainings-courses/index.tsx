import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import {TrainingCard,SearchBox, Tabs} from '@components';
import Header from './Header';
import Loader from '@components/Loader/Loader';
import NoData from '@components/NoData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userSkillView } from '@context';


const TrainingListScreen = ({navigation,route}) => {
  const [data, setData] = useState([]);
  const [context, setContext] = useState({});
  const [loader, setLoader] = useState(true);
  const {courseTitle} = route.params;
  const { profileInfo} = userSkillView();
  let email = profileInfo.profile?.email
  useEffect(() => {
    getData();
  }, []);

  const navigateToSlotList = (trainingData) =>{
    // change the navigation here
     navigation.navigate("Training", {data:trainingData,context: context})
  }

  const getData = async () => {
    const email = await AsyncStorage.getItem("email");
    const resp = await callService(ApiMethods.POST, ENDPOINT.SEARCH_COURSE,{
      "loggedInUserEmail":email,
      "category": courseTitle
      }
    );
    console.log("resp223",JSON.stringify(resp))
    if (resp?.status === 200) {
      setContext(resp.data.context)
      setData(resp.data.courses);
      setLoader(false)
    } else {
      console.log(resp?.message);
      setLoader(false)
    }
  };




  const onButtonClick = async(item)=> {
    console.log('item------',item);
    setLoader(true)
    let req =  {
      "_id": profileInfo.profile?.id,
      "course_id": item.id,
      "provider_id": item?.provider.id,
      "application_id": null,
      "title": item.description,
      "duration": item?.duration,
      "courseUrl": "https://onlinecourses.swayam2.ac.in/cec23_cs02/preview",
      "data": "Response object from select api",
      "bpp_id": "bpp.dsep.samagra.i",
      "bpp_uri": "https://bpp.dsep.samagra.io",
      "transaction_id": "bdb5ba09-2241-4f00-b434-73466cd06228",
      "created_at": new Date()
     }
   // let a = 'test.user@gmail.com'
     console.log("check saved profile req", JSON.stringify(req))
   let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/course/'+email+'/save'
   console.log("check saved profile end", JSON.stringify(end))
     try {
     const resp = await ProfileCallService(ApiMethods.POST, end, req); 
     console.log("check saved profile respo", JSON.stringify(resp)) 
     setLoader(false);
    
     getData();
     
     } catch (error) {
       
     }
     
}





  return (
    <View style={styles.container}>
      {
        loader ? <Loader/> 
        : data.length > 0 ? (
          <>
        <Header navigation={navigation} 
        heading='Training & Courses'
        />
          <View style={styles.searchBoxContainer}>
            
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => <TrainingCard data={item} onButtonClick={(item)=>onButtonClick(item)} index={index} onPress ={ navigateToSlotList} />}
            contentContainerStyle={styles.listContainer}
          /> 
          </>):
          <NoData message={'No Data found'} />
      }
     

    </View>
  );
};

export default TrainingListScreen;