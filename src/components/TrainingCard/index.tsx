import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Text } from '@components';
import { Fonts } from '@styles/fonts';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import images from '../../assets/images';


type cardDetails = {
  data: Array<{ [key: string]: string }>;
  index: number;
  onButtonClick,
  onPress?: () => void;
};

const ScholarshipCard = ({ data, index, onButtonClick, onPress }: cardDetails) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} key={index} onPress={() => onPress(data)}>
      <View style={styles.imageView} />
      <View style={styles.cardSpacing}>
        <View style={styles.detailsContainer}>
          <View style={styles.titleSubTitleWrapper}>
            <Text
              style={styles.nameStyle}
              fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
              {data.name}
            </Text>
            <Text
              style={styles.designationText}
              fontFamily={Fonts.family.DM_SANS_REGULAR}>
              Duration : {data.duration}
            </Text>
          </View>
          <View style={styles.providerContainer}>
            <Text style={styles.provider}>{"by " + data.provider.name}</Text>
          </View>
        </View>

        {/* <View style={styles.bookmarkIcon}>
          <TouchableOpacity
            // disabled={data?.userSavedItem}
            style={{
              // backgroundColor: (data?.userSavedItem)? 'red' : 'white'
            }}
            onPress={() => onButtonClick(data)}>
            <Image source={images.vector} />
          </TouchableOpacity>
        </View> */}
      </View>




    </TouchableOpacity>
  );
};
export default ScholarshipCard;