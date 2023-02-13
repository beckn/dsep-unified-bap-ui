import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useState } from 'react';
import images from '../../assets/images';


const WorkExperience = ({navigation}: {navigation: Navigation}) => {
    const onClickApply =() =>{
      
        navigation.navigate('Education');
      }
      const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
    <View>
      <Text>WorkExperience</Text>
      <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.inputStyle} />
      <TextInput placeholder="Address" style={styles.inputStyle} />
      <TextInput placeholder="Phone" style={styles.inputStyle} />
      <View style={styles.calender}>
      <View style={styles.button}>
      <Text>start date</Text>
      <TouchableOpacity style={{ height: 40,backgroundColor: 'white', padding: 10, paddingLeft: 100, width: 120, borderWidth: 2, borderRadius: 5}}
      onPress={()=>setModalVisible(true)}>
      <Image source={images.calender} />
      </TouchableOpacity></View>
      <View style={styles.button}>
      <Text>start date</Text>
      <TouchableOpacity style={{ height: 40, backgroundColor: 'white', padding: 10, paddingLeft: 100, width: 120, borderRadius: 5, borderWidth: 2}}
      onPress={()=>setModalVisible(true)}>
        <Image source={images.calender} />
        </TouchableOpacity></View>
      <Modal visible={modalVisible}>
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
        <Calendar />
      <TouchableOpacity onPress={()=>setModalVisible(false)}><Text>Close</Text></TouchableOpacity>
      </View></View>
      </Modal>
      </View>
      <TextInput placeholder="Add information here" multiline numberOfLines={4} style={styles.inputStyleMultiLine} />
      <Button onPress={onClickApply} text={'Apply'} type="dark"/>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default WorkExperience