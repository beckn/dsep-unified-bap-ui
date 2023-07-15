import React,{useState} from 'react'
import {View, TextInput, ScrollView, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import Loader from '@components/Loader/Loader';
import NavBar from '@components/Navbar';


const ApplyScholorship = ({navigation, route}: {navigation: Navigation, route:any}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [loader, setLoader] = useState(false);
  const {selectData} = route.params;
  console.log("selcect data", JSON.stringify(selectData))
    const onClickApply = async() =>{
      console.log("selcect data", JSON.stringify(selectData))
      const arr = [name,address,phone,info]
      let formData = [];
      for (const [key, value] of Object.entries(arr)) {
        formData.push({
         "formInputKey": key,
         "formInputValue": value
        })
      }
      const request = {
        context:selectData.context,
        scholarshipProvider: {
          id: selectData.scholarshipProviders[0].id,
          name: selectData.scholarshipProviders[0].name,
          scholarships: [
              {
                  id: selectData.scholarshipProviders[0].scholarships[0].id,
                  name: selectData.scholarshipProviders[0].scholarships[0].name,
                  description: selectData.scholarshipProviders[0].description,
                  amount: selectData.scholarshipProviders[0].scholarships[0].amount,
                  "categoryId": "DSEP_CAT_1",
                  "scholarshipDetails": {
                      "id": selectData.scholarshipProviders[0].scholarships[0].scholarshipDetails.id,
                      "type": selectData.scholarshipProviders[0].scholarships[0].scholarshipDetails.type,
                      "applicationStartDate": selectData.scholarshipProviders[0].scholarships[0].scholarshipDetails.applicationStartDate,
                      "applicationEndDate": selectData.scholarshipProviders[0].scholarships[0].scholarshipDetails.applicationEndDate,
                      "supportContact": selectData.scholarshipProviders[0].scholarships[0].scholarshipDetails.supportContact,
                      "scholarshipRequestor": {
                          "name": name,
                          "phone": phone,
                          "address": address,
                          "needOfScholarship": info,
                          "docUrl": " http://abc.co/docs"
                      }
                  },
                  "additionalFormData": {
                      "formUrl": "https://proteanrc.centralindia.cloudapp.azure.com/dsep-bpp-1/public/getForm/a9aaecca-10b7-4d19-b640-022723112309/ba854d6184fa48eea36aab701486eee9",
                      "formMimeType": "text/html",
                      "submissionId": "8203501c-8934-468c-b947-1d5317847e9c",
                      "data": formData
                  },
                  "academicQualificationsCriteria": selectData.scholarshipProviders[0].scholarships[0].academicQualifications,
                  "finStatusCriteria": selectData.scholarshipProviders[0].scholarships[0].finStatusCriteria,
                  "benefits": selectData.scholarshipProviders[0].scholarships[0].benefits,
              }
          ]
      }
      };
      setLoader(true);
      console.log('request',request);
      
      const resp = await callService(ApiMethods.POST, ENDPOINT.SCHOLARSHIP_INIT, request);
        if (resp?.status === 200) {   
          setLoader(false)
          console.log('SCHOLARSHIP_INIT',resp?.data);
          
          // navigation.navigate('Confirmation',{
          //   id:2,
          //   heading:resp?.data?.scholarshipProvider.scholarships[0].name,
          //   time: resp?.data?.scholarshipProvider.scholarships[0].scholarshipDetails.applicationEndDate,
          //   imgPara: 'Congratulations!',
          //   para1: resp?.data?.scholarshipProvider.description,
          //   para2: 'We will evaluate your application and respond as soon as possible.'
       
          // });
           navigation.navigate('ScholarInit',{
            data: resp?.data
       
          });

        } else 
        {
            console.log(resp?.message);
        }
       
      }
  return (
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    {loader ? <Loader /> :  <View>
    <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false} title={selectData.scholarshipProviders[0].scholarships[0].name}  />
        
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