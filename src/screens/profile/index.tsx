import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import Options from './options';
import {ICONS, Text, SVGIcon} from '@components';
import {Colors} from '@styles/colors';
import {Navigation} from '@interfaces/commonInterfaces';

function ProfileScreen({navigation}: {navigation: Navigation}) {
  return (
    <View style={styles.container}>
    <Options leftIcon={ICONS.IC_PERSONAL_INFO} title = {'Personal Info'} onPress = {()=>{}}/>
    {/* <Options leftIcon={ICONS.IC_RESUME} title = {'Resume & My info'} 
    onPress = {()=>{navigation.navigate('WorkExperience')}}/> */}
    <Options leftIcon={ICONS.IC_PURCHASE_HISTORY} title = {' History '} onPress = {()=>{}}/>
    <Options leftIcon={ICONS.IC_RESUME} title = {'Resume & My info'} onPress = {()=>{navigation.navigate('Resume')}}/>
    <Options leftIcon={ICONS.IC_SETTINGS} title = {'Settings'} onPress = {()=>{ navigation.navigate('Settings')}}/>
    </View>
  );
}

export default ProfileScreen;
