import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import {TrainingCard,SearchBox, Tabs} from '@components';
import Header from './Header';

const TrainingListScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const navigateToSlotList = () =>{
    // change the navigation here
     navigation.navigate("MentorSlotList")
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
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(resp.data);
    } else {
      console.log(resp?.message);
    }
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} 
    heading='Training & Courses'
    />
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <Tabs
        tabData={[
          {label: 'Courses',comp : <TrainingList/>},
          {label: 'Trainings', comp : <Demo/>},
        ]}
      />

    </View>
  );
};

export default TrainingListScreen;