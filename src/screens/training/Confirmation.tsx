import React,{useEffect} from 'react';
import { View, Text,BackHandler} from 'react-native';
import {styles} from './styles';
import Button from '@components/AppButton';
import {Navigation} from '@interfaces/commonInterfaces';
import Spacer from '@components/Spacer';
import {ICONS, SVGIcon } from '@components';
import { Colors } from '@styles/colors';

function Confirmation({navigation, route}: {navigation: Navigation, route: any}){
  const { id, heading, time, imgPara, para1, para2, bacId, data} = route.params;
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home")
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  

  const onClickConfirmation =(navigation) =>{
    // navigation.navigate('Home');
  }
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        
         
         
        </View>
      <View style={[styles.body,styles.alignItem]}>
        {id===1 && <SVGIcon
             name={ICONS.IC_GRAY_CIRCLE}
             fill={Colors.grey}
             style={{ marginRight: 10, top: -25 }}
           />}
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
      <SVGIcon
             name={ICONS.IC_ILLUSTRATION}
             fill={Colors.oliveBlack}
             style={{ marginRight: 10 }}
           />
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
        {/* {id ===2 ?<Button onPress={()=>onClickConfirmation(navigation)} text={'START COURSE'} type="dark"/>: null} */}
       <Spacer size={20}/>
        {id === 2 ? <Button onPress={()=>navigation.navigate('Dashboard')} text={'go back to home'} type="dark"/> : null}
       {id ===2 && <Spacer size={20}/>}
        {id ===3 ?<Button onPress={()=>onClickConfirmation(navigation)} text={'SHOW CALENDLY LINK'} type="dark"/>: null}
       {id===3 && <Spacer size={20}/>}
        {id === 3 ? <Button onPress={()=>{}} text={'go back to home'} type=""/> : null}
      
      </View> 
       
    </View>
    )
}

export default Confirmation;