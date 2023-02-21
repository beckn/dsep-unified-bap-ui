import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Text} from '@components';
import {styles} from './styles';
import {Fonts} from '@styles/fonts';
import {SVGIcon, ICONS} from '@components/SvgIcon';
import { Colors } from "@styles/colors";
import images from '../../assets/images';

function Header({ navigation, heading, onPress, count }) {

  return (
    <View >
    <View style={styles.header}>
      <View style={[styles.headerHeading, StyleSheet.absoluteFill]}>
      {/* <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity> */}
        <Text style={styles.headerText}>{heading}</Text>
      </View>
      </View>
      <View style={styles.headerHeading}>
        <Text> {count} Results Found</Text>
        
      <View style={styles.rightTextContainer}>
      {/* <TouchableOpacity onPress={onPress}>
        <SVGIcon
          name={ICONS.IC_FILTER}
          fill={Colors.oliveBlack}
          style={{ marginRight: 10 }}
        /></TouchableOpacity> */}
      </View>
    </View>
    </View>
  );
}

export default Header;
