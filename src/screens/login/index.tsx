import React from 'react';
import {View, Text, Button} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title="Go to Mentoring List"
        onPress={() => navigation.navigate('MentoringList')}
      />
      <Button
        title="Go to Training"
        onPress={() => navigation.navigate('Training')}
      />
      <View style={{height:20}}></View>
       <Button
        title="Go to Scholarships & Grants"
        onPress={() => navigation.navigate('Scholarships')}
      />
      <View style={{height:20}}></View>
       <Button
        title="Go to Jobs and Internships"
        onPress={() => navigation.navigate('Jobs')}
      />
    </View>
  );
}

export default LoginScreen;
