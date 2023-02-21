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

const TrainingListScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const navigateToSlotList = () =>{
    // change the navigation here
     navigation.navigate("Training")
  }

  const TrainingList = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <TrainingCard data={item} index={index} onPress ={ navigateToSlotList} />}
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

  const getData = async () => {
    console.log("in")
    const resp = await callService(ApiMethods.POST, ENDPOINT.SEARCH_COURSE,{
        "courseTrainer": "Prof. Madhavan Mukund",
        "providerInstitute": "IIT Delhi",
        "courseTitle": "Machine Learning",
        "courseState": "archived",
        "credits": "gt 1",
        "courseLanguage": "Hindi"
      }
    );
    console.log("resp223",JSON.stringify(resp))
    if (resp?.status === 200) {
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
            <SearchBox />
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