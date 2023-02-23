import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import images from '../../assets/images';

type cardDetails = {
  data: Array<{[key: string]: string}>;
  index: number;
  onPress?: () => void;
  onButtonClick?: ()=>void;
};

const ScholarshipCard = ({data, index, onPress, onButtonClick}: cardDetails) => {
  const navigation = useNavigation();
  console.log('dataqqqqqqa', data);
  
  return (
    <TouchableOpacity style={styles.card} key={index} onPress={onPress}>
      <View style={styles.imageView} />
      <View style={styles.cardSpacing}>
        <View style = {styles.detailsContainer}>
          <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
         <View>
         <Text
            style={styles.nameStyle}
            fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
            {data?.name}
          </Text>
         </View>
          <View>
          <View style = {styles.bookmarkIcon}>
            <TouchableOpacity
            style={{backgroundColor: (data?.userSavedItem)? 'red' : 'white'}}
            onPress={() => onButtonClick(data)}>
            <Image source={images.vector} />
            </TouchableOpacity>
          </View>
          </View>
          </View>
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