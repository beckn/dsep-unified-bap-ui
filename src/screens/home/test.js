import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({navigation}) {
  const [data, setData] = useState([
    {"name" : "Jobs & Internships", "icon":"briefcase"},{"name" : "Trainings & Courses", "icon":"briefcase"},
    {"name" : "Scholarships & Grants", "icon":"briefcase"},{"name" : "Tutoring & Mentorship", "icon":"briefcase"},
  ])
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
        // onChangeText={newText => setText(newText)}
        // defaultValue={text} 
        /></View>
      </View>
      <View>
      <View style={{ paddingTop: 30 }}>
      <Text style={styles.texttitle}>Featured Jobs</Text></View>
      <View style={styles.feature}></View>
      </View>
      <View style={styles.listcontainer}>
      <Text style={styles.texttitle}>Browse by categories</Text>
      <View >
        <FlatList 
        horizontal={false}
        numColumns={2}

        data={data}
        renderItem={({item})=> (
          <View style={styles.list}>
            <View style={styles.item}>
            {/* <TouchableOpacity> */}
            <View style={styles.icon}>
            <Icon
                size={50}
                name={item.icon}
                // backgroundColor="#3b5998"
                onPress={()=> Alert.alert("pressed")}
                >
                
            </Icon></View></View>
            {/* </TouchableOpacity> */}
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
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: `#ffffff`
  },
  listcontainer: {
   
    padding: 10
    
  },
  item:{
    padding: 10
  },
  icon:{
    height: 90,
    width: 80,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    backgroundColor:  `#dcdcdc`, 
  },
  input: {
    height: 40,
    margin: 10,
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor:  `#f8f8ff`, 

  },
  feature: {
    height: 150,
    margin: 12,
    backgroundColor:  `#f8f8ff`,    
    padding: 10,
    borderRadius: 15,
  },
title : {
   height: 110, 
  //  borderRadius: 15,
   borderTopLeftRadius: 15,
   borderTopRightRadius: 15,
  //  padding: 10,
  //  margin: 12,
   alignItems: 'stretch',
   backgroundColor:  `#dcdcdc`,
},
texttitle : {
  fontWeight: 'bold',
  Color: `#000000`
},
list: {
  height: 130,
  flex: 1,
  // flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'

},
button: {


},
})
export default HomeScreen;
