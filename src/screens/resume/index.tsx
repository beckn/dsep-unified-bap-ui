import { ApiMethods } from '@constant/common.constant';
import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity, TextInput, Text, Image, ImageBackground } from 'react-native';
import { ProfileCallService } from '@services';
import { ENDPOINT } from '@services/endpoints';
import { styles } from './styles';
import { ScholarshipCard, SearchBox, ICONS, SVGIcon, Spacer } from '@components';
import Header from './Header';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { userSkillView } from '@context';
import Button from '@components/AppButton';
import DocumentPicker from 'react-native-document-picker';
import images from '../../assets/images';
import { StackActions, useFocusEffect, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResumeScreen = ({ navigation }) => {
  const { skills } = userSkillView();

  const { languages } = userSkillView();
  const { profileInfo } = userSkillView();
  const { educationInfo } = userSkillView();
  const { experienceInfo, setExperienceInfo } = userSkillView();
  const [ educationList, setEducationList ] = useState([]);
  const [upload, setUpload] = useState(true);
  const [resumeUri, setResumeUri] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (skills.length != 0 && languages.length != 0) {
      const resetAction = StackActions.replace('Dashboard');
      navigation.dispatch(resetAction);
    }
    // removeLocalStorage()
  }, []);

  async function  removeLocalStorage(){
    await AsyncStorage.removeItem('educationInfo');
    await AsyncStorage.removeItem('skillsInfo');
    await AsyncStorage.removeItem('languageInfo');
    console.log('|----------- Removed Localstorage ---------|')
  }

