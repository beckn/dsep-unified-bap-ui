import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import images from '../../assets/images';
import {styles} from './styles'
import SearchBox from '@components/SearchBox'
import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';
import { userSkillView } from '@context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddLanguage = ({navigation}:{navigation: Navigation}) => {
    const [value, setValue] = useState("");
    const {languages, setLanguages} = userSkillView();
   
      const onClickApply = async () =>{
        let item = value?.split(',')
        console.log(item);
        setLanguages([...languages,item])
        await AsyncStorage.setItem('languageInfo',JSON.stringify([...languages,item]))
        navigation.navigate("Resume");
      }

  return (
    <SafeAreaView style={styles.container}>
    <View>
    <View>
      <View style={styles.titlePosition}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
          <Text style={{ color: 'black', fontWeight: 'bold'  }}>Add Known Languages </Text>
          </View>
        </View>
      
    <View style={styles.searchBox}>
      <TextInput style={styles.input} value= {value} placeholder='Add Languages known ' onChangeText={text => setValue(text)} />
    </View>
   
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'SAVE'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddLanguage