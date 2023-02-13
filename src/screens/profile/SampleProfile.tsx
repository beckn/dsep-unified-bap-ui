import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import { Button, Spacer} from '@components';
import NavBar from '@components/Navbar';
import { userSkillView } from '@context';

function SampleProfile({navigation}) {
  const {profileInfo, setProfileInfo} = userSkillView();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  // const [al, setValue] = useState("");
  // const [value, setValue] = useState("");
  // const [value, setValue] = useState("");

  const onClickApply =() =>{
    
    let profile = {firstName,lastName, email, mobile}
    profile.firstName = firstName
    profile.lastName = lastName
    profile.email = email
    profile.mobile = mobile
    let item = {profile}
    console.log(item);
      setProfileInfo(item)
      console.log(profileInfo);
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
