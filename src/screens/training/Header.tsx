import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import images from '../../assets/images';


function Header({navigation}){
    return(
        <>
         <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{'Design Thinking'}</Text>
          <Image source={images.vector} />
        </View>
        <View>
          <View style={styles.video}>
            <Text>{'online'}</Text>
            <View style={styles.horizontalSpace}></View>
            <Text>{'video & lecture'}</Text>
          </View>
        </View>
      </View>
        </>
    )

}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ffffff'
    },
    header: {
      backgroundColor: '#E5E5E5',
      height: 140,
    //   opacity: .8,
      paddingLeft:10,
      paddingRight:10
    },
    body: {
      flex:8,
      padding:15,
      backgroundColor: '#E5E5E5',
      opacity:0.6
    },
    headerHeading: {
     height: '40%',
     flexDirection:'row',
     justifyContent: 'space-between',
     alignItems:'center',
     zIndex:3
    },
    spacer: {
      height:10
    },
    heading: {
      color: '#000000',
      zIndex:9
    },
    buyButton: {
     height: 45,
     backgroundColor:'#000000',
     alignItems:'center',
     justifyContent:'center',
     borderRadius: 4
     
    },
    getButton: {
      height: 45,
      backgroundColor: '#E5E5E5',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 4
      
     },
     headerText: {
      textAlign: 'center', 
      fontWeight:'900'
    },
    video: {
      flexDirection: 'row', 
      justifyContent:'center'
    },
    horizontalSpace: {
      width:20
    },
    course: {
      flexDirection: 'row', 
      alignItems:'center'
    },
    dot: {
      height:3, 
      width:3, 
      backgroundColor:'black', 
      borderRadius:20,
      top:1
    },
    left:{left:10}
  
  });
export default Header;