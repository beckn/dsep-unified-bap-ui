import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import Options from './options';
import {ICONS, Text, SVGIcon} from '@components';
import {Colors} from '@styles/colors';


function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* <TextInput placeholder="Name" style={styles.inputStyle} />
      <TextInput placeholder="Email" style={styles.inputStyle} />
      <TextInput placeholder="Phone" style={styles.inputStyle} /> */}
    <Options leftIcon={ICONS.IC_PERSONAL_INFO} title = {'Personal Info'} onPress = {()=>{}}/>
    <Options leftIcon={ICONS.IC_RESUME} title = {'Resume & My info'} onPress = {()=>{}}/>
    <Options leftIcon={ICONS.IC_PURCHASE_HISTORY} title = {'Purchase History'} onPress = {()=>{}}/>
    <Options leftIcon={ICONS.IC_SETTINGS} title = {'Settings'} onPress = {()=>{}}/>
    </View>
  );
}

export default ProfileScreen;
