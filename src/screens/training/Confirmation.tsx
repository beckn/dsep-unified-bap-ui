import React from 'react';
import { View, Text,Image, Alert } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import Button from '../../components/button';
import Header from './Header';

function Confirmation({navigation}){
  const onClickConfirmation =(navigation) =>{
    Alert.alert("flow completed")
  }
    return (
    <View style={styles.container}>
       <Header navigation={navigation} />
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
       <Button onPress={()=>onClickConfirmation(navigation)} text={'Buy Now'} type="dark"/>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View> 
       
    </View>
    )
}

export default Confirmation;