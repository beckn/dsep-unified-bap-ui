import Tabs from '@components/tabs';
import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';


import {styles} from './styles';

const MentoringListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);

    if (resp.status === 200) {
      setData(resp.data);
    } else {
      console.log(resp.message);
    }
  };
  return (
    <View style={styles.container}>
      <Tabs
        tabData={[
          {label: "Tutoring", value: 1},
          {label: "Mentoring", value: 2},
        ]}
      />
    </View>
  );
};

export default MentoringListScreen;
