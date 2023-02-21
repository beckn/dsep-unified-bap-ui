import React,{useState} from 'react'
import {View, Text, TextInput, Alert, ScrollView, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import Loader from '@components/Loader/Loader';
const ApplyScholorship = ({navigation, route}: {navigation: Navigation, route:any}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [loader, setLoader] = useState(false);
  const {selectData} = route.params;
    const onClickApply = async() =>{
      const arr = [name,address,phone,info]
      let formData = [];
      for (const [key, value] of Object.entries(arr)) {
        formData.push({
         "formInputKey": key,
         "formInputValue": value
        })
      }
      const request = {...selectData}
      request.scholarshipProvider = selectData.scholarshipProviders[0];
      // category id is null... cant do anything
       request.scholarshipProvider.scholarships[0].categoryId = selectData.scholarshipProviders[0].scholarships[0].categories?.[0]?.id;
      delete request.scholarshipProvider.scholarships[0].category;
      request.scholarshipProvider.scholarships[0].scholarshipDetails.scholarshipRequestor = {name,address,phone,info}
      request.scholarshipProvider.scholarships[0].additionalFormData.submissionId="8203501c-8934-468c-b947-1d5317847e9a",
      request.scholarshipProvider.scholarships[0].additionalFormData.data = formData;
      delete request.scholarshipProviders;

      setLoader(true);
      const resp = await callService(ApiMethods.POST, ENDPOINT.SCHOLARSHIP_INIT, request);
        if (resp?.status === 200) {   
          setLoader(false)
          navigation.navigate("ConfirmScholarship", {data:resp?.data})
        } else 
        {
            console.log(resp?.message);
        }
       
      }
  return (
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    {loader ? <Loader /> :  <View>
         <Text>ApplyScholorship</Text>
         <View style={styles.container}>
         <TextInput onChangeText={(text)=>setName(text)} placeholder="Name" style={styles.inputStyle} />
         <TextInput onChangeText={(text)=>setAddress(text)} placeholder="Address" style={styles.inputStyle} />
         <TextInput onChangeText={(text)=>setPhone(text)} placeholder="Phone" style={styles.inputStyle} />
         <TextInput onChangeText={(text)=>setInfo(text)}  placeholder="Add information here" multiline numberOfLines={4} style={styles.inputStyleMultiLine} />
         <Button onPress={onClickApply} text={'Apply'} type="dark"/>
         </View>
         </View> }
     
      </SafeAreaView>
    </ScrollView>
  )
}

export default ApplyScholorship