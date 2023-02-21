import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import { Button, Spacer} from '@components';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import AsyncStorage from '@react-native-async-storage/async-storage';


function SampleProfile({navigation}) {
  const {profileInfo, setProfileInfo} = userSkillView();
  const [firstName, setFirstName]: any = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail]:any = useState("");
  const [mobile, setMobile]:any = useState("");
  const [data, setData] = useState();
 
const getUser = async () => {
    const fullName = await AsyncStorage.getItem('fullName');
   
    const email = await AsyncStorage.getItem('email');
    const mobileNumber = await AsyncStorage.getItem('phoneNumber');
    setFirstName(fullName);
    setEmail(email);
    setMobile(mobileNumber);
   console.log('fullName', fullName, email);
    
}
useEffect(() => {
  async function fetchUser() {
    const user = await getUser();
    console.log('user',user);
  }
  fetchUser();
}, []);

  const onClickApply =async () =>{
    let profile = {firstName,lastName, email, mobile}
    profile.firstName = firstName
    profile.lastName = lastName
    profile.email = email
    profile.mobile = mobile
    let item = {profile}
    console.log("item-->>",item);
      setProfileInfo(item)
      console.log(profileInfo);
       const resp = await callService(ApiMethods.POST,ENDPOINT.USER_PROFILE,
        {
          _id: "5f92cbf10cf217478ba93561",
          email: email,
          first_name: firstName,
          middle_name: "",
          last_name: lastName,
          full_name: "",
          mobile: mobile,
          created_at: "2023-01-27T07:10:30Z",
          last_modofied_at: "2023-01-27T07:10:30Z"
         
        });
        if (resp?.status == 200) {
          setData(resp?.data);
         
        } else {
          console.log(resp);
        }
        navigation.navigate("Resume");
    }

  return (
    <View>
    <NavBar hasBackArrow={true} hasRightIcon = {true}  hasSecondaryRightIcon ={true}  rightIconName ={''} title = {"Profile"}/>
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
     {/* <TextInput placeholder="Alternate Mobile Number" style={styles.inputStyle} /> */}
     <Spacer size={40}/>
     <Button onPress={onClickApply} title={'SUBMIT'}  />
     </View>
    </View>
  );
}

export default SampleProfile;
