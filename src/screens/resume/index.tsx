import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { callService } from '@services';
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

const ResumeScreen = ({navigation}: {navigation: Navigation}) => {
  const {skills, setSkills} = userSkillView();
  const {languages, setLanguages} = userSkillView();
  const {educationInfo, setEducationInfo} = userSkillView();
  const {experienceInfo, setExperienceInfo} = userSkillView();
  const [profile, setProfile] = useState("");
  const onClickApply =() =>{
    navigation.navigate("Dashboard");
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

 function onPress(){
  navigation.navigate('WorkExperience')
 }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header navigation={navigation}
        heading='Resume & My info'
      />
      <View style={styles.sectionContainer}>
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
      </View>
      
      <View style={styles.sectionContainer}>
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
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.topSection}>
          <Text style={styles.sectionHeaderText}>Education</Text>
          <TouchableOpacity onPress={ ()=> navigation.navigate('Education') }><Text style={styles.addText}>+Add New</Text></TouchableOpacity>
        </View>
        <View style={styles.bottomWorkEducationSection}>
          <View>
            <Text style={styles.sectionHeaderText}  >
            {educationInfo?.educationProfile?.education}
            </Text>
            <Text style={[styles.sectionDetailText,styles.verticalMargin]}  >
            {educationInfo?.educationProfile?.collageName}
            </Text>
            <Text style={styles.sectionDetailText}  >
            {educationInfo?.educationProfile?.startDate + ' ' + educationInfo?.educationProfile?.endDate}
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
      <View style={{left:20, top:10}}>
      <Text style={styles.sectionHeaderText}>Profile</Text>
      <TextInput 
        placeholder="Profile URl" 
        style={styles.inputStyle} 
        onChangeText ={(text)=>{setProfile(text)}}
        value={profile}
        
        />
      </View>
      <Spacer size={20}/>
      <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Goto Dashboard'} type="dark"/>
       
      </View> 
    </ScrollView>
  );
};

export default ResumeScreen;
