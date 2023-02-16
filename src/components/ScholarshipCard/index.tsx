import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

type cardDetails = {
  data: Array<{[key: string]: string}>;
  index: number;
  onPress?: () => void;
};

const ScholarshipCard = ({data, index, onPress}: cardDetails) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} key={index} onPress={onPress}>
      <View style={styles.imageView} />
      <View style={styles.cardSpacing}>
        <Text
          style={styles.nameStyle}
          fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
          {data?.description}
        </Text>
        <Text
          style={styles.designationText}
          fontFamily={Fonts.family.DM_SANS_REGULAR}>
          {data?.scholarshipDetails?.academicQualifications?.[0].value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ScholarshipCard;
