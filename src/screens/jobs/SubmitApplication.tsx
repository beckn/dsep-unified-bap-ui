import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';
import NavBar from '@components/Navbar';
import { DetailHeader } from '@components/index';
import {SVGIcon,ICONS} from '@components/SvgIcon';
import images from '../../assets/images';



function SubmitApplication({navigation}: {navigation: Navigation}) {
    const [upload , setUpload]= useState(false);
  const onClickApply = () => {
    navigation.navigate('JobConfirmation');
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon = {true} title={'Mentoring'} />
      <DetailHeader
        rating="4.9"
        title="Facebook"
        description="Bangalore, India"
        heading="Senior Fulltime Remote"
        time="1 days"
      />
      <View style={styles.body}>
      <Text style={styles.heading}>{'Saved Resume'}</Text>
      <Spacer />
      <View style={styles.saveResume}>
        <View style={styles.resumeLeftPart}>
        <Image source={images.pdf}/>
        </View>
        <View style={styles.resumeRightPart}>
            <Text>{'George Alexander - UX Designer'}</Text>
            <Spacer  size={3}/>
          <View style={styles.row}>
          <Text>{'Last Used: '}</Text>
          <Text>{'14 Sep 2022 at 11:30 am'}</Text>
          </View>
        </View>
      </View>
      <Spacer />
      <Text style={{textAlign:'center'}}>{'or'}</Text>
      <Text style={styles.heading}>{'Upload  a New Resume'}</Text>
      <Spacer />
      <Text>{'Add your CV/Resume to apply for a job'}</Text>
      <Spacer />
      <View>
       <TouchableOpacity onPress={()=>{setUpload(!upload)}}>
       {upload ?(<ImageBackground source={images.rectangle} resizeMode="cover" style={{ flex: 1,width:'100%', height:81, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        {/* <Image source={im}/> */}
        <SVGIcon name={ICONS.IC_UPLOAD} onPress={()=>{}} />
        <Text style={{textAlign:'center'}}>{'Upload CV/Resume'}</Text>
        </ImageBackground>):( <>
        <View style={styles.uplodedResume}>
        <>
        <View style={styles.resumeLeftPart}>
        <Image source={images.pdf}/>
        
        </View>
        <View style={styles.resumeRightPart}>
            <Text>{'Resume George Alexander - UX Designer'}</Text>
            <Spacer  size={3}/>
          <View style={styles.row}>
          <Text>{'Last Used: '}</Text>
          <Text>{'Today at 02:30 pm'}</Text>
          </View>
          <Text style={{top:5, color:'#000'}}>{'Remove'}</Text>
        </View>
        </>
        
        </View>
     
        </>)}
       </TouchableOpacity>
      <Spacer />
      
      </View>
      <Text style={styles.heading}>{'Information'}</Text>
      <Spacer />
      <TextInput 
        multiline={true}
        placeholder='Explain why you are the right person for this job'
        style={styles.textInput}
        onChangeText = {()=>{}}
        textAlignVertical={'top'}
      />
      </View>
      </SafeAreaView>
      <View style={styles.bottom}>
        <Button onPress={onClickApply} text={'SUBMIT APPLICATION'} type="dark" />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default SubmitApplication;
