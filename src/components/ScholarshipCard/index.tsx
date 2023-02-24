import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Text} from '@components';
import {Fonts} from '@styles/fonts';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images';



type cardDetails = {
  data: Array<{[key: string]: string}>;
  index: number;
  onPress?: () => void;
};

const ScholarshipCard = ({data, index, onButtonClick, onPress}: cardDetails) => {
  console.log("ScholarshipCard", JSON.stringify(data))
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
       
      </View>
      <View style = {styles.bookmarkIcon}>
            <TouchableOpacity 
           // disabled={data?.userSavedItem}
            style={{
             // backgroundColor: (data?.userSavedItem)? 'red' : 'white'
            }}
            onPress={() => onButtonClick(data)}>
            <Image source={images.vector} />
            </TouchableOpacity>
            </View>
    </TouchableOpacity>
  );
};
export default ScholarshipCard;
