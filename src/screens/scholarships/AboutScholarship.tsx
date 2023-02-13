import React,{useState, useEffect} from 'react';
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
import AboutScholarShipJSON from '../../data/about-scholarships.json';
import {ApiMethods} from '@constant/common.constant';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';

function AboutScholarship({navigation}: {navigation: Navigation}) {

  const [data, setData]: any = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(AboutScholarShipJSON);
    } else {
      console.log(resp);
    }
  };

  const onClickApply =() =>{
    navigation.navigate("Confirmation",{
      id:2,
      heading:'H.G. Infra Engineering Ltd Scholarship for Medical Courses',
      time: '',
      imgPara: 'Congratulations!',
      para1: 'Your scholarship application was submitted successfully!',
      para2: 'We will evaluate your application and respond as soon as possible.'
 
    });
  }

  
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>{'General Information'}</Text>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Name'}</Text>
                 <Text>{data.name}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Description'}</Text>
                 <Text>{data.description}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Type'}</Text>
                 <Text>{data.type}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Scheme Provider Name'}</Text>
                 <Text>{data.provider}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Financial Year'}</Text>
                 <Text>{data.year}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Scheme Amount'}</Text>
                 <Text>{data.amount}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Application Start Date'}</Text>
                 <Text>{data.startDate}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Application End Date'}</Text>
                 <Text>{data.endDate}</Text>
        </View>
        <Spacer size={20}/>
    </SafeAreaView>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       <Spacer size={10}/>
      </View> 
   </ScrollView>
  );
}


export default AboutScholarship;
