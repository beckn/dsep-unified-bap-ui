import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

type cardDetails = {
  data: Array<{[key: string]: string}>;
  index: number;
  onPress?: () => void;
};

const ScholarshipCard = ({data, index, onPress}: cardDetails) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} key={index} onPress={() => onPress(data)}>
      <View style={styles.imageView} />
      <View style={styles.cardSpacing}>
        <View style = {styles.detailsContainer}>
          <Text
            style={styles.nameStyle}
            fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
            {data.name}
          </Text>
          <Text
            style={styles.designationText}
            fontFamily={Fonts.family.DM_SANS_REGULAR}>
            {data.duration}
          </Text>
        </View>
        <Text style={styles.provider}>{"by " + data.provider.name}</Text>
      </View>
      
     
       
      
    </TouchableOpacity>
  );
};
export default ScholarshipCard;