import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import images from '../../assets/images';
import { userSkillView } from '@context';


const Education = ({navigation}: {navigation: Navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [collageName, setCollageName] = useState("");
  const [collageAddress, setCollageAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [information, setInformation] = useState("");
  const [education, setEducation] = useState("");
  const {educationInfo, setEducationInfo} = userSkillView();
    const onClickApply =() =>{
        let educationProfile = {collageName,collageAddress, startDate, endDate, information, education}
        educationProfile.collageName = collageName
        educationProfile.collageAddress = collageAddress
        educationProfile.startDate = startDate
        educationProfile.endDate = endDate
        educationProfile.information = information
        educationProfile.education = education
        let item = {educationProfile}
        console.log('----item>>>>', item);
        setEducationInfo(item);
        console.log("educationInfo-->>", educationInfo);
        navigation.navigate('Resume');
      }

     const onClickStartDate  =() =>{
        setModalVisible(!modalVisible)
      }
     const onClickEndDate = () =>{
      setEndModalVisible(!endModalVisible)
     } 
     
  return (
    <SafeAreaView>
    <View>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
      <Text>Education</Text>
      <View style={styles.container}>
      <TextInput 
        placeholder="Education B.tech or MCA"  
        style={styles.inputStyle} 
        value={education}
        onChangeText={(text)=>{setEducation(text)}}
        />
      <TextInput 
        placeholder="School or Collage"  
        style={styles.inputStyle} 
        value={collageName}
        onChangeText={(text)=>{setCollageName(text)}}
        />
      <TextInput 
         placeholder="Address" 
         style={styles.inputStyle} 
         value={collageAddress}
         onChangeText={(text)=>{setCollageAddress(text)}}
         />
      <View style={styles.calender}>
      <View style={styles.button}>
      <TouchableOpacity style={{ height: 50, padding: 10,borderWidth: 2, borderRadius: 5}}
      onPress={onClickStartDate}><Text>{startDate || 'Start Date'}</Text></TouchableOpacity></View>
      <View style={styles.button}>
      <TouchableOpacity style={{ height: 50, padding: 10, borderRadius: 5, borderWidth: 2}}
      onPress={onClickEndDate}><Text>{endDate || 'End Date'}</Text></TouchableOpacity></View>
      <Modal visible={modalVisible}>
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
        <Calendar 
         onDayPress={day => {
          console.log('selected day', day.dateString);
          setStartDate(day.dateString);
          setModalVisible(!modalVisible);
        }}
        
        />
      <TouchableOpacity onPress={()=>setModalVisible(false)}><Text>Close</Text></TouchableOpacity>
      </View></View>
      </Modal>
      <Modal visible={endModalVisible}>
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
        <Calendar 
         onDayPress={day => {
          console.log('selected day', day.dateString);
          setEndDate(day.dateString);
          setEndModalVisible(!endModalVisible);
        }}
        
        />
      <TouchableOpacity onPress={()=>setEndModalVisible(!endModalVisible)}><Text>Close</Text></TouchableOpacity>
      </View></View>
      </Modal>
      </View>
      <TextInput 
       placeholder="Add information here" 
       multiline numberOfLines={4} 
       style={styles.inputStyleMultiLine} 
       textAlignVertical={'top'}
       onChangeText={(text)=>{setInformation(text)}}
       value={information}
       />
      <Button onPress={onClickApply} text={'Apply'} type="dark"/>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Education