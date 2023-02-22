import React from "react";
import { View, TouchableOpacity, Image } from 'react-native';
import images from '../../assets/images';
import { ICONS, Text, SVGIcon } from '@components';
import { Colors } from '@styles/colors';
import { styles } from "./styles";


function Header({ navigation, heading }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerHeading}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={images.leftArrow} />
        </TouchableOpacity>
        <View style={{paddingRight: 100}}>
        <Text style={styles.headerText}>{heading}</Text></View>
        {/* <SVGIcon
          name={ICONS.IC_FILTER}
          fill={Colors.oliveBlack}
          style={{ marginRight: 10 }}
        /> */}
      </View>
    </View>
  )
}

export default Header;