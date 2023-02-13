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
    <SafeAreaView>
    <View>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
      {/* <Text>LocationSearch</Text> */}
    <View style={styles.searchBox}>
      {/* <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} /> */}
      <TextInput style={styles.input} value= {value} placeholder='Add Languages known ' onChangeText={text => setValue(text)} />
      {/* <SVGIcon name={ICONS.IC_REMOVE} /> */}
    </View>
   
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddLanguage