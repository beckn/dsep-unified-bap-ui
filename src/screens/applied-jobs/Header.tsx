import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Text} from '@components';
import {styles} from './styles';
import {Fonts} from '@styles/fonts';

function Header({heading}) {
  return (
    <View style={styles.header}>
      <View style={[styles.headerHeading, StyleSheet.absoluteFill]}>
        <Text style={styles.headerText}>{heading}</Text>
      </View>
      <View style={styles.rightTextContainer}>
        <Text
          style={styles.rightText}
          fontFamily={Fonts.family.DM_SANS_REGULAR}>
          Remove all
        </Text>
      </View>
    </View>
  );
}

export default Header;
