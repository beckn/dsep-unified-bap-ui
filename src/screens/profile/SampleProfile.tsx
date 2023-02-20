import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {styles} from './styles';
import { Button, Spacer} from '@components';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';


function SampleProfile({navigation}) {
  const {profileInfo, setProfileInfo} = userSkillView();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState();
  const [profileUrl, setProfileUrl] = useState("");
  const [id, setId] = useState("");
  // const [value, setValue] = useState("");

  const onClickApply =async () =>{
    let profile = {firstName,lastName, email, mobile, id, profileUrl}
    profile.firstName = firstName
    profile.lastName = lastName
    profile.email = email
    profile.mobile = mobile
    profile.profileUrl = profileUrl

    const resp = await ProfileCallService(ApiMethods.POST,ENDPOINT.USER_PROFILE,
        {
          "_id": "",
          "email": email,
          "first_name": firstName,
          "middle_name": "",
          "last_name": lastName,
          "full_name": profileUrl,
          "mobile": mobile,
          "created_at": new Date(),
          "last_modofied_at": new Date()
         
        });
        if (resp?.status == 200) {
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
        placeholder="Paste Linked in Profile URl" 
        style={styles.inputStyle} 
        onChangeText ={(text)=>{setProfileUrl(text)}}
        value={profileUrl}
        
        />
     <Spacer size={40}/>
     <Button onPress={onClickApply} title={'SUBMIT'}  />
     </View>
    </View>
  );
}

export default SampleProfile;
