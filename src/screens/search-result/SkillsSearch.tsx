import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SearchBox from '@components/SearchBox'
import {styles} from './styles'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';


const SkillsSearch = ({navigation}:{navigation: Navigation}) => {
    const onClickApply =() =>{
        navigation.navigate("LocationSearch");
      }
  return (
    <SafeAreaView>
    <View>
      <Text>Skill Search</Text>
      <View style={styles.searchBoxContainer}>
      < SearchBox />
    </View>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default SkillsSearch