import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
// import Button from '@components/AppButton';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import images from '../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginScreen({navigation}) {
  useEffect(() => {
    GoogleSignin.configure({
        webClientId:
          '153318683305-qj2l6jk77jvm2q30fb0929perhr2hh9v.apps.googleusercontent.com',     
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('user auth state changed', user);
    AsyncStorage.setItem('fullName',user?.displayName);
    AsyncStorage.setItem('email',user?.email);
    AsyncStorage.setItem('phoneNumber',user?.phoneNumber);
    AsyncStorage.setItem('photoURL',user?.photoURL);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('idtoken', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    AsyncStorage.setItem('accessToken', idToken);
    console.log('googleCredential===>>>', googleCredential);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onGoogleSignOut = () => {
    GoogleSignin.signOut()
      .then(res => {
        console.log('signed out', res);
        AsyncStorage.setItem('accessToken', "");
      })
      .catch(err => {
        console.log('sign out error', err);
      });
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Dashboard')}
      />
      
     
      
      
      {/* <View style={{height:600}}></View> */}
      
      <View style={styles.bottom}>
        <TouchableOpacity 
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
        style={{backgroundColor: 'black', height: 50, padding: 10, borderRadius: 5}}>
          <Image source={images.signin}></Image>
          </TouchableOpacity>
        {/* <Button onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        } text={'Google Sign-In'} type="dark" />
        <Spacer size={10} /> */}
      </View>
     
     
      <Button
        title="Go to  Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Go to purchase history"
        onPress={() => navigation.navigate('SearchResult')}
      />
      <Button
        title="Go to saved jobs"
        onPress={() => navigation.navigate('SavedJobs')}
      />
       <View style={{height: 20}}></View>
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
       <View style={{height: 20}}></View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('SampleProfile')}
      />
       <View style={{height: 20}}></View>
      <Button
        title="Go to Scholarships"
        onPress={() => navigation.navigate('Scholarships')}
      />
       <View style={{height: 20}}></View>
      <Button
        title="Go to Mentor"
        onPress={() => navigation.navigate('Mentorships')}
      />
    </View>
  );
}

export default LoginScreen;
