import React from 'react';
import {View} from 'react-native';
import {ICONS, Text, SVGIcon} from '@components';
import {styles} from './styles';
import {Colors} from '@styles/colors';
import { Fonts } from '@styles/fonts';
import  Spacer  from "../Spacer";

type titleCardDetails ={
    title : string,
    desc : string
}

  const TitleCard = ({title,desc} : titleCardDetails) => {
  return (
    <>
           <View style={styles.card}>
          <Text
            fontFamily={Fonts.family.DM_SANS_REGULAR}
            style={styles.heading}>
            {title}
          </Text>
          <Text fontFamily={Fonts.family.DM_SANS_REGULAR} style={styles.desc}>{desc}</Text>
        </View>
        <Spacer />
        </>
  );
};
export default TitleCard