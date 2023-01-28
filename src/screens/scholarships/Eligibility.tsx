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

function Eligibility({navigation}) {

  const onClickBuyNow =(navigation) =>{
    navigation.navigate('Debit')
  }

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
   </ScrollView>
  );
}


export default Eligibility;
