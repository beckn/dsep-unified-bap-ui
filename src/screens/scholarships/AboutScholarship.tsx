import React from 'react';
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
import Loader from '@components/Loader/Loader';


function AboutScholarship({navigation, data, loader}: {navigation: Navigation, data:any,loader: boolean}) {
  
  const onClickApply =() =>{
    navigation.navigate('ApplyScholorship',{
      selectData:data
    });
  }

  
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
     {loader && <Loader />}
        <Text style={styles.heading}>{'General Information'}</Text>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Name'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0].name}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Description'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0]?.description}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Type'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0]?.scholarshipDetails?.type}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Scheme Provider Name'}</Text>
                 <Text>{data?.scholarshipProviders?.[0].name}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Financial Year'}</Text>
                 <Text>{data?.year}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Scheme Amount'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0]?.amount?.amount}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Application Start Date'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0]?.scholarshipDetails?.applicationStartDate}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.card} >
                 <Text style={styles.heading}>{'Application End Date'}</Text>
                 <Text>{data?.scholarshipProviders?.[0]?.scholarships?.[0]?.scholarshipDetails?.applicationEndDate}</Text>
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
