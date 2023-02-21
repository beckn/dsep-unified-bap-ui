import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Spacer from '@components/Spacer';
import Loader from '@components/Loader/Loader';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';


function InitTraining({navigation, route}: {navigation: Navigation, route:any}) {
    const {data} = route.params;
    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState("")

    const onConfirmPress = async()=>{

        const request = {};
        request.context = data.context;
        request.courseId = data.course.id;
        request.CourseProviderId = data.course.provider.id;
        request.applicantProfile = {
            "name": "string",
                  "email": "string",
                  "contact": "string"
        }
        request.additionalFormData = {
            "submissionId": "8203501c-8934-468c-b947-1d5317847e9a",
                  "data": [
                    {
                      "formInputKey": "string",
                      "formInputValue": "string"
                    }
                  ]
        }
        setLoader(true);
        const resp = await callService(ApiMethods.POST,ENDPOINT.INIT_TRAINING,request);
  
          if (resp?.status == 200) {
            setLoader(false)
            setResponse(resp?.data);
            navigation.navigate('ConfirmTraining',{data: resp?.data,loader})
            console.log('resp?.data--->>>', resp?.data)
          } else {
            setLoader(false)
            console.log(resp);
          }
    }
  return (
   <ScrollView style={styles.container}>
     
     <SafeAreaView style={styles.container}>
     {loader ? <Loader />:
     <>
      <View style={styles.body}>
        <Spacer />
        <Text style={styles.heading}>{'About the Course'}</Text>
        <Spacer />
        <Text>{data?.course?.description}</Text>
       
        <Spacer />

        <Text style={styles.heading}>{'Duration'}</Text>
        <Text>{data?.course.duration}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Language'}</Text>
        <Text>{data?.language}</Text>
        <Spacer />

        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{data?.specialization}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Course Creator'}</Text>
        <Text>{data?.courseDetails?.instructors}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Course Fees'}</Text>
        <Text>{data?.courseDetails?.price}</Text>
      </View>  
      <View style={styles.bottom}>
       <Button onPress={onConfirmPress} text={'Init'} type="dark"/>
      </View> 
      </>
}
    </SafeAreaView>
   </ScrollView>
  );
}


export default InitTraining;
