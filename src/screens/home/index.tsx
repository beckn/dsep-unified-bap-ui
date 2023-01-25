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
