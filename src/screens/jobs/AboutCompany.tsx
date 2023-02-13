import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import { styles } from '../training/styles';
import Spacer from '@components/Spacer';
import { Navigation } from '@interfaces/commonInterfaces';
import { useJobsInternshipsView} from '@context';

function AboutCompany({ navigation , data }: { navigation: Navigation, data:any }) {

  const {aboutCompany:aboutCompanyTabDetails} = useJobsInternshipsView();
  const onClickApply = () => {
    navigation.navigate('SubmitApplication', {
      id: 2,
      heading: 'H.G. Infra Engineering Ltd Scholarship for Medical Courses',
      time: '',
      imgPara: 'Congratulations!',
      para1: 'Your scholarship application was submitted successfully!',
      para2:
        'We will evaluate your application and respond as soon as possible.',
    });
  };
 return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>{'About Company'}</Text>
          <Spacer />
          <Text>{data?.selectedJobs[0]?.description}</Text>
        </View>
        <Spacer  />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Website'}</Text>
          <Text>{data?.selectedJobs[0]?.additionalDesc.url}</Text>
        </View>
        <Spacer  />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Industry'}</Text>
          <Text>{data?.companyWebsiteDetails}</Text>
        </View>
        <Spacer  />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Employee size'}</Text>
          <Text>{data?.companySizeDetails}</Text>
        </View>
        <Spacer size={20} />
      </SafeAreaView>
      <View style={styles.bottom}>
        <Button onPress={onClickApply} text={'Apply'} type="dark" />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default AboutCompany;
