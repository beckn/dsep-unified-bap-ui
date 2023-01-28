import Tabs from '@components/Tabs';
import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import SearchBox from '@components/SearchBox';
import MentorCard from '@components/MentorCard';
import { Text } from '@components/Text';

const MentoringListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const Odd = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <MentorCard data={item} index={index} />}
        contentContainerStyle={styles.listContainer}
      /> 
    )
  }

  const Demo = () => {
    return (
      <View style={styles.demoContainer}>
        <Text>Demo</Text>
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
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <Tabs
        tabData={[
          {label: 'Tutoring',comp : <Odd/>},
          {label: 'Mentoring', comp : <Demo/>},
        ]}
      />

    </View>
  );
};

export default MentoringListScreen;
