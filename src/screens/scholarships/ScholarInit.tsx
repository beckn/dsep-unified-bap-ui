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
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import { userSkillView } from '@context';

function ScholarInit({navigation, route}: {navigation: Navigation, route:any}) {
    const {data} = route.params;
    //console.log('requestScholarInit',JSON.stringify(data)); 
    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState("");
   // console.log('ScholarInitdata',data);
    const { profileInfo} = userSkillView();
    const email = profileInfo.profile?.email ;
   // console.log("check email", email)
    const AddItemToProfile = async (item) => {
      console.log("function call", (item?.scholarshipProvider.scholarships[0].id)) 
      console.log("check respo of confirm item ", JSON.stringify(item)) 
      let req =   
      {
         "_id": profileInfo.profile?.id,
         "scholarship_id": item?.scholarshipProvider.scholarships[0].id,
         "provider_id": item?.scholarshipProvider.id,
         "fulfillment_id": "DSEP_FUL_58741444",
         "application_id": item.scholarshipApplicationId,
         "title": item.scholarshipProvider?.name,
         "category": "DSEP_CAT_2",
         "data": "Response object from confirm api",
         "bpp_id": item.context.bppId,
         "bpp_uri": item.context.bppUri,
         "transaction_id": item.context.transactionId,
         "created_at": new Date()
       }
     
       console.log("check saved profile req", JSON.stringify(req))
     let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/scholarship/'+email+'/applied'
     console.log("check saved profile end", JSON.stringify(end))
       try {
       const resp = await ProfileCallService(ApiMethods.POST, end, req); 
       console.log("check saved profile respo", JSON.stringify(resp)) 
       navigation.navigate("Confirmation",{data: data,loader, id:1, imgPara: 'Congratulations!',
       para1: 'Your scholarship application was submitted successfully! ',
       para2: 'We will evaluate your application and respond as soon as possible.',
       heading : data?.scholarshipProvider?.name })
       } catch (error) {
         
       }
     
     }
    const onConfirmPress = async()=>{
        
      setLoader(true);
        const resp = await callService(ApiMethods.POST,ENDPOINT.CONFIRM_SCHOLARSHIP,data);
       // console.log('resp out side:::-->>>',JSON.stringify(resp));
          if (resp?.status == 200) {
          //  

            setResponse(resp?.data);
            if(resp.data.scholarshipApplicationId != ''){
              console.log("function call reaised")
              AddItemToProfile(resp.data);
             setLoader(false)
             
           }
            setLoader(false)
            
            //console.log('ScholarInitCongratulations:::-->>>',JSON.stringify(resp.data));
           
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
