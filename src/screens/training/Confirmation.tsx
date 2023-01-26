import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
function Confirmation({navigation}){
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{'Design Thinking'}</Text>
        <Image source={images.vector} />
        </View>
          <View style={styles.video}>
            <Text>{'online'}</Text>
            <View style={styles.horizontalSpace}></View>
            <Text>{'video & lecture'}</Text>
          </View>
      </View>
      <View style={[styles.body,{alignItems:'center'}]}>
        <Image source={images.grayCircle} style={{marginTop:-50}} />
        <View style={styles.spacer}  />
        <View style={styles.spacer}  />
      <Text style={styles.heading}>{'Design Thinking course'}</Text>
      <Text>{'Course length : 1 Month'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.line}></View>
      <View style={styles.success}>
      <Image source={images.success} />
        <View style={styles.spacer}  />
        <View style={styles.spacer}  />
        <Text>{'Successful'}</Text>
        <View style={styles.spacer}  />
        <View style={styles.spacer}  />
        <Text>{'Congratulations, your application has been sent'}</Text>
      </View>
      </View>
      <View style={styles.bottom}>
      <View style={styles.spacer}  />
      <View style={styles.spacer}  />
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.buyButton}>
        <Text style={{color:'#ffffff'}}>{'Buy Now'}</Text>
        </View>
       </TouchableOpacity>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.getButton}>
        <Text style={{color:'#000000'}} >{'EXPLORE OTHER COURSES'}</Text>
        </View>
       </TouchableOpacity>
       <View style={styles.spacer}  />
      </View>
       
    </View>
    )
}

export default Confirmation;