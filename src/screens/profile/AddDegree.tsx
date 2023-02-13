import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import images from '../../assets/images';
import {styles} from './styles'
import SearchBox from '@components/SearchBox'
import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';

const AddDegree = ({navigation}:{navigation: Navigation}) => {
    const [value, setValue] = useState("");
    const[data, setData] = useState([
        {
            id: 1,
            skill: 'B tech'
        },
        {
            id: 2,
            skill: 'B E'
        },
        {
            id: 2,
            skill: 'M T'
        }
    ]);
    const[filterdata, setFilterData] = useState([{
        id: 1,
        skill: 'M T'
    },])
    const SearchData = (text) => {
  
        if(text){
          const newData = data.filter((item) => {
            const itemData = item.skill
            return itemData.indexOf(text) > -1;
            
          } );
          setFilterData(newData)
        
        setValue(text)
        }else{
     
        setFilterData(data)
        setValue(text)
        }
        
      }
      const onClickApply =() =>{
        navigation.navigate("SearchResult");
      }
  return (
    <SafeAreaView>
    <View>
    <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
      {/* <Text>LocationSearch</Text> */}
    <View style={styles.searchBox}>
      <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} />
      <TextInput style={styles.input} value= {value} placeholder='Add skills ' onChangeText={text => SearchData(text)} />
      <SVGIcon name={ICONS.IC_REMOVE} />
    </View>
    <View style={{height: 150}}>
        <FlatList 
        // horizontal={false}
        // numColumns={2}

        data={filterdata}
        renderItem={({item})=> (
          <View>
            <TouchableOpacity
            // onPress={()=> onButtonClick(item.name) }
            >
            {/* <View style={styles.item}> */}
            <Text>{item.skill}</Text>
            </TouchableOpacity>
            <View>
           </View>
            
          </View>
        )}
        keyExtractor = {(item => item.skill)}
        />
      </View>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
    </View>
    </SafeAreaView>
  )
}

export default AddDegree