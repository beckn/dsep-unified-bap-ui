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
import Spacer from '@components/Spacer';

const JobConfirmation = ({navigation}) => {
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
      <NavBar hasBackArrow={true} hasRightIcon = {true} title={'UX Designer'} />
       <DetailHeader
        title="Facebook"
        description="Bangalore, India"
        heading="Senior Fulltime Remote"
        time="1 days"
      />
      <SuccessCard
        title={'Successful'}
        primaryText={'Congratulations, your application has been sent'}
      />
      <View style={styles.buttonContainer}>
        <Button title="BROWSE similar job" 
         style={styles.goBackButton}
         labelStyle={{color: Colors.black}}
        />
        <Spacer size={20}/>
        <Button
        onPress={()=>navigation.navigate('Dashboard')}
          title="go back to home"
        />
      </View>
    </View>
  );
};

export default JobConfirmation;
