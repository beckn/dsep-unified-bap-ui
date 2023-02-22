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

const AddLanguage = ({navigation}:{navigation: Navigation}) => {
    const [value, setValue] = useState("");
    const {languages, setLanguages} = userSkillView();
   
      const onClickApply =() =>{
        let item = value?.split(',')
        console.log(item);
        setLanguages(item)
        navigation.navigate("Resume");
      }

  return (
    <SafeAreaView style={styles.container}>
    <View style={{ paddingTop: 30, }}>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
      <View style={styles.titlePosition}>
          <Image source={images.leftArrow} />
          <Text style={{ color: 'black', fontWeight: 'bold'  }}>Add Known Languages </Text>
          </View>
        </TouchableOpacity>
      
    <View style={styles.searchBox}>
      <TextInput style={styles.input} value= {value} placeholder='Add Languages known ' onChangeText={text => setValue(text)} />
    </View>
   
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddLanguage