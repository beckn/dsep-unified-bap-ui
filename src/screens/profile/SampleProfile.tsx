import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENDPOINT } from '@services/endpoints';
import { ApiMethods } from '@constant/common.constant';
import { styles } from './styles';
import { userSkillView } from '@context';
import { callService, ProfileCallService } from '@services';
import { Button, Spacer } from '@components';
import NavBar from '@components/Navbar';
import Loader from '@components/Loader/Loader';
import Input from '@components/Input';

function SampleProfile({ navigation }) {
  const { profileInfo, setProfileInfo } = userSkillView();
  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    setLoader(true);

    async function fetchUserData() {
      try {
        const fullName = await AsyncStorage.getItem('fullName');
        const userEmail = await AsyncStorage.getItem('email');
        const mobileNumber = await AsyncStorage.getItem('phoneNumber');

        setFirstName(fullName);
        setEmail(userEmail);
        console.log('userEmail --------- ', userEmail)
        setMobile(mobileNumber);

        if (userEmail) {
          await getProfileData(userEmail);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoader(false);
      }
    }

    fetchUserData();
  }, []);

  async function getProfileData(userEmail) {
    try {
      const response = await ProfileCallService(ApiMethods.GET, `${ENDPOINT.GET_USER_PROFILE}/${userEmail}`);
      if (response?.status === 200 && response?.data?._id) {
        const { data } = response;
        const updatedProfile = {
          firstName: data.first_name,
          lastName: data.last_name,
          email: userEmail,
          mobile: data.mobile,
          id: data._id,
          profileUrl: data.full_name,
        };

        const updatedProfileInfo = { profile: updatedProfile };
        setProfileInfo(updatedProfileInfo);
        navigation.navigate("Resume");
        
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setLoader(false);
    }
  }

  async function onClickApply() {
    try {
      const date = new Date();
      const profileData = { 
        "_id": profileInfo?.id  || "",
        "email": email,
        "first_name": firstName,
        "middle_name": "",
        "last_name": lastName,
        "full_name": profileUrl,
        "mobile": mobile,
        "created_at": date.toString(),
        "last_modified_at": date.toString(),
      };

      console.log('url ----------------- | ',ENDPOINT.USER_PROFILE)
      console.log('profileData ----------------- | ',profileData)

      const response = await ProfileCallService(ApiMethods.POST, ENDPOINT.USER_PROFILE, profileData);

      if (response?.status === 200) {
        const updatedProfile = {
          ...profileData,
          id: response.data._id,
        };

        const updatedProfileInfo = { profile: updatedProfile };
        setProfileInfo(updatedProfileInfo);
        navigation.navigate("Resume");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error applying profile:', error);
    }
  }

  // Conditional rendering using early returns
  if (loader) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar hasBackArrow={true} hasRightIcon={false} hasSecondaryRightIcon={false} rightIconName={''} title={"Profile"} />
      <View style={styles.container}>
        <Spacer size={20} />
        {/* Input components */}
        <Input label={'First Name'} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <Input label={'Last Name'} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <Input label={'Email'} placeholder="Email" value={email} keyboardType='email-address' onChangeText={setEmail} />
        <Input label={'Mobile Number'} placeholder="Mobile Number" value={mobile} keyboardType='numeric' onChangeText={setMobile} />
        <Input label={'LinkedIn URL'} placeholder="Paste LinkedIn Profile URL" value={profileUrl} keyboardType='url' onChangeText={setProfileUrl} />
        <Spacer size={40} />
        <Button onPress={onClickApply} title={'SUBMIT'} />
      </View>
    </View>
  );
}

export default SampleProfile;
