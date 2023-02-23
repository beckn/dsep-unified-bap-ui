import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import {TrainingCard,SearchBox, Tabs} from '@components';
import Header from './Header';
import Loader from '@components/Loader/Loader';
import NoData from '@components/NoData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TrainingListScreen = ({navigation,route}) => {
  const [data, setData] = useState([]);
  const [context, setContext] = useState({});
  const [loader, setLoader] = useState(true);
  const {courseTitle} = route.params;

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
            renderItem={({item, index}) => <TrainingCard data={item} index={index} onPress ={ navigateToSlotList} />}
            contentContainerStyle={styles.listContainer}
          /> 
          </>):
          <NoData message={'No Data found'} />
      }
     

    </View>
  );
};

export default TrainingListScreen;