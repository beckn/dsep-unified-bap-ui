import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.inputStyle} />
      <TextInput placeholder="Email" style={styles.inputStyle} />
      <TextInput placeholder="Phone" style={styles.inputStyle} />
    </View>
  );
}

export default ProfileScreen;