useFocusEffect(
  React.useCallback(() => {
    setEducationList(educationInfo)
  }, [educationInfo]))

  const onClickApply = async () => {
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
    const resp = await ProfileCallService(ApiMethods.POST, ENDPOINT.USER_RESUME, req);
    if (resp?.status == 200) {
      console.log("test profile", resp.data);
      const resetAction = StackActions.replace('Dashboard');
      navigation.dispatch(resetAction);
    } else {
      console.log(resp);
    }

  }
  // const skills = ['Figma', 'Sketch','Zeplin', 'Invivision App','Adobe XD'];
  // const languages =  ['English', 'Hindi','German', 'Spanish','Odia'];
  // console.log("educationInfo", educationInfo);
  // console.log('experienceInfo', educationList);

  const Tags = ({ tag }) => {
    return (
      <>
        <View style={styles.tags}>
          <Text style={styles.tagsText}>{tag}</Text>
        </View>
      </>
    )
  }

  const Education = ({education}) =>{
    const educationObj = education?.educationProfile;
    return (
      <>
       <View style={styles.bottomWorkEducationSection}>
       <View >
            {educationObj?.education &&
              <Text style={styles.sectionHeaderText}  >
                {educationObj?.education}
              </Text>}
            {educationObj?.collageName &&
              <Text style={[styles.sectionDetailText, styles.verticalMargin]}>
                {educationObj?.collageName}
              </Text>}
            {(educationObj.startDate || educationObj.endDate) && <Text style={styles.sectionDetailText}  >
              {(educationObj.startDate ? formatDate(educationObj.startDate) : '') + ' - '
                + (educationObj.endDate ? formatDate(educationObj.endDate) : '')}
            </Text>}
            {educationObj?.information && <Text style={styles.sectionDetailText}  >
              {educationObj.information}
            </Text>}
            </View>
          {educationObj && 
          <TouchableOpacity onPress={() => navigation.navigate('Education',{education})}>

          <SVGIcon
            name={ICONS.IC_EDIT}
            fill={Colors.white}
            style={styles.iconMargin}
            />
            </TouchableOpacity>
            }
          </View>
      </>
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



  function onPress() {
    navigation.navigate('WorkExperience')
  }

  function padTo2Digits(num: Number) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date: any) {
    date = new Date(date);
    return [
      date.toLocaleString('default', { month: 'short', year: 'numeric' }),
    ].join('-');
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
        <View style={[styles.topSection,{ minHeight:40,maxHeight:40 }]}>
          <Text style={styles.sectionHeaderText}>Work Experience</Text>
          <TouchableOpacity onPress={ ()=> onPress() }><Text style={styles.addText}>+ Add New</Text></TouchableOpacity>
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
        <View style={[styles.topSection,{ minHeight:40,maxHeight:40 }]}>
          <Text style={styles.sectionHeaderText}>Education</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Education')}><Text style={styles.addText}>+ Add New</Text></TouchableOpacity>
        </View>
        {
            educationList?.map((item) => <Education education={item} />)
          }
        {/* <View style={styles.bottomWorkEducationSection}>
        
          <View >
            {educationInfo?.educationProfile?.education &&
              <Text style={styles.sectionHeaderText}  >
                {educationInfo?.educationProfile?.education}
              </Text>}
            {educationInfo?.educationProfile?.collageName &&
              <Text style={[styles.sectionDetailText, styles.verticalMargin]}>
                {educationInfo?.educationProfile?.collageName}
              </Text>}
            {(educationInfo?.educationProfile?.startDate || educationInfo?.educationProfile?.endDate) && <Text style={styles.sectionDetailText}  >
              {(educationInfo?.educationProfile?.startDate ? formatDate(educationInfo?.educationProfile?.startDate) : '') + ' - '
                + (educationInfo?.educationProfile?.endDate ? formatDate(educationInfo?.educationProfile?.endDate) : '')}
            </Text>}
            {educationInfo?.educationProfile?.information && <Text style={styles.sectionDetailText}  >
              {educationInfo?.educationProfile?.information}
            </Text>}
          </View>
          {educationInfo?.educationProfile && <SVGIcon
            name={ICONS.IC_EDIT}
            fill={Colors.white}
            style={styles.iconMargin}
          />}
        </View> */}
      </View>

      <View style={styles.sectionContainer}>
        <View style={[styles.topSection,{ minHeight:40,maxHeight:40 }]}>
          <Text style={styles.sectionHeaderText}>Skill</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddSkills')}><Text style={styles.addText}>+ Add More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSkillLanguageSection}>
          {
            skills.map((item) => <Tags tag={item} />)
          }
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={[styles.topSection,{ minHeight:40,maxHeight:40 }]}>
          <Text style={styles.sectionHeaderText}>Languages Known</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Language')}><Text style={styles.addText}>+ Add More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSkillLanguageSection}>
          {
            languages.map((item) => <Tags tag={item} />)
          }
        </View>
      </View>
      <View   >
        <View style={styles.sectionContainer}>
          <View style={[styles.topSection, { flexDirection: 'column', borderBottomWidth: upload ? 0 : 1 }]}>
            <Text style={styles.sectionHeaderText}>Document</Text>
            <Spacer size={6} />
            <Text style={styles.sectionSubTitleText}>Add your CV/Resume to apply for a job</Text>
            <Spacer size={24} />

          </View>
          {upload ? (
            <TouchableOpacity onPress={selectOneFile}>
              <View style={styles.uploadDocBox}>
                <SVGIcon name={ICONS.IC_UPLOAD} onPress={() => { }} fill='white' />
                <Spacer size={6} horizontal={true} />
                <Text style={styles.uploadDocLabelText}>{'Upload CV/Resume'} </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setUpload(!upload)}>
              <View style={[styles.uploadDocBox, styles.uploadedDocContainer]}>
                <Image source={images.doc} />

                <Spacer size={5} horizontal={true} />
                <View style={{ alignSelf: 'center', width: '80%' }}>
                  <Text numberOfLines={1} >{fileName}</Text>
                  <Spacer size={3} />
                  <View >
                  </View>
                  <Text style={{ top: 5, color: '#000' }}>{'Remove'}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <Spacer />
        </View>

      </View>
      <Spacer size={20} />
      <View style={styles.bottom}>
        <Button onPress={onClickApply} text={'Go To Dashboard'} type="dark" />

      </View>
    </ScrollView>
  );
};

export default ResumeScreen;
