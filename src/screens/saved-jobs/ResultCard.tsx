import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import {styles} from './styles';

const ResultCard = ({item, onItemPressed}) => {
  console.log(item?.job_id?.comapny);
  return (
    <TouchableOpacity onPress={() => onItemPressed(item)}>
      <View style={styles.resultCardContainer} key={item.id}>
        <View style={styles.organizationRow}>
          <View style={styles.profilleIconContainer}>
            <View style={styles.profileIconOuter}>
              <View style={styles.profileIconInner} />
            </View>
          </View>
          <View style={styles.organizationDetails}>
            <Text style={styles.organizationName}>{item?.job_id?.comapny}</Text>
            <Text style={styles.organizationLocation}>
              {`${item?.job_id?.city}`}
            </Text>
          </View>
          <View style={styles.bookmarkIcon}>
            <Image source={images.vector} />
          </View>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.roleName}>{item?.job_id?.role}</Text>
          <Text
            style={
              styles.roleAttributes
            }>{`${item?.job_id?.location_type}`}</Text>
          <View style={styles.roleHistory}>
            <Text style={styles.rolePostedDate}>
              {item?.job_id?.created_at}
            </Text>
            <Text style={styles.rolePostedBy}>{'test.user@gmail.com'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
