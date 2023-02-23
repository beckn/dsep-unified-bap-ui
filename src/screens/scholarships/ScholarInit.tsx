import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
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


function ScholarInit({navigation, route}: {navigation: Navigation, route:any}) {
    const {data} = route.params;
    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState("");
    console.log('ScholarInitdata',data);

    const onConfirmPress = async()=>{

        const request = {};
        request.context = data.context;
       request.scholarshipProvider = data.scholarshipProvider;
       console.log('requestScholarInit',request);
       
        setLoader(true);
        const resp = await callService(ApiMethods.POST,ENDPOINT.CONFIRM_SCHOLARSHIP,request);
  
          if (resp?.status == 200) {
            setLoader(false)
            setResponse(resp?.data);
            console.log('ScholarInitCongratulations:::-->>>',resp);
            navigation.navigate("Confirmation",{data: data,loader, id:1, imgPara: 'Congratulations!',
               para1: 'Your scholarship application was submitted successfully! ',
               para2: 'We will evaluate your application and respond as soon as possible.',
               heading : data?.scholarshipProvider?.name })
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
        <Text style={styles.heading}>{'Name'}</Text>
        <Spacer />
        <Text>{data?.scholarshipProvider?.name}</Text>
       
        <Spacer />

        <Text style={styles.heading}>{'Description'}</Text>
        <Text>{data?.scholarshipProvider?.description}</Text>
        <Spacer />

      </View>  
      <View style={styles.bottom}>
       <Button onPress={onConfirmPress} text={'Confirmation'} type="dark"/>
      </View> 
      </>
}
    </SafeAreaView>
   </ScrollView>
  );
}


export default ScholarInit;
