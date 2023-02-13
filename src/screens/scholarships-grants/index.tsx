import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import {ScholarshipCard,SearchBox, Tabs} from '@components';
import Header from './Header';

const ScholarshipListScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const navigateToSlotList = () =>{
    // change the navigation here
     navigation.navigate("Scholarships")
  }

  const ScholarshipList = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <ScholarshipCard data={item} index={index} onPress ={ navigateToSlotList} />}
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
    heading='Scholarships & Grants'
    />
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <Tabs
        tabData={[
          {label: 'Scholarships',comp : <ScholarshipList/>},
          {label: 'Grants', comp : <Demo/>},
        ]}
      />

    </View>
  );
};

export default ScholarshipListScreen;
