import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ICONS, SVGIcon } from '@components';
import { Colors } from '@styles/colors';


function Header({navigation, heading, online, video, education, rating}){
    return(
        <>
         <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <SVGIcon
          name={ICONS.IC_LEFT_LARGE_ARROW}
          fill={Colors.oliveBlack}
          style={{ marginRight: 10 }}
        />
          </TouchableOpacity>
         
        <Text style={styles.headerText}>{heading}</Text>
        <SVGIcon
          name={ICONS.IC_SAVED_INACTIVE}
          fill={Colors.oliveBlack}
          style={{ marginRight: 10 }}
        />
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
          <SVGIcon
          name={ICONS.IC_STAR}
          fill={Colors.oliveBlack}
        />
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
      fontWeight:'900',
      width: 300
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