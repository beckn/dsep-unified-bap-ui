import Rating from '@components/Ratings';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type DetailHeaderDetails = {
  title: string;
  description?: string;
  ratings?: string;
  borderBottom? : boolean;
  rating?: string
};

const DetailHeader = ({title, description, rating ,borderBottom}: DetailHeaderDetails) => {
  return (
    <>
      <View style={styles.topSection}>
        {rating ? (
          <View style={styles.ratingContainer}>
            <Rating rating = {rating} />
          </View>
        ) : null}
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle} />
        </View>
        <View style={[styles.textContainer,borderBottom && styles.borderBottom]}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </>
  );
};
export default DetailHeader;
