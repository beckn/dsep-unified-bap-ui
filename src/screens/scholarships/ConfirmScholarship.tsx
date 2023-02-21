import React,{useState} from 'react'
import {View, Text, TextInput, Alert, ScrollView, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { callService, ProfileCallService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import Loader from '@components/Loader/Loader';
import Spacer from '@components/Spacer';
import { ReqContextView , userSkillView} from '@context';


const ConfirmScholarship = ({navigation, route}: {navigation: Navigation, route:any}) => {
    const {data} = route.params;
     console.log("data in confirm scholarship", data);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [response, setResponse] = useState("");
  const { reqData, setreqData } = ReqContextView();
  const {languages, skills, profileInfo} = userSkillView();
  const email = profileInfo.profile?.email ;



  const [loader, setLoader] = useState(false);
  const {selectData} = route.params;


    const AddItemToProfile = async (item) => {
        console.log("PROfile info 222", profileInfo,reqData,item,);
        
        let req = 
        {
           "_id": profileInfo.profile?.id,
           "scholarship_id": data?.scholarshipProvider?.scholarships?.[0]?.id,
           "provider_id": data?.scholarshipProvider.id ,
           "fulfillment_id": "DSEP_FUL_58741444",
           "application_id": item?.scholarshipApplicationId,
           "title": item?.scholarshipProvider?.scholarships?.[0]?.name,
           "category": item?.scholarshipProvider?.scholarships?.[0]?.categoryId,
           "data": item,
           "bpp_id": item.context.bppId,
           "bpp_uri": item.context.bppUri,
           "created_at": new Date()

         }
       let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/scholarship/'+email+'/applied'
         try {
         const resp = await ProfileCallService(ApiMethods.POST, end, req); 
         console.log("check saved profile respo", JSON.stringify(resp.data)) 
         navigation.navigate('Confirmation',{
              id:2,//resp?.data?.applicationId,
              heading:resp?.data?.course?.name,
              time: resp?.data?.course?.duration,
              imgPara: 'Successful',
              para1: 'Congratulations, your application has been sent',
            });
         } catch (error) {
           
         }
       
       }

      const onConfirmPress = async()=>{
        
        setLoader(true);
        const resp = await callService(ApiMethods.POST,ENDPOINT.CONFIRM_SCHOLARSHIP,data);
          if (resp?.status == 200) {
            setLoader(false)
            setResponse(resp?.data);
            AddItemToProfile(resp.data);
            // navigation.navigate("Confirmation",{
            //     id:2,//resp?.data?.applicationId,
            //     heading:resp?.data?.course?.name,
            //     time: resp?.data?.course?.duration,
            //     imgPara: 'Successful',
            //     para1: 'Congratulations, your application has been sent',
            //   })
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
       <Text style={styles.heading}>{'About'}</Text>
       <Spacer />
       <Text>{data?.scholarshipProvider?.scholarships?.[0]?.description}</Text>

       <Spacer />
       <Text style={styles.heading}>{'Start date'}</Text>
       <Text>{data?.scholarshipProvider?.scholarships?.[0]?.scholarshipDetails?.applicationStartDate}</Text>
       <Spacer />
       <Text style={styles.heading}>{'End date'}</Text>
       <Text>{data?.scholarshipProvider?.scholarships?.[0]?.scholarshipDetails?.applicationEndDate}</Text>
       <Spacer />

       <Text style={styles.heading}>{'Amount'}</Text>
       <Text>{data?.scholarshipProvider?.scholarships?.[0]?.amount?.amount}</Text>
     </View>  
     <View style={styles.bottom}>
      <Button onPress={onConfirmPress} text={'Confirm'} type="dark"/>
     </View> 
     </>
}
   </SafeAreaView>
  </ScrollView>
  )
}

export default ConfirmScholarship