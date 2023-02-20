import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';
import { useMentorContext } from '@context';
import { callService } from '@services/';
import { ApiMethods } from '@constant/common.constant';
import { ENDPOINT } from '@services/endpoints';

function AboutMentor({navigation}: {navigation: Navigation, data:any}) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
  getData();
}, []);

const {selectedMentorData,transactionId} = useMentorContext();

const getData = async () => {
  const resp = await callService(
    ApiMethods.POST,
    ENDPOINT.SELECT_MENTORSHIP,
    {
      "mentorshipId": selectedMentorData?.mentorshipId,
      "context": {
        "transactionId": transactionId,
        "bppId": "dev.elevate-apis.shikshalokam.org/bpp",
        "bppUri": "https://dev.elevate-apis.shikshalokam.org/bpp"
      }
    }
  );
  console.log('resp111', JSON.stringify(resp));
  if (resp?.status === 200) {
    setLoader(false);
    setData(resp.data.mentorshipProviders);
  } else {
    setLoader(false);
    console.log(resp?.message);
  }
};



  const onClickApply =() => {
    navigation.navigate("MentorAvailableDate")
  }
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{'About mentor'}</Text>
        <View style={styles.card} >
        <Spacer />
        {/* <Text>{data.mentorshipProvider?.mentorships[0].description}</Text> */}
        
        </View>
        <Spacer size={20}/>
     <Spacer />
     <Text style={styles.heading}>{'Other information'}</Text>
     <Spacer />
     <View style={styles.card} >
                 <Text style={styles.heading}>{'Professional experience '}</Text>
                 <Text>{}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Qualification'}</Text>
                 <Text>{}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Experience'}</Text>
                 <Text>{}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Total Meetings'}</Text>
                 <Text>{}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Specialist in'}</Text>
                 <Text>{}</Text>
                 </View>
                 <Spacer />
     <Spacer />
    </SafeAreaView>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       <Spacer size={10}/>
      </View> 
   </ScrollView>
  );
}


export default AboutMentor;
