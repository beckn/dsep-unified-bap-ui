import Tabs from '@components/Tabs';
import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import SearchBox from '@components/SearchBox';
import MentorCard from '@components/MentorCard';
import DetailHeader from '@components/DetailHeader';
import Header from './Header';
import ResultCard from './ResultCard';

const SearchResultScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const ResultCards = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <ResultCard data={item} index={index} />}
       
      /> 
    )
  }

  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(resp.data);
    } else {
      console.log(resp);
    }
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} 
    heading='UX Designer'
    />
  <ResultCards/>
    </View>
  );
};

export default SearchResultScreen;
