import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import { Button, Spacer} from '@components';
import NavBar from '@components/Navbar';


function SampleProfile({navigation}) {
  return (
    <View>
    <NavBar hasBackArrow={true} hasRightIcon = {true}  hasSecondaryRightIcon ={true}  rightIconName ={''} title = {"Profile"}/>
     <View style={styles.container}>
    <Spacer size={20}/>
     <TextInput placeholder="First Name" style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Middle Name" style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Last Name" style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Email" style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Mobile Number" style={styles.inputStyle} />
     <Spacer size={20}/>
     <TextInput placeholder="Alternate Mobile Number" style={styles.inputStyle} />
     <Spacer size={40}/>
     <Button onPress={()=>{}} title={'SUBMIT'}  />
     </View>
    </View>
  );
}

export default SampleProfile;
