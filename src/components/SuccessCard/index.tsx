import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import Rating from '@components/Ratings';
import {SVGIcon,ICONS} from '@components/SvgIcon'

type cardDetails = {
  title: string;
  primaryText: string;
  secondaryText?: string;
};

const SuccessCard = ({title,primaryText,secondaryText}: cardDetails) => (
  <View style={styles.card}>
    <SVGIcon name={ICONS.IC_ILLUSTRATION}/>
    <View style={styles.textContainer}>
      <Text
        style={styles.cardTitle}
        fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
        
        {title}
      </Text>
      <Text
        style={styles.cardDesc}
        fontFamily={Fonts.family.DM_SANS_REGULAR}>
        {primaryText}
      </Text>
      {
        secondaryText &&
        <Text
        style={styles.cardDesc}
        fontFamily={Fonts.family.DM_SANS_REGULAR}>
        {secondaryText}
      </Text>
      }
      
    </View>
  </View>
);
export default SuccessCard;
