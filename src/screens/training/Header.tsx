import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import images from '../../assets/images';


function Header({navigation, heading, online, video, education, rating}){
    return(
        <>
         <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{heading}</Text>
          <Image source={images.vector} />
        </View>
        <View>
          {online && <View style={styles.video}>
            <Text>{online}</Text>
            <View style={styles.horizontalSpace}></View>
            <Text>{video}</Text>
          </View>}
          {education &&<Text style={styles.align}>{education}</Text> }
          <View style={{height:70}}>
          </View>
          <View style={styles.starEnd}>
          {rating && <View style={styles.starValue}>
          <Image source={images.star}/>
          <Text style={styles.value}>{rating}</Text>
          </View>}
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
      flexDirection:'row',
      backgroundColor: '#D0D0D0',
      padding: 3,
      bottom: 15,
      borderRadius: 5,

    },
    value: {
      top: -1,
      fontSize: 12
    },
    align:{
      textAlign:'center'
    }

  
  });
export default Header;