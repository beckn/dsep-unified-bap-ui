import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import { ProfileCallService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { styles } from './styles';
import { ScholarshipCard, SearchBox, ICONS, Text, SVGIcon, Spacer } from '@components';
import Header from './Header';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import {Navigation} from '@interfaces/commonInterfaces';
import { userSkillView } from '@context';
import Button from '@components/AppButton';
import DocumentPicker from 'react-native-document-picker';
import images from '../../assets/images';


const ResumeScreen = ({navigation}: {navigation: Navigation}) => {
  const {skills, setSkills} = userSkillView();
  const {languages, setLanguages} = userSkillView();
  const {profileInfo, setProfileInfo} = userSkillView();
  const {educationInfo, setEducationInfo} = userSkillView();
  const {experienceInfo, setExperienceInfo} = userSkillView();
  const [upload , setUpload]= useState(true);
  const [resumeUri, setResumeUri] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');


  useEffect(() => {
   if(skills.length  !=0 && languages.length != 0 ){
    navigation.navigate("Dashboard");
   }
  }, []);



  const onClickApply = async () =>{
    console.log(fileType + resumeUri);
    let req = {
           
      "_id": profileInfo.profile.id,
      "user_id": profileInfo.profile.id,
      "document": resumeUri,
      "document_type": fileType,
      "created_at": new Date(),
      "last_used_at": new Date(),
      "last_modofied_at": new Date()
    }
    console.log(req);
    const resp = await ProfileCallService(ApiMethods.POST,ENDPOINT.USER_RESUME, req);
          if (resp?.status == 200) {
            console.log("test profile",resp.data);
            navigation.navigate("Dashboard");
          } else {
            console.log(resp);
          }
    
  }
  // const skills = ['Figma', 'Sketch','Zeplin', 'Invivision App','Adobe XD'];
  // const languages =  ['English', 'Hindi','German', 'Spanish','Odia'];
  console.log("educationInfo",educationInfo);
  console.log('experienceInfo',experienceInfo);
  
  const Tags = ({tag})=>{
    return (
      <View style={styles.tags}>
        <Text>{tag}</Text>
      </View>
    )
  }


  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    console.log('res : ' + "function call ok");
   
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText, DocumentPicker.types.doc, DocumentPicker.types.docx]
      })
    
      setUpload(!upload)
      setFileType(res[0].type)
      setResumeUri(res[0].uri)
      setFileName(res[0].name)
      
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // setUpload(!upload)
        alert('Canceled from single doc picker');

      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };



 function onPress(){
  navigation.navigate('WorkExperience')
 }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header navigation={navigation}
        heading='Resume & My info'
      />
      {/* <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>About me</Text>
          <SVGIcon
            name={ICONS.IC_EDIT}
            fill={Colors.white}
            style={styles.iconMargin}
          />
        </View>
        <View style={styles.bottomAboutSection}>
          <Text style={styles.sectionDetailText}  >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus id commodo egestas metus interdum dolor.
          </Text>
        </View>
      </View> */}
      
      {/* <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>Work Experience</Text>
          <TouchableOpacity onPress={ ()=> onPress() }><Text style={styles.addText}>+Add New</Text></TouchableOpacity>
        </View>
        <View style={styles.bottomWorkEducationSection}>
          <View>
            <Text style={styles.sectionHeaderText}  >
              {experienceInfo?.workExperience?.profile}
            </Text>
            <Text style={[styles.sectionDetailText,styles.verticalMargin]}  >
              {experienceInfo?.workExperience?.companyName}
            </Text>
            <Text style={styles.sectionDetailText}  >
             {experienceInfo?.workExperience?.startDate + ' '+ experienceInfo?.workExperience?.endDate}
            </Text>
          </View>
          <SVGIcon
            name={ICONS.IC_EDIT}
            fill={Colors.white}
            style={styles.iconMargin}
          />
        </View>
      </View> */}
      
      <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>Education</Text>
          <TouchableOpacity onPress={ ()=> navigation.navigate('Education') }><Text style={styles.addText}>+Add New</Text></TouchableOpacity>
        </View>
        <View style={styles.bottomWorkEducationSection}>
          <View>
            <Text style={styles.sectionHeaderText}  >
            { educationInfo?.educationProfile?.education }
            </Text>
            <Text style={[styles.sectionDetailText,styles.verticalMargin]}  >
            {educationInfo?.educationProfile?.collageName}
            </Text>
            <Text style={styles.sectionDetailText}  >
              
            {(educationInfo?.educationProfile?.startDate != undefined ? educationInfo?.educationProfile?.startDate: '' )+ ' ' 
            + (educationInfo?.educationProfile?.endDate != undefined ? educationInfo?.educationProfile?.endDate : '' )}
            </Text>
            <Text style={styles.sectionDetailText}  >
            {educationInfo?.educationProfile?.information}
            </Text>
          </View>
          <SVGIcon
            name={ICONS.IC_EDIT}
            fill={Colors.white}
            style={styles.iconMargin}
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>Skill</Text>
      <TouchableOpacity onPress={ ()=> navigation.navigate('AddSkills') }><Text style={styles.addText}>+Add More</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.bottomSkillLanguageSection}>
        {
          skills.map((item)=> <Tags  tag = {item}/>)
        }
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>Languages Known</Text>
          <TouchableOpacity onPress={ ()=> navigation.navigate('Language') }><Text style={styles.addText}>+Add More</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.bottomSkillLanguageSection}>
        {
          languages.map((item)=> <Tags  tag = {item}/>)
        }
        </View>
      </View>
      <View   >
      <View style={styles.sectionContainer}>
     
     {upload ?(
     <TouchableOpacity onPress={selectOneFile}>
     <ImageBackground source={images.rectangle} resizeMode="cover" style={{ flex: 1,width:'100%', height:81, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
      {/* <Image source={im}/> */}
      <SVGIcon name={ICONS.IC_UPLOAD} onPress={()=>{}} />
      <Text style={{textAlign:'center'}}>{'Upload CV/Resume'} </Text>
      </ImageBackground>
      </TouchableOpacity>
      ):( <>
      <TouchableOpacity onPress={() => setUpload(!upload)}>
      
      <Image source={images.pdf}/>
      
      <View >
          
          <Spacer  size={3}/>
        <View >
         
        <Text>{fileName}</Text>
       
        </View>
        <Text style={{top:5, color:'#000'}}>  {'Remove'}</Text>
      </View>
      
      </TouchableOpacity>
      </>
      )}
    
    <Spacer />
    
    </View>
      
      </View>
      <Spacer size={20}/>
      <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Go To Dashboard'} type="dark"/>
       
      </View> 
    </ScrollView>
  );
};

export default ResumeScreen;
