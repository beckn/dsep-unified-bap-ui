import React,{useState} from 'react'
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { callService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';

const ApplyScholorship = ({navigation}: {navigation: Navigation}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
    const data = {
      "context": {
        "transactionId": "bdb5ba09-2241-4f00-b434-73466cd06228",
        "bppId": "https://xyzbpp.com/",
        "bppUri": "https://api.xyzbpp.com/v0/"
      },
      "scholarshipApplicationId": "123456",
      "scholarshipProvider": {
        "id": "BX213573733",
        "name": "XYZ Education Foundation",
        "categoryId": "DSEP_CAT_1",
        "scholarships": [
          {
            "id": "SCM_00420068",
            "name": "XYZ Foundation Undergraduation scholarship",
            "description": "XYZ Foundation Undergraduation scholarship",
            "amount": {
              "amount": 30000,
              "currency": "INR"
            },
            "categoryId": "DSEP_CAT_1",
            "additionalForm": {
              "url": "https://api.example-bpp.com/getForm?id=t8923y4ryu328473y4",
              "urmimeTypel": "text/html",
              "submissionId": "jhg84n0jhs8"
            },
            "scholarshipDetails": {
              "id": "DSEP_FUL_01",
              "type": "SCHOLARSHIP",
              "scholarshipRequestor": {
                "id": "candidate_101",
                "name": name,
                "gender": "Female",
                "scholarshipRequestorContact": {
                  "address": address,
                  "addressFormat": "addressLine1|city|state"
                },
                "academicQualifications": [
                  {
                    "code": "gr",
                    "name": "Grade",
                    "value": "Grade 12"
                  },
                  {
                    "code": "percentage_grade",
                    "name": "Percentage/Grade",
                    "value": "75"
                  },
                  {
                    "code": "passing_year",
                    "name": "Passing Year",
                    "value": "2022"
                  }
                ],
                "currentEducations": [
                  {
                    "code": "ug",
                    "name": "Under Graduate",
                    "value": "BSc IT"
                  },
                  {
                    "code": "academic_year",
                    "name": "Academic Year",
                    "value": "2022-2023"
                  }
                ]
              }
            }
          }
        ]
      }
    }
    
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
            console.log(resp?.message);
        }
       
      }
  return (
    <View>
      <Text>ApplyScholorship</Text>
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

export default ApplyScholorship