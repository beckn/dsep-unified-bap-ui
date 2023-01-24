import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from '@interfaces/commonInterfaces';
import {getString} from '../../i18n';

function HomeScreen({navigation}: {navigation: Navigation}) {
  return (
    <View>
      <Text>{getString('key1')}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen;
