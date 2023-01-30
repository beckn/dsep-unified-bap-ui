import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from '../training/styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Spacer from '@components/Spacer';

function AboutCompany({navigation}: {navigation: Navigation}) {


  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.spacer} />
        <Text style={styles.heading}>{'About Company'}</Text>
        <View style={styles.spacer} />
        <Text>{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}</Text>
       <Spacer />
       <Text>{'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas .'}</Text>
        <Spacer />
        <Text>{'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.'}</Text>
        <View style={styles.spacer} />  
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Website'}</Text>
        <Text>{'https://www.facebook.com'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Industry'}</Text>
        <Text>{'Internet product'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Employee sizee'}</Text>
        <Text>{'2000-3000 Employees'}</Text>
      </View>  
      <View style={[styles.bottom,{marginTop:60}]}>
       <Button onPress={()=>{}} text={'Apply Now'} type="dark"/>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}


export default AboutCompany;
