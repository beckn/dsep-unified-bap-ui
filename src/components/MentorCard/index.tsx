import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import Rating from '@components/Ratings';

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
          style={styles.designationText}
          fontFamily={Fonts.family.DM_SANS_REGULAR}>
          {'Frontend Architect | Founder - ABC company'}
        </Text>
        <Rating rating={'4.9'} />
      </View>
    </View>
  );
};
export default MentorCard;
