import React from 'react';
import { View, Text,Image, Alert } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import Spacer from '@components/Spacer';


function Confirmation({navigation, route}: {navigation: Navigation, route: any}){
  const { id, heading, time, imgPara, para1, para2} = route.params;

  const onClickConfirmation =(navigation) =>{
    // navigation.navigate('Home');
  }
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        </View>
      <View style={[styles.body,styles.alignItem]}>
        {id===1 && <Image source={images.grayCircle} />}
        {id ===3 &&   <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>}
        <Spacer />
      <Text style={[styles.heading, styles.align]}>{heading}</Text>
      {id ===1 && time && <Text>{'Course length :'} {time}</Text>}
      {id ===3 && time && <Text>{'Date & time :'} {time}</Text>}
      <Spacer size={25}/>
      <View style={styles.line}></View>
      <View style={styles.success}>
      <Image source={images.success} />
        <Spacer size={25}/>
        <Text style={styles.headerText}>{imgPara}</Text>
        <Spacer size={20}/>
        {para1 && <Text style={styles.align}>{para1}</Text>}
        <Spacer size={20}/>
        {para2 && <Text style={styles.align}>{para2}</Text>}
      </View>
      </View>
      <View style={styles.bottom}>
       {id ===1 ?<Button onPress={()=>onClickConfirmation(navigation)} text={'START COURSE'} type="dark"/>: null}
       {id===1 && <Spacer size={20}/>}
        {id === 1 ? <Button onPress={()=>{}} text={'EXPLORE OTHER COURSES'} type=""/> : null}
        {id ===2 ?<Button onPress={()=>onClickConfirmation(navigation)} text={'Check application status'} type="dark"/>: null}
       <Spacer size={20}/>
        {id === 2 ? <Button onPress={()=>navigation.navigate('Dashboard')} text={'go back to home'} type=""/> : null}
       {id ===2 && <Spacer size={20}/>}
        {id ===3 ?<Button onPress={()=>onClickConfirmation(navigation)} text={'SHOW CALENDLY LINK'} type="dark"/>: null}
       {id===3 && <Spacer size={20}/>}
        {id === 3 ? <Button onPress={()=>{}} text={'go back to home'} type=""/> : null}
      
      </View> 
       
    </View>
    )
}

export default Confirmation;