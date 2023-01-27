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
          <View style={{height:70}}>
          </View>
          <View style={styles.starEnd}>
          <View style={styles.starValue}>
          <Image source={images.star}/>
          <Text style={styles.value}>{'4.8'}</Text>
          </View>
          </View>
        </View>
      </View>
        </>
    )

}
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#E5E5E5',
      height: 160,
      paddingLeft:10,
      paddingRight:10
    },
    headerHeading: {
     height: '30%',
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
    left:{
      left:10
    },
    starEnd:{
      alignItems:'flex-end'
    },
    starValue: {
      flexDirection:'row'
    },
    value: {
      top:-2.5
    }
  
  });
export default Header;