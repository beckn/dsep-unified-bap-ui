import React,{useState, useEffect} from 'react';
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
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import context from '../../data/applyjob-context.json';
import { userSkillView } from '@context';


function SubmitApplication({navigation}: {navigation: Navigation}) {
    const [upload , setUpload]= useState(false);
    const [data, setData] = useState([]);
    const [init, setInit] = useState('init');
    const {languages, skills, profileInfo} = userSkillView();
    const [profileUrl, setProfileUrl] = useState("https://linkedin.com/john-doe");
    let con = {
      "jobId": "1",
      "context": {
        "transactionId": "a9aaecca-10b7-4d19-b640-b047a7c62195",
        "bppId": "affinidibpp.com",
        "bppUri": "http://affinidibpp.com/DSEP-nlb-d3ed9a3f85596080.elb.ap-south-1.amazonaws.com"
      },
      "confirmation": {
        "JobFulfillmentCategoryId": "1",
        "jobApplicantProfile": {
          "name":profileInfo.profile? profileInfo.profile.firstName : 'name empty',
          "languages": languages,
          "profileUrl": profileUrl,
          "creds": [
            {
              "url": "https://cbse.nic.in/link/to/college-marksheet.json",
              "type": "application/vc+json"
            },
            {
              "url": "https://drive.google.com/link/to/pass-certificate.json",
              "type": "application/vc+json"
            },
            {
              "url": "https://digilocker.com/link/to/python-skill-certificate.json",
              "type": "application/vc+json"
            },
            {
              "url": "https://drive.google.com/link/to/python-skill-certificate.pdf",
              "type": "application/pdf"
            },
            {
              "url": "https://drive.google.com/link/to/experience-certificate.pdf",
              "type": "application/pdf"
            }
          ],
          "skills": skills
        }
      }
    }
    useEffect(() => {
      // getData();
    }, []);
    const initApplication = async () => {
      const resp = await callService(ApiMethods.POST, ENDPOINT.INIT_APLLICATION, );
      if (resp?.status === 200) {
        setData(resp.data);
      } else {
        console.log(resp);
      }
    };
    const submitApplication = async () => {
      console.log("check context", JSON.stringify(con))
      const resp = await callService(ApiMethods.POST, ENDPOINT.SUBMIT_APLLICATION, con);
      if (resp?.status === 200) {
        setData(resp.data);
        console.log(resp.data);
        if(resp.data.applicationId != ''){
          navigation.navigate('JobConfirmation');
        }
      } else {
        console.log(resp);
      }
    };
  const onClickApply = (bid) => {
    if(bid === 'init'){
      alert("process init")
      setInit('submit');
      initApplication();
    }else{
    submitApplication();
    
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon = {true} title={'role'} />
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
        // multiline={true}
        placeholder='paste url here'
        style={styles.textInput2}
        onChangeText = {(text)=>setProfileUrl(text)}
        textAlignVertical={'top'}
      />

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
        {(init === 'init')?(
          <Button onPress={() => onClickApply('init')} text={'PROCESS APPLICATION'} type="dark" />
        ):(
          <Button onPress={() => onClickApply('submit')} text={'SUBMIT APPLICATION'} type="dark" />
        )}
        
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default SubmitApplication;
