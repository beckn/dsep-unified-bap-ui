import React from 'react';
import {View, Button} from 'react-native';
import {Navigation} from '@interfaces/commonInterfaces';
import {Text} from '@components/text';
import {getString} from '@i18n';
import {commonStyles} from '@styles/commonStyles';

function HomeScreen({navigation}: {navigation: Navigation}) {
  return (
    <View>
      <Text style={commonStyles.baseFontSize}>{getString('key1')}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen;
