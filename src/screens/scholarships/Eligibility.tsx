import Spacer from '@components/spacer';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '../../components/button';
import {styles}  from './styles';

const aboutEligibilityData = [
    {
      id: 1,
      heading: 'Qualification criteria :',
      value: 'Minimum 50% in Class 10, Minimum 50% in Class 12'
    },
    {
      id: 2,
      heading: 'Current Education : ',
      value: 'BAMS, BHMS, BUMS'
    },
    {
      id: 3,
      heading: 'Gender : ',
      value: "All Gender"
    },
    {
      id: 4,
      heading: 'Family Income criteria : ',
      value: "Family income is less than 500000.00"
    }
  ]

function Eligibility({navigation}) {

  const onClickBuyNow =(navigation) =>{
    navigation.navigate('Debit')
  }

  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
     <Text style={styles.heading}>{'Eligibility Criteria:'}</Text>
     <Spacer />
            <View style={{flexDirection:'row'}}>
            <View style={{ flexDirection:'row'}}>
            <View style={styles.dot}></View>
            <Text style={[styles.heading,styles.left]}>{'Qualification criteria :'} <Text style={[styles.params,styles.left]}>{'Minimum 50% in Class 10, One Minimum 50% in Class 12'}</Text></Text>
            </View>
          
          
          
            </View>
    </SafeAreaView>
   </ScrollView>
  );
}


export default Eligibility;
