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
    const onClickApply = async() =>{
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
                  "categoryId": "DSEP_CAT_2",
                  "scholarshipDetails": {
                      "id": "DSEP_FUL_01",
                      "type": "SCHOLARSHIP",
                      "applicationStartDate": "2013-02-04T22:44:30.652Z",
                      "applicationEndDate": "2013-02-04T22:44:30.652Z",
                      "supportContact": {
                          "name": "Mary G",
                          "phone": "9876543210",
                          "email": "maryg@xyz.com"
                      },
                      "scholarshipRequestor": {
                          "name": "James",
                          "phone": "498674",
                          "address": "Mumbai",
                          "needOfScholarship": "higher education",
                          "docUrl": " http://abc.co/docs"
                      }
                  },
                  "additionalFormData": {
                      "formUrl": "https://proteanrc.centralindia.cloudapp.azure.com/dsep-bpp-1/public/getForm/a9aaecca-10b7-4d19-b640-022723112309/ba854d6184fa48eea36aab701486eee9",
                      "formMimeType": "text/html",
                      "submissionId": "8203501c-8934-468c-b947-1d5317847e9a",
                      "data": formData
                  },
                  "academicQualificationsCriteria": selectData.scholarshipProviders[0].scholarships[0].academicQualifications,
                  "finStatusCriteria": [
                      {
                          "code": "family_income",
                          "name": "Family Income",
                          "value": "<= 2000000"
                      }
                  ],
                  "benefits": [
                      {
                          "code": "scholarship-amount",
                          "name": "Scholarship Amount",
                          "value": "Upto Rs.30000 per year"
                      }
                  ]
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