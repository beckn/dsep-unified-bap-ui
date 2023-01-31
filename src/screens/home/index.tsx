import React, { useState } from 'react';
import {View, Button, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Navigation} from '@interfaces/commonInterfaces';
import {Text} from '@components/Text';
import {getString} from '@i18n';
import {commonStyles} from '@styles/commonStyles';
import {Fonts} from '@styles/fonts';
import {useTheme} from '@context';
import images from '../../assets/images';
import {styles} from './styles';


function HomeScreen({navigation}: {navigation: Navigation}) {
  const {theme, setTheme} = useTheme();
  
  const [data, setData] = useState([
    {"name" : "Jobs & Internships", "icon":images.bag},{"name" : "Trainings & Courses", "icon":images.Mentor},
    {"name" : "Scholarships & Grants", "icon":images.Scholar},{"name" : "Tutoring & Mentorship", "icon":images.Mentor},
  ])

  function onButtonClick(name){
    if(name == "Jobs & Internships"){
      navigation.navigate('SkillsSearch')
    }else if(name == "Trainings & Courses"){
      navigation.navigate('Training')
    }else if(name == "Scholarships & Grants"){
      navigation.navigate('Scholarships')
    }else if(name == "Tutoring & Mentorship"){
      navigation.navigate('MentoringList')
    }
    
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
      <View style={{ alignItems:'center'}}>
      <Text>Hello </Text>
      <Text style={styles.texttitle}> Rajesh </Text></View>
      <View style={{ alignItems:'flex-end'}}>
      <Icon
                size={30}
                name={'bell'}
                // backgroundColor="#3b5998"
                onPress={()=> Alert.alert("pressed")}
                >
                
            </Icon></View></View>
            <View style={{ alignItems:'center'}}>      
      <TextInput style={styles.input}
        placeholder="Type here to Search !"
        onFocus={ showModal }
        onChangeText={newText => showModal()}
        // defaultValue={text} 
        /></View>
      </View>
      <View>
      <View style={{ paddingTop: 30, paddingLeft: 10 }}>
      <Text style={styles.texttitle}>Featured Jobs</Text></View>
      <View style={styles.feature}></View>
      </View>
      <View style={styles.listContainer}>
      <Text style={styles.texttitle}>Browse by categories</Text>
      <View >
        <FlatList 
        horizontal={false}
        numColumns={2}

        data={data}
        renderItem={({item})=> (
          <View style={styles.list}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=> onButtonClick(item.name) }
            >
            {/* <View style={styles.item}> */}
            
            <View style={styles.icon}>
            <Image source={item.icon} />
            {/* </View> */}
            </View>
            </TouchableOpacity>
            <View>
            <Text>{item.name}</Text></View>
            
          </View>
        )}
        keyExtractor = {(item => item.name)}
        />
      </View>
      </View>
      
          
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     backgroundColor: `#ffffff`
//   },
//   listcontainer: {
   
//     padding: 10
    
//   },
//   item:{
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   icon:{
//     height: 90,
//     width: 80,
//     borderRadius: 15,
//     padding: 25,
//     alignItems: 'center',
//     backgroundColor:  `#dcdcdc`, 
//   },
//   input: {
//     height: 40,
//     margin: 10,
//     width: 300,
//     borderWidth: 1,
//     borderRadius: 15,
//     padding: 10,
//     backgroundColor:  `#f8f8ff`, 

//   },
//   feature: {
//     height: 150,
//     margin: 12,
//     backgroundColor:  `#f8f8ff`,    
//     padding: 10,
//     borderRadius: 15,
//   },
// title : {
//    height: 110, 
//   //  borderRadius: 15,
//    borderTopLeftRadius: 15,
//    borderTopRightRadius: 15,
//   //  padding: 10,
//   //  margin: 12,
//    alignItems: 'stretch',
//    backgroundColor:  `#dcdcdc`,
// },
// texttitle : {
//   fontWeight: 'bold',
//   Color: `#000000`
// },
// list: {
//   height: 130,
//   flex: 1,
//   // flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center'

// },
// button: {


// },
// })
export default HomeScreen;
