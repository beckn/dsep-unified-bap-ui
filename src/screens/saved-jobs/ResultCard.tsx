import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import {styles} from './styles';
import {getTimeDiff} from '@utilz/commonUtils';

const ResultCard = ({item, onItemPressed}) => {
  const getTimeString = (dt: number): string => {
    const timeDiff = getTimeDiff(dt);
    if (timeDiff?.days > 0) {
      return `${timeDiff?.days}d ago`;
    } else if (timeDiff?.hours > 0) {
      return `${timeDiff?.hours}hours ago`;
    } else if (timeDiff?.minutes > 0) {
      return `${timeDiff?.days}minutes ago`;
    } else if (timeDiff?.seconds > 0) {
      return `${timeDiff?.days}seconds ago`;
    } else {
      return 'now';
    }
  };
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
            <Text style={styles.organizationName}>{item?.company}</Text>
            <Text style={styles.organizationLocation}>{`${item?.city}`}</Text>
          </View>
          <View style={styles.bookmarkIcon}>
            <Image source={images.vector} />
          </View>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.roleName}>{item?.role}</Text>
          <Text
            style={
              styles.roleAttributes
            }>{`${item?.job_id?.location_type}`}</Text>
          <View style={styles.roleHistory}>
            <Text style={styles.rolePostedDate}>
              {getTimeString(item?.created_at)}
            </Text>
            <Text style={styles.rolePostedBy}>{'by test.user@gmail.com'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
