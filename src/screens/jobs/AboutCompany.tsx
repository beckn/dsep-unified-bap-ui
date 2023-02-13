import React from 'react';
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

function AboutCompany({ navigation }: { navigation: Navigation }) {
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
  const { companyTabTitle, companyTabDetails, companyWebsiteTitle, companyWebsiteDetails,
     companyIndustryTitle, companyIndustryDetails,companySizeTitle, companySizeDetails } = aboutCompanyTabDetails[0];
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>{companyTabTitle}</Text>
          <Spacer size={20} />
          <Text>{companyTabDetails}</Text>
        </View>
        <Spacer size={20} />
        <View style={styles.card}>
          <Text style={styles.heading}>{companyWebsiteTitle}</Text>
          <Text>{companyWebsiteDetails}</Text>
        </View>
        <Spacer size={20} />
        <View style={styles.card}>
          <Text style={styles.heading}>{companyIndustryTitle}</Text>
          <Text>{companyIndustryDetails}</Text>
        </View>
        <Spacer size={20} />
        <View style={styles.card}>
          <Text style={styles.heading}>{companySizeTitle}</Text>
          <Text>{companySizeDetails}</Text>
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
