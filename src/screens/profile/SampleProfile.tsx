import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import { Button, Spacer} from '@components';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '@components/Loader/Loader';

function SampleProfile({navigation}) {
  const {profileInfo, setProfileInfo} = userSkillView();
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName]: any = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail]:any = useState("");
  const [mobile, setMobile]:any = useState("");
  const [data, setData] = useState();

  const [profileUrl, setProfileUrl] = useState("");
  const [id, setId] = useState("");
  // const [value, setValue] = useState("");

const getUser = async () => {
    const fullName = await AsyncStorage.getItem('fullName');
   
    const email = await AsyncStorage.getItem('email');
    const mobileNumber = await AsyncStorage.getItem('phoneNumber');
    setFirstName(fullName);
    setEmail(email);
    setMobile(mobileNumber);
   console.log('fullName', fullName, email);
   getProfile();
}
useEffect(() => {
  setLoader(true);
  async function fetchUser() {
    const user = await getUser();
    console.log('user',user);
  }
  fetchUser();
  
}, [email]);

const getProfile =async () =>{
  console.log("get profile called")
  if(email != ''){
    console.log("get profile email", email)
  let usr = ENDPOINT.GET_USER_PROFILE+'/'+email
  console.log("get profile email", usr)
  const resp = await ProfileCallService(ApiMethods.GET,usr)
  console.log("resp---",resp)
  if (resp?.status == 200 && !!(resp?.data?._id)) {
    console.log("get profile emaillll", JSON.stringify(resp.data))
    let profile = {firstName,lastName, email, mobile, id, profileUrl}
    profile.firstName = resp.data.first_name
    profile.lastName = resp.data.last_name
    profile.email = email
    profile.mobile = resp.data.mobile
    profile.profileUrl = resp.data.full_name
    profile.id = resp.data._id
    let item = {profile}
    console.log("item-->>",item);
    setProfileInfo(item)
    console.log(profileInfo);
    navigation.navigate("Resume");
    setLoader(false)
  } else {
    setLoader(false)
    console.log(resp);
  }
  }else{

  }   
      
      
      
  }

  const onClickApply =async () =>{
    
    let profile = {firstName,lastName, email, mobile, id, profileUrl}
    profile.firstName = firstName
    profile.lastName = lastName
    profile.email = email
    profile.mobile = mobile
    profile.profileUrl = profileUrl
    let date = new Date();

    console.log({
      "_id": "",
      "email": email,
      "first_name": firstName,
      "middle_name": "",
      "last_name": lastName,
      "full_name": profileUrl,
      "mobile": mobile,
      "created_at": date.toString(),
      "last_modofied_at": date.toString()
     
    })

    const resp = await ProfileCallService(ApiMethods.POST,ENDPOINT.USER_PROFILE,
   
      
        {
          "_id": "",
          "email": email,
          "first_name": firstName,
          "middle_name": "",
          "last_name": lastName,
          "full_name": profileUrl,
          "mobile": mobile,
          "created_at": date.toString(),
          "last_modofied_at": date.toString()
         
        });
        if (resp?.status == 200) {
          console.log("resp?.data)",resp?.data)
          setData(resp?.data);
          profile.id = resp.data._id
          let item = {profile}
          console.log("item-->>",item);
          setProfileInfo(item)
          console.log(profileInfo);
          navigation.navigate("Resume");
          console.log("test profile",resp.data);
        } else {
          console.log(resp);
        }
        
        
    }

  return (
    <View>
      {loader ? (
        <Loader />
      ) :(
    <View>
    <NavBar hasBackArrow={true} hasRightIcon = {false}  hasSecondaryRightIcon ={false}  rightIconName ={''} title = {"Profile"}/>
     <View style={styles.container}>
    <Spacer size={20}/>
     <TextInput placeholder="First Name" value={firstName} onChangeText={text => setFirstName(text)} style={styles.inputStyle} />
     <Spacer size={20}/>
     {/* <TextInput placeholder="Middle Name" style={styles.inputStyle} />
     <Spacer size={20}/> */}
     <TextInput placeholder="Last Name" value={lastName} onChangeText={text => setLastName(text)} style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Email" value={email} onChangeText={text => setEmail(text)} style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Mobile Number" value={mobile} onChangeText={text => setMobile(text)}
     keyboardType='numeric'
      style={styles.inputStyle} />
     <Spacer size={20}/>
     {/* <Text style={styles.sectionHeaderText}>Profile</Text> */}
     <TextInput 
        placeholder="Paste LinkedIn Profile URl" 
        style={styles.inputStyle} 
        onChangeText ={(text)=>{setProfileUrl(text)}}
        value={profileUrl}
        
        />
     <Spacer size={40}/>
     <Button onPress={onClickApply} title={'SUBMIT'}  />
     </View>
    </View>
      ) }
      </View>
  );
}

export default SampleProfile;
