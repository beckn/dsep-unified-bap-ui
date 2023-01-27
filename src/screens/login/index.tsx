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
    </View>
  );
}

export default LoginScreen;
