import { ICONS, SVGIcon } from '@components/SvgIcon';
import { Colors } from '@styles/colors';
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import DatePicker from 'react-native-date-picker';

const DatePickerButton = ({ value, onSelect, label }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.buttonWrapper}>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelText}>{ label || 'Select Date'}</Text>
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>{value || 'Select Date'}</Text>
          <SVGIcon name={ICONS.IC_CALENDER} />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={modalVisible}
        mode={'date'}
        date={new Date(value)}
        onConfirm={(date) => onSelect(date)}
        // maximumDate={new Date()}
        onCancel={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </>
  );
};
export default DatePickerButton;
