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
import TrainingDescriptionJSON from '../../data/training-description.json';
import {ApiMethods} from '@constant/common.constant';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import Spacer from '@components/Spacer';

function Description({navigation}: {navigation: Navigation}) {
  const [data, setData]: any = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(TrainingDescriptionJSON);
    } else {
      console.log(resp);
    }
  };


  const onClickBuyNow =() =>{
    navigation.navigate("Debit")
  }

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Spacer />
        <Text style={styles.heading}>{'About thr Course'}</Text>
        <Spacer />
        <Text>{data.para1}</Text>
        <Spacer />      
        <Text>{data.para2}</Text>
        <Spacer /> 
        <Text style={styles.heading}>{'Course Highlights'}</Text>
        <Spacer />
        <FlatList 
         data={data.courses}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <View style={styles.dot}></View>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <Spacer />
        <Text style={styles.heading}>{'General Information'}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Duration'}</Text>
        <Text>{data.duration}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Language'}</Text>
        <Text>{data.language}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Number of enrollments'}</Text>
        <Text>{data.enrollments}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{data.specialization}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Course Creator'}</Text>
        <Text>{data.course}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Provider'}</Text>
        <Text>{data.provider}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Prerequisites'}</Text>
        <FlatList 
         data={data.prerequisites}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
       <Spacer />
        <Text style={styles.heading}>{'Eligibility'}</Text>
        <FlatList 
         data={data.eligibility}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
         <Spacer />
        <Text style={styles.heading}>{'Course Fees'}</Text>
        <Text>{data.fees}</Text>
      </View>  
      <View style={styles.bottom}>
       <Button onPress={onClickBuyNow} text={'Buy Now'} type="dark"/>
       <Spacer size={20}/>
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}


export default Description;
