import React from 'react';
import {View} from 'react-native';
import {ICONS, Text, SVGIcon} from '@components';
import {styles} from './styles';
import {Colors} from '@styles/colors';
import { Fonts } from '@styles/fonts';

type ratingDetails ={
  rating : string
}

  const Rating = ({rating} : ratingDetails) => {
  return (
    <View style={styles.ratingsContainer}>
      <SVGIcon
        name={ICONS.IC_STAR}
        fill={Colors.oliveBlack}
        style={styles.starIcon}
      />
      <Text style={styles.ratingText} fontFamily={Fonts.family.OPEN_SANS_REGULAR}>{rating}</Text>
    </View>
  );
};
export default Rating