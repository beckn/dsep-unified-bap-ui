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


const AddSkills = ({navigation}:{navigation: Navigation}) => {
    const [value, setValue] = useState("");
    const {skills, setSkills} = userSkillView();
    // const [skillsList, setSkillsList] = useState([]);
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
      const onClickApply =async () =>{
        let item = value?.split(',')
        console.log(item);
        await AsyncStorage.setItem('skillsInfo',JSON.stringify([...skills,item]))
        setSkills([...skills,item])
        // setSkillsList([...skills,item])
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
          <Text style={{ color: 'black', fontWeight: 'bold'  }}>Add Your Skills</Text>
          </View>
        </View>
      
    <View style={styles.searchBox}>
      <TextInput style={styles.input} value= {value} placeholder='Add skills ' onChangeText={text => setValue(text)} />
    </View>
   
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'SAVE'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddSkills