import React from 'react'
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';

const ApplyScholorship = ({navigation}: {navigation: Navigation}) => {
    const onClickApply =() =>{
        navigation.navigate('Confirmation',{
          id:2,
          heading:'H.G. Infra Engineering Ltd Scholarship for Medical Courses',
          time: '',
          imgPara: 'Congratulations!',
          para1: 'Your scholarship application was submitted successfully!',
          para2: 'We will evaluate your application and respond as soon as possible.'
     
        });
      }
  return (
    <View>
      <Text>ApplyScholorship</Text>
      <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.inputStyle} />
      <TextInput placeholder="Address" style={styles.inputStyle} />
      <TextInput placeholder="Phone" style={styles.inputStyle} />
      <TextInput placeholder="Add information here" multiline numberOfLines={4} style={styles.inputStyleMultiLine} />
      <Button onPress={onClickApply} text={'Apply'} type="dark"/>
    </View>
    </View>
  )
}

export default ApplyScholorship