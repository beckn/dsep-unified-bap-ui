import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import images from '../../assets/images';
import { userSkillView } from '@context';


const WorkExperience = ({navigation}: {navigation: Navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [information, setInformation] = useState("");
  const [profile, setProfile] = useState("");
  const {experienceInfo, setExperienceInfo} = userSkillView();
  const onClickStartDate  =() =>{
    setModalVisible(!modalVisible)
  }
 const onClickEndDate = () =>{
  setEndModalVisible(!endModalVisible)
 } 
 const onClickApply =() =>{
  let workExperience = {companyName,startDate,endDate, information, profile}
  workExperience.companyName= companyName;
  workExperience.startDate= startDate;
  workExperience.endDate= endDate;
  workExperience.information=information;
  workExperience.profile = profile;
  let item = {workExperience}
  setExperienceInfo(item);
  navigation.navigate('Resume');
}
     
  return (
    <SafeAreaView>
    <View>
      <Text>WorkExperience</Text>
      <View style={styles.container}>
      <TextInput 
        placeholder="Software Engineering" 
        style={styles.inputStyle} 
        onChangeText ={(text)=>{setProfile(text)}}
        value={profile}
        
        />
      <TextInput 
        placeholder="Company Name" 
        style={styles.inputStyle} 
        onChangeText ={(text)=>{setCompanyName(text)}}
        value={companyName}
        
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
       multiline 
       numberOfLines={4} 
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

export default WorkExperience