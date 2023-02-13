import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function LoginScreen({navigation}) {
  useEffect(() => {
    GoogleSignin.configure({});
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('user auth state changed', user);
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

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onGoogleSignOut = () => {
    GoogleSignin.signOut()
      .then(res => {
        console.log('signed out', res);
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
      <Button title="Google Sign-Out" onPress={onGoogleSignOut} />
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      <Button
        title="Go to Mentoring List"
        onPress={() => navigation.navigate('MentoringList')}
      />
      <Button
        title="Go to Training"
        onPress={() => navigation.navigate('Training')}
      />
      <View style={{height: 20}}></View>
      <Button
        title="Go to Scholarships & Grants"
        onPress={() => navigation.navigate('Scholarships')}
      />
      <View style={{height: 20}}></View>
      <Button title="Go to Jobs and Internships" />
      <View style={{height: 20}}></View>
      <Button
        title="Go to Tutoring & Mentorships"
        onPress={() => navigation.navigate('Mentorships')}
      />
      <View style={{height: 20}}></View>
      <Button title="Go to Jobs" onPress={() => navigation.navigate('Jobs')} />
      <Button
        title="Go to Dev-Screen"
        onPress={() => navigation.navigate('DevScreen')}
      />
      <View style={{height: 20}}></View>
      <Button
        title="Go to scholarship list screen"
        onPress={() => navigation.navigate('ScholarshipList')}
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
    </View>
  );
}

export default LoginScreen;
