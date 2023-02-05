import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';

function AboutCompany({navigation}: {navigation: Navigation}) {
  const onClickApply = () => {
    navigation.navigate('Confirmation', {
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
      <SafeAreaView style={styles.body}>
          <Text style={styles.heading}>{'About Company'}</Text>
          <Spacer size={20} />
          <Text>
            {
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n \n At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas .\n\n Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.'
            }
          </Text>
        <Spacer size={20} />
          <Text style={styles.heading}>{'Website '}</Text>
          <Spacer size={2}/>
          <Text>{'https://www.facebook.com'}</Text>
        
        <Spacer />
          <Text style={styles.heading}>{'Industry '}</Text>
          <Spacer size={2}/>
          <Text>{'Internet Product'}</Text>
        <Spacer size={10} />
          <Text style={styles.heading}>{'Employee Size '}</Text>
          <Spacer size={2}/>
          <Text>{'2000-3000 Employees'}</Text>
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
