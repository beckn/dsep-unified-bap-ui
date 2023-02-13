import { View, Text, SafeAreaView, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '@components/SearchBox'
import {styles} from './styles'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import {ENDPOINT} from '@services/endpoints';
import {callService} from '@services';
import {ApiMethods} from '@constant/common.constant';
import SavedJSON from '../../data/Searchjobs.json';
import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';
import images from '../../assets/images';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';


const SkillsSearch = ({navigation}:{navigation: Navigation}) => {
  const [value, setValue] = useState("");
  const {jobSearchSkills, setJobSearchSkills} = userSkillView();


    const onClickApply =() =>{
      let item = value?.split(',')

        console.log(item);
        let a = item.map(i => {return({"name":i, "code":i })})
        setJobSearchSkills(a)
        console.log("a",a);
        console.log("context",jobSearchSkills);
       
        navigation.navigate("LocationSearch");
      }
    
   
    const SearchData = (text) => {

      // if(text){
      //   const newData = data.filter((item) => {
      //     const itemData = 
      //     console.log("check", itemData)
      //     return itemData;
          
      //   } );
      //   console.log("check", newData[0].company.name)
      //   setFilterData(newData[0].company.name)
      
      // setValue(text)
      // }else{
    
      // setFilterData(data)
      // setValue(text)
      // }
      
    }
    // const Item = ({SavedJSON}: {SavedJSON: searchJobs}) => (
      
    //     <Text>Check : {SavedJSON.jobResults[0].jobs[0].role}</Text>
      
    // );
  return (
    <SafeAreaView>
    <View>
    <NavBar hasBackArrow={true} hasRightIcon = {true} title={'skill search'} />
    
      {/* <View style={styles.searchBoxContainer}>
      < SearchBox />
    </View> */}
    <View style={styles.searchBox}>
      <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} />
      <TextInput style={styles.input} value= {value} placeholder='Add skills ' onChangeText={text => setValue(text)} />
      <SVGIcon name={ICONS.IC_REMOVE} />
    </View>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
      <View style={{height: 150}}>
      {/* <FlatList
        data={SavedJSON}
        renderItem={({item}) => <Item data={item[0]} />}
        keyExtractor={(item: searchJobs) => item[0].company.name }
      /> */}
      {/* {
        SavedJSON.jobResults.map(item => {return(
          <View>
          <Text>Check : {item.company.name}</Text>
          <Text>Check : {item.jobs[0].role}</Text>
          </View>
          // <Item data={item[0]} />
        )})
      } */}
      </View>
    </View>
    </SafeAreaView>
  )
}

export default SkillsSearch