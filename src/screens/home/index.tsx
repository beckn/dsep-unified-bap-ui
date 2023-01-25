import React from 'react';
import {View, Button} from 'react-native';
import {Navigation} from '@interfaces/commonInterfaces';
import {Text} from '@components/text';
import {getString} from '@i18n';
import {commonStyles} from '@styles/commonStyles';
import {Fonts} from '@styles/fonts';

function HomeScreen({navigation}: {navigation: Navigation}) {
  return (
    <View>
      <Text style={commonStyles.baseFontSize}>{getString('key1')}</Text>
      <Text
        fontFamily={Fonts.family.DM_SANS_REGULAR}
        style={{fontSize: 16, color: 'red'}}>
        This is DMSans-Regular
      </Text>
      <Text style={{fontSize: 16, color: 'green'}}>
        This is OpenSans-Regular
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <View style={{height:15}}></View>
      <Button
        title="Go to Description"
        onPress={() => navigation.navigate('Description')}
      />
      <View style={{height:15}}></View>
      <Button 
       title= "Go to Lesson Plan"
       onPress={() => navigation.navigate('LessonPlan')}
      />
      <View style={{height:15}}></View>
      <Button 
       title= "Go to Debit"
       onPress={() => navigation.navigate('Debit')}
      />
    </View>
  );
}

export default HomeScreen;
