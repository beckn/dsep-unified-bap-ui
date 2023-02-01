import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';

function AboutMentor({navigation}: {navigation: Navigation}) {

  const onClickApply =() =>{
    navigation.navigate("Confirmation",{
      id:3,
      heading:'Mentor Name',
      time: '12/12/2022 , 1.30pm',
      imgPara: 'Yay!',
      para1: 'You have successfully booked a slot with your mentor!',
      para2: ""
    });
  }

  
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{'About mentor'}</Text>
        <View style={styles.card} >
        <Spacer />
        <Text>{'A technology leader with extensive experience in product development. I am passionate about building global innovative products that create value for businesses and consumers.'}</Text>
        <Spacer />
        <Text>{'A seasoned engineering architect with experience of leading and scaling teams across front-end, back-end, middleware, and DevOps. Empowering engineering teams through transparency and creativity.'}</Text>
        <Spacer />
        <Text>{'Constantly and consistently exploring how to better use new technologies to improve scalability, performance, and productivity.'}</Text>
        <Spacer />
        <Text>{'Please select the date and time that works best for you. Once you’ve selected your slot you will receive an invite with a Google Hangout link.'}</Text>
        <Spacer />
        <Text>{'Looking forward to meeting you :)'}</Text>
        </View>
        <Spacer size={20}/>
     <Spacer />
     <Text style={styles.heading}>{'Other information'}</Text>
     <Spacer />
     <View style={styles.card} >
                 <Text style={styles.heading}>{'Professional experience '}</Text>
                 <Text>{'Frontend Architect | Founder - ABC company'}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Qualification'}</Text>
                 <Text>{"M.E from IIT Delhi"}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Experience'}</Text>
                 <Text>{'13 Years'}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Total Meetings'}</Text>
                 <Text>{'200+'}</Text>
                 </View>
                 <Spacer />
                 <View style={styles.card} >
                 <Text style={styles.heading}>{'Specialist in'}</Text>
                 <Text>{'Frontend Technology'}</Text>
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
