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

function AboutMentor({navigation, data}: {navigation: Navigation, data:any}) {

  const onClickApply =() =>{
    navigation.navigate("MentorAvailableDate")
  }
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{'About mentor'}</Text>
        <View style={styles.card} >
        <Spacer />
        <Text>{data.mentorshipProvider?.mentorships[0].description}</Text>
        
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
