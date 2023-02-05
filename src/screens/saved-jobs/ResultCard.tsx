import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import {styles} from './styles';

const ResultCard = ({item, onItemPressed}) => {
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
            <Text style={styles.organizationName}>{item.company}</Text>
            <Text style={styles.organizationLocation}>
              {`${item.city}, ${item.country}`}
            </Text>
          </View>
          <View style={styles.bookmarkIcon}>
            <Image source={images.vector} />
          </View>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.roleName}>{item.skills}</Text>
          <Text style={styles.roleAttributes}>
            {`${item.type1} . ${item.type2} . ${item.type3}`}
          </Text>
          <View style={styles.roleHistory}>
            <Text style={styles.rolePostedDate}>{item.postedOn}</Text>
            <Text style={styles.rolePostedBy}>{item.byWhom}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
