import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import {SVGIcon, ICONS} from '@components/SvgIcon';
import {Colors} from '@styles/colors';

type cardDetails = {
  data: Array<{[key: string]: string}>;
  index: number;
};

const MentorCard = ({data, index}: cardDetails) => {
  return (
    <View style={styles.card} key={index}>
      <View style={styles.imageView} />
      <View style={styles.cardSpacing}>
        <Text
          style={styles.nameStyle}
          fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
          {'Akshay shinde'}
        </Text>
        <Text
          style={styles.destinationText}
          fontFamily={Fonts.family.DM_SANS_REGULAR}>
          {'Frontend Architect | Founder - ABC company'}
        </Text>
        <View style={styles.ratingsContainer}>
          <SVGIcon
            name={ICONS.IC_STAR}
            fill={Colors.oliveBlack}
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>{'4.9'}</Text>
        </View>
      </View>
    </View>
  );
};
export default MentorCard;
