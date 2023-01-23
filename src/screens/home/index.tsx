import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from '@interfaces/commonInterfaces';

function HomeScreen({navigation}: {navigation: Navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen;
