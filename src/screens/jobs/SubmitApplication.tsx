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
import DocumentPicker from 'react-native-document-picker';
import { ReqContextView } from '@context';
import Loader from '@components/Loader/Loader';


function SubmitApplication({navigation, route}: {navigation: Navigation, route: any}) {
    const { initContext, role, comp, loc } = route.params;
    const [upload , setUpload]= useState(true);
    const { reqData, headerData,  } = ReqContextView();
    const [singleFile, setSingleFile] = useState('');
    const [data, setData] = useState([]);
    const [init, setInit] = useState('init');
    const {languages, skills, profileInfo} = userSkillView();
    const [loader, setLoader] = useState(false);
    const [exp, setExp] = useState('');
    const [sop, setSop] = useState('');
    const [resumeUri, setResumeUri] = useState('');
    const [fileName, setFileName] = useState('');
    const [profileUrl, setProfileUrl] = useState("https://linkedin.com/john-doe");
    
    useEffect(() => {
      // getData()
    }, []);

    const initContext2 = {
     ...reqData,
      "jobFulfillments": [
        {
          "JobFulfillmentCategoryId": "1",
          "jobApplicantProfile": {
            "name":profileInfo.profile? profileInfo.profile.firstName : 'name empty',
            "languages": languages,
          "profileUrl": profileUrl,
          "skills": skills
            
          }
        }
      ],
      "additionalFormData": {
        "submissionId": "123456",
        "data": [
          {
            "formInputKey": "resume",
            "formInputValue": resumeUri
          },
          {
            "formInputKey": "exp-years",
            "formInputValue": exp
          },
          {
            "formInputKey": "sop",
            "formInputValue": sop
           }
        ]
      }
    }
    
    const initApplication = async () => {
      console.log("check init", JSON.stringify(initContext))
      console.log("check req", JSON.stringify(initContext2))
      if(languages.length > 0 ){
      setLoader(true);
      const resp = await callService(ApiMethods.POST, ENDPOINT.INIT_APLLICATION, initContext2);
      if (resp?.status === 200) {
        setData(resp.data);
        setInit('submit');
        console.log("check response", JSON.stringify(resp))
        if(resp.data != ''){
          console.log("check resp data", JSON.stringify(resp.data))
          setLoader(false);
         navigation.navigate('ConfirmApplication', {respData:resp.data, fileName:fileName, exp: exp, sop: sop});
         }
        
      } else {
        console.log(resp);
        setLoader(false);
      }
    }else{
      alert("please provide Additional details")
      navigation.navigate('Resume');
    }
    };
    
  const onClickApply = (bid) => {
    
   initApplication();
  };


  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    console.log('res : ' + "function call ok");
   
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.plainText, DocumentPicker.types.doc, DocumentPicker.types.docx]
      })
      
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res[0].uri);
      // console.log('Type : ' + res[0].type);
      // console.log('File Name : ' + res[0].name);
      // console.log('File Size : ' + res[0].size);
      // Setting the state to show single file attributes
      setUpload(!upload)
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



  return (
    <ScrollView>
      {loader ? (
        <View style={{ alignItems:  'center', justifyContent: 'center', alignContent: 'center', paddingTop:200 }}>
        <Loader /></View>
      ) :(
        <View>
      <SafeAreaView style={styles.container}>
      
      <NavBar hasBackArrow={true} hasRightIcon = {false} title={headerData.role} />
      <DetailHeader
        // rating="4.9"
        title={headerData.company}
        description={headerData.location}
        //heading="Senior Fulltime Remote"
        // time="1 days"
      />
      <View style={styles.body}>
      {/* <Text style={styles.heading}>{'Saved Resume'}</Text> */}
      <Spacer />
      {/* <View style={styles.saveResume}>
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
      </View> */}
      <Spacer />
      {/* <Text style={{textAlign:'center'}}>{'or'}</Text> */}
      <Text style={styles.heading}>{'Upload  a New Resume'}</Text>
      <Spacer />
      <Text>{'Add your CV/Resume to apply for a job'}</Text>
      <Spacer />
      <View>
     
       {upload ?(
       <TouchableOpacity onPress={selectOneFile}>
       <ImageBackground source={images.rectangle} resizeMode="cover" style={{ flex: 1,width:'100%', height:81, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        {/* <Image source={im}/> */}
        <SVGIcon name={ICONS.IC_UPLOAD} onPress={()=>{}} />
        <Text style={{textAlign:'center'}}>{'Upload CV/Resume'} {upload}</Text>
        </ImageBackground>
        </TouchableOpacity>
        ):( <>
        <TouchableOpacity onPress={() => setUpload(!upload)}>
        <View style={styles.uplodedResume}>
        <>
        <View style={styles.resumeLeftPart}>
        <Image source={images.pdf}/>
        
        </View>
        <View style={styles.resumeRightPart}>
            
            <Spacer  size={3}/>
          <View style={styles.row}>
            {/* {singleFile != undefined ?(singleFile.map(item => {
              return(<Text>{item.name}</Text>) } )
            ):(<View></View>)
            } */}
          <Text>{fileName}</Text>
         
          </View>
          <Text style={{top:5, color:'#000'}}>{upload}   {'Remove'}</Text>
        </View>
        </>
        
        </View>
        </TouchableOpacity>
        </>
        )}
      
      <Spacer />
      
      </View>
      <Text style={styles.heading}>{'Information'}</Text>
      <Spacer />
    

<Spacer />
      <TextInput 
        // multiline={true}
        placeholder=' Enter Your Experience'
        style={styles.textInput2}
        onChangeText = {(text)=>setExp(text)}
        textAlignVertical={'top'}
      />

<Spacer />
      <TextInput 
        multiline={true}
        placeholder='Explain why you are the right person for this job'
        style={styles.textInput}
        onChangeText = {(text)=>setSop(text)}
        textAlignVertical={'top'}
      />
      </View>
     
      </SafeAreaView>
      <View style={styles.bottom}>
          <Button onPress={() => onClickApply('init')} text={'PROCESS APPLICATION'} type="dark" />
        
        <Spacer size={10} />
      </View>
       </View>
       ) }
    </ScrollView>
  );
}

export default SubmitApplication;
