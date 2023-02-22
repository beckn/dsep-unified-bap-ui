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

const AddSkills = ({navigation}:{navigation: Navigation}) => {
    const [value, setValue] = useState("");
    const {skills, setSkills} = userSkillView();
    // const[data, setData] = useState([
    //     {
    //         id: 1,
    //         skill: 'Mobile App'
    //     },
    //     {
    //         id: 2,
    //         skill: 'Web App'
    //     },
    //     {
    //         id: 2,
    //         skill: 'React'
    //     }
    // ]);
    // const[filterdata, setFilterData] = useState([{
    //     id: 1,
    //     skill: 'mobile App'
    // },])
    // const SearchData = (text) => {
  
    //     if(text){
    //       const newData = data.filter((item) => {
    //         const itemData = item.skill
    //         return itemData.indexOf(text) > -1;
            
    //       } );
    //       setFilterData(newData)
        
    //     setValue(text)
    //     }else{
     
    //     setFilterData(data)
    //     setValue(text)
    //     }
        
    //   }
      const onClickApply =() =>{
        let item = value?.split(',')
        console.log(item);
        setSkills(item)
        navigation.navigate("Resume");
      }

      // useEffect(() => {
        
      //   console.log("check",skills);
      // }, []);


  return (
    <SafeAreaView style={styles.container}>
    <View style={{ paddingTop: 30, }}>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
      <View style={styles.titlePosition}>
          <Image source={images.leftArrow} />
          <Text style={{ color: 'black', fontWeight: 'bold'  }}>Add Your Skills</Text></View>
        </TouchableOpacity>
      
    <View style={styles.searchBox}>
      <TextInput style={styles.input} value= {value} placeholder='Add skills ' onChangeText={text => setValue(text)} />
    </View>
   
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddSkills