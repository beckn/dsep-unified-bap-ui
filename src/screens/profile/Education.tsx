import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity, Image, ScrollView  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { styles } from './styles';
import { Navigation } from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import images from '../../assets/images';
import { userSkillView } from '@context';
import DatePicker from 'react-native-date-picker'
import DatePickerButton from '@components/Datepicker';
import Spacer from '@components/Spacer';
import Input from '@components/Input';
import { Colors } from '@styles/colors';

const Education = ({route, navigation }: {route: any, navigation: Navigation }) => {
  const navParam = route?.params?.education?.educationProfile;
  const [modalVisible, setModalVisible] = useState(false);
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [collageName, setCollageName] = useState(navParam?.collageName || "");
  const [collageAddress, setCollageAddress] = useState(navParam?.collegeAddress || "");
  const [startDate, setStartDate] = useState(navParam?.startDate || new Date())
  const [endDate, setEndDate] = useState(navParam?.endDate || new Date())
  const [information, setInformation] = useState(navParam?.information || "");
  const [education, setEducation] = useState(navParam?.education || "");
  const { educationInfo, setEducationInfo } = userSkillView();

  const onClickApply = async () => {
    let educationProfile = { collageName, collageAddress, startDate, endDate, information, education}
    educationProfile.collageName = collageName
    educationProfile.collageAddress = collageAddress
    educationProfile.startDate = formatDate(new Date(startDate))
    educationProfile.endDate = formatDate(new Date(endDate))
    educationProfile.information = information
    educationProfile.education = education
    educationProfile.localId = Math.floor(100000 + Math.random() * 900000);
    let item = { educationProfile }
    if(navParam && Object.keys(navParam)?.length){
      const currentEduIndex = educationInfo.findIndex((edu)=>edu.educationProfile.localId === navParam?.localId)
      educationInfo[currentEduIndex] = item
      setEducationInfo(educationInfo);
      await AsyncStorage.setItem('educationInfo',JSON.stringify(educationInfo))
    }else{
      setEducationInfo([...educationInfo,item]);
        await AsyncStorage.setItem('educationInfo',JSON.stringify([...educationInfo,item]))
    }
    navigation.goBack();

  }

  const onClickStartDate = () => {
    setModalVisible(!modalVisible)
  }
  const onClickEndDate = () => {
    setEndModalVisible(!endModalVisible)
  }

  function padTo2Digits(num: Number) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date: Date) {
    return [
      date?.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: Colors.white}}>
       <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
      <View >
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <View style={styles.titlePosition}>
            <Image source={images.leftArrow} />
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Add Education </Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.container,{marginTop:30}]}>
          <Input
            label={'Level of education'}
            placeholder="Education B.Tech or MCA"
            value={education}
            onChangeText={(text) => { setEducation(text) }} />

          <Input
            label={'Institution/University name'}
            placeholder="School or College"
            value={collageName}
            onChangeText={(text: string) => { setCollageName(text) }} />

          <Input
            label={'Address'}
            placeholder="Address"
            value={collageAddress}
            onChangeText={(text) => { setCollageAddress(text) }} />

            <View style={styles.rowContainer}>
              <DatePickerButton onSelect={(day) => setStartDate(day)} label={'Start Date'} value={formatDate(new Date(startDate))} />
              <Spacer size={15} horizontal={true} />
              <DatePickerButton onSelect={(day) => setEndDate(day)} label={'End Date'} value={formatDate(new Date(endDate))} />
            </View>
            
          <Input
            label={'Description'}
            placeholder="Write additional information here..."
            multiline numberOfLines={4}
            value={information}
            onChangeText={(text) => { setInformation(text) }} />
          <Button onPress={onClickApply} text={'SAVE'} type="dark" />
        </View>
      </View>
      </ScrollView>
     </SafeAreaView>
  )
}

export default Education