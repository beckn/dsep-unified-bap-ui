import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {SearchBox, Tabs, Text} from '@components';
import MentorCard from '@components/MentorCard';
import {callService} from '@services/index';
import {ApiMethods} from '@constant/common.constant';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import {getString} from '@i18n';

function AppliedScreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(resp.data);
    } else {
      console.log(resp?.message);
    }
  };

  const AppliedScholarships = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <MentorCard data={item} index={index} />}
        contentContainerStyle={styles.listContainer}
      />
    );
  };
  const GrantScholarships = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <MentorCard data={item} index={index} />}
        contentContainerStyle={styles.listContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <Tabs
        tabData={[
          {label: getString('Applied'), comp: <AppliedScholarships />},
          {label: getString('Grants'), comp: <GrantScholarships />},
        ]}
      />
    </View>
  );
}

export default AppliedScreen;
