import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import ResultCard from './ResultCard';
import {Dropdown} from '@components/Dropdown';
import Header from './Header';
import SearchListJson from '../../data/search-list.json';
import { useListView } from '@context';

const SearchResultScreen = ({navigation}) => {
  const [dropdownData, setDropdownData] = useState([
    {label: 'Jobs & Internships', value: 'job-internships'},
    {label: 'Mentorship', value: 'mentorship'},
  ]);
  const [data, setData] = useState([]);
  const {list, selectedValue, setList, setSelectedValue} = useListView();

  useEffect(() => {
    getData();
  }, []);

  const ResultCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => <ResultCard data={item} onItemPressed={item => setSelectedValue(item)} />}
      />
    );
  };

  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(resp.data);
      setList(SearchListJson)
    } else {
      console.log(resp);
    }
  };
  return (
    <View style={styles.container}>
      <Header heading={'Purchase History'} />
      <View style={styles.dropdownContainer}>
        <Dropdown
          data={dropdownData}
          onSelect={value => console.log('selected value:' + value)}
        />
      </View>
      <ResultCards />
    </View>
  );
};

export default SearchResultScreen;
