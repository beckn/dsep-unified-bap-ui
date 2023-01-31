import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import SuccessCard from '@components/SuccessCard';
import Button from '@components/Button';
import {Colors} from '@styles/colors';
import NavBar from '@components/Navbar';

const SlotBookedScreen = ({navigation}) => {
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

  return (
    <View style={styles.container}>
      <NavBar hasBackArrow = {false} hasRightIcon={false}/>
      <DetailHeader
        borderBottom={true}
        title="Mentor name"
        description="Frontend Architect | Founder - ABC company"
      />
      <SuccessCard
        title={'Yay!'}
        primaryText={'You have successfully booked a slot with your mentor!'}
      />
      <View style={styles.buttonContainer}>
        <Button title="show calendly link" />
        <Button
          title="go back to home"
          style={styles.goBackButton}
          labelStyle={{color: Colors.black}}
        />
      </View>
    </View>
  );
};

export default SlotBookedScreen;
