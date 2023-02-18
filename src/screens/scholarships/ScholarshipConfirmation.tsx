import React,{useState} from 'react'
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import Header from '../scholarships-grants/Header';
const ScholarshipConfirmation = ({navigation, data}: {navigation: Navigation, data:any}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
    
  const onClickApply =async () =>{

    const resp = await callService(ApiMethods.POST, ENDPOINT.CONFIRM_SCHOLARSHIP, data);
      if (resp?.status === 200) {          
        navigation.navigate('Confirmation',{
          id:2,
          heading:resp?.data?.scholarshipProvider.scholarships[0].name,
          time: resp?.data?.scholarshipProvider.scholarships[0].scholarshipDetails.scholarshipStatus.updatedAt,
          imgPara: 'Congratulations!',
          para1: resp?.data?.scholarshipProvider.scholarships[0].scholarshipDetails.scholarshipStatus.description,
          para2: 'We will evaluate your application and respond as soon as possible.'
     
        });
      } else 
      {
        //   console.log(resp?.message);
      }
     
    }
  return (
    <View>
        <Header navigation={navigation}
        heading='Scholarship Confirmation'
      />
      <View style={styles.container}>
      <TextInput onChangeText={(text)=>setName(text)} placeholder="Name" style={styles.inputStyle} />
      <TextInput onChangeText={(text)=>setAddress(text)} placeholder="Address" style={styles.inputStyle} />
      <TextInput onChangeText={(text)=>setPhone(text)} placeholder="Phone" style={styles.inputStyle} />
      <TextInput onChangeText={(text)=>setInfo(text)}  placeholder="Add information here" multiline numberOfLines={4} style={styles.inputStyleMultiLine} />
      <Button onPress={onClickApply} text={'Apply'} type="dark"/>
    </View>
    </View>
  )
}

export default ScholarshipConfirmation;