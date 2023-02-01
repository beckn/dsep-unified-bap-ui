import { View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {Navigation} from '@interfaces/commonInterfaces';
import {styles} from './styles';
import NavBar from '@components/Navbar';
import Spacer from '@components/Spacer';
import {ICONS,Text, SVGIcon} from '@components';


const settingData = [
    {
        id:1,
        title: 'Profile Visibility',
        image: ICONS.IC_PRIVACY
    },
    {
        id:2,
        title: 'Change Password',
        image: ICONS.IC_CPASS
    },
    {
        id:3,
        title: 'Language',
        image: ICONS.IC_LANGUAGE
    },
    {
        id:4,
        title: 'Privacy',
        image: ICONS.IC_PRIVACY
    },
    {
        id:5,
        title: 'Terms and conditions',
        image: ICONS.IC_PRIVACY
    },
]

const lowerData =[
    {
        id:6,
        title: 'Help Center',
        image: ICONS.IC_DELETE
    },
    {
        id:7,
        title: 'Delete Account',
        image: ICONS.IC_DELETE
    }
]
const Settings = ({navigation}: {navigation: Navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <NavBar hasBackArrow={true} hasRightIcon = {false} title={'Settings'} />
        <View>
            <FlatList
              data={settingData}
              renderItem={({item,index})=>{
                return(
                    <>
                    <TouchableOpacity style={styles.card} onPress={()=>{}}>
                    <View style={{height:18,width:20}}>
                    <SVGIcon name={item.image} onPress={()=>{}}/>
                    </View>
                    <Text style={styles.text}>{item.title}</Text>
                    </TouchableOpacity>
                    </>
                )
              }}
            />

        </View>
        <Spacer />
        <View style={styles.line}></View>
        <FlatList 
         data={lowerData}
         renderItem={({item,index})=>{
            return<>
                    <View style={styles.card}>
                    <SVGIcon name={ICONS.IC_DELETE} onPress={()=>{}}/>
                    <Text style={styles.text}>{item.title}</Text>
                    </View>
            </>
         
         }}
        />
    </SafeAreaView>
  );
};
export default Settings;
