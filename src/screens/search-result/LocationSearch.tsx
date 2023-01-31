import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SearchBox from '@components/SearchBox'
import {styles} from './styles'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import images from '../../assets/images';

const LocationSearch = ({navigation}:{navigation: Navigation}) => {
    const onClickApply =() =>{
        navigation.navigate("SearchResult");
      }
  return (
    <SafeAreaView>
    <View>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
      <Text>LocationSearch</Text>
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

export default LocationSearch