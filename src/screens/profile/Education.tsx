import { View, Text, TextInput, SafeAreaView, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {styles} from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Button from '@components/AppButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Education = ({navigation}: {navigation: Navigation}) => {
    const onClickApply =() =>{
        navigation.navigate('Confirmation');
      }
      const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
    <View>
      <Text>Education</Text>
      <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.inputStyle} />
      <TextInput placeholder="Address" style={styles.inputStyle} />
      <TextInput placeholder="Phone" style={styles.inputStyle} />
      <View style={styles.calender}>
      <View style={styles.button}>
      <TouchableOpacity style={{ height: 50, padding: 10,borderWidth: 2, borderRadius: 5}}
      onPress={()=>setModalVisible(true)}><Text>start date</Text></TouchableOpacity></View>
      <View style={styles.button}>
      <TouchableOpacity style={{ height: 50, padding: 10, borderRadius: 5, borderWidth: 2}}
      onPress={()=>setModalVisible(true)}><Text>end date</Text></TouchableOpacity></View>
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

export default Education