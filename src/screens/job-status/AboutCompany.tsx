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

function AboutCompany({ navigation , data, headerData }: { navigation: Navigation, data:any, headerData: any }) {

  const {aboutCompany:aboutCompanyTabDetails} = useJobsInternshipsView();
  const onClickApply = () => {
    const initContext = {
      "context": data.context,
      "companyId": data?.company?.id,
      "jobs": {
        "jobId": data?.confirmedJobs[0]?.jobId
      },
    }
  
    navigation.navigate('SubmitApplication', initContext);
  };
 return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>{'About Company'}</Text>
          <Spacer />
          <Text>{data?.confirmedJobs[0]?.description}</Text>
        </View>
        <Spacer  />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Website'}</Text>
          <Text>{data?.confirmedJobs[0]?.additionalDesc.url}</Text>
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
      <Button onPress={onClickApply} 
      disabled={true}
      text={data?.jobFulfillments? data?.jobFulfillments[0].jobStatus.status: "no status"} type="dark" 
      />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default AboutCompany;
