import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import Options from './options';
import {ICONS, Text, SVGIcon, Spacer} from '@components';
import {Colors} from '@styles/colors';
import {Navigation} from '@interfaces/commonInterfaces';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ProfileScreen({navigation}: {navigation: Navigation}) {
  const onGoogleSignOut = () => {
    GoogleSignin.signOut()
      .then(res => {
        console.log('signed out', res);
        AsyncStorage.setItem('accessToken', "");
        navigation.navigate('Login')
      })
      .catch(err => {
        console.log('sign out error', err);
      });
  };
  return (
    <View style={styles.container}>
      <Spacer size={50} />
    <Options backgroundColor={'grey'} leftIcon={ICONS.IC_PERSONAL_INFO} title = {'Personal Info'} onPress = {()=>{}}/>
    {/* <Options leftIcon={ICONS.IC_RESUME} title = {'Resume & My info'} 
    onPress = {()=>{navigation.navigate('WorkExperience')}}/> */}
    <Options backgroundColor={'grey'} leftIcon={ICONS.IC_PURCHASE_HISTORY} title = {' History '} onPress = {()=>{}}/>
    <Options backgroundColor={'white'} leftIcon={ICONS.IC_RESUME} title = {'Resume & My info'} onPress = {()=>{navigation.navigate('Resume')}}/>
    <Options backgroundColor={'grey'} leftIcon={ICONS.IC_SETTINGS} title = {'Settings'} onPress = {()=>{ }}/>
    <Options backgroundColor={'white'} leftIcon={ICONS.IC_SETTINGS} title = {'Logout'} onPress = {()=>{ onGoogleSignOut() }}/>
    </View>
  );
}

export default ProfileScreen;
