import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, {useState} from 'react'
import SearchBox from '@components/SearchBox'
import {styles} from './styles'
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import images from '../../assets/images';
import SavedJSON from '../../data/listofjobs.json';
import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';

const LocationSearch = ({navigation}:{navigation: Navigation}) => {
  const [value, setValue] = useState("");
  const {jobsearchlocation, setJobSearchlocation} = userSkillView();

    const onClickApply =() =>{
      let item = value?.split(',')
      let a = item.map(i => {return({ "city":i })})
        setJobSearchlocation(a)
        console.log("a",a);
        console.log("context",jobsearchlocation);
        navigation.navigate("SearchResult");
      }
 
  return (
    <SafeAreaView>
    <View>
    <NavBar hasBackArrow={true} hasRightIcon = {true} title={'LocationSearch'} />

      {/* <View style={styles.searchBoxContainer}>
      < SearchBox />
    </View> */}
    <View style={styles.searchBox}>
      <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} />
      <TextInput style={styles.input} value= {value} placeholder='Enter Preferred Location  ' onChangeText={text => setValue(text)} />
      <SVGIcon name={ICONS.IC_REMOVE} />
    </View>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
      {/* <View style={{height: 150}}>
        <FlatList 
        // horizontal={false}
        // numColumns={2}

        data={filterdata}
        renderItem={({item})=> (
          <View>
            <TouchableOpacity
            onPress={()=> setValue(item.city) }
            >
            {/* <View style={styles.item}> */}
            {/* <Text>{item.city}</Text>
            </TouchableOpacity>
            <View>
           </View>
            
          </View>
        )}
        keyExtractor = {(item => item.city)}
        />
      </View> */} 
    </View>
    </SafeAreaView>
  )
}

export default LocationSearch