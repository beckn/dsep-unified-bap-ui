import { ICONS, SVGIcon } from '@components/SvgIcon';
import { Colors } from '@styles/colors';
import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './styles';
import DatePicker from 'react-native-date-picker';

const Input = ({ value, label, onChangeText, placeholder, multiline=false, numberOfLines=4 }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={multiline? styles.inputStyleMultiLine : styles.inputStyle}
        multiline 
        numberOfLines={numberOfLines}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default Input;
