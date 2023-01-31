import React from 'react';
import {View} from 'react-native';
import {SVGIcon, ICONS} from '@components/SvgIcon';
import {styles} from './styles';
import {Text} from '@components/Text';
import {Fonts} from '@styles/fonts';
import {
  useNavigation,
} from '@react-navigation/native';
import {Navigation} from '@interfaces/commonInterfaces';

type NavabarDetails = {
  title?: string;
  hasBackArrow?: boolean;
  hasRightIcon?: boolean;
};

const NavBar = ({title, hasBackArrow, hasRightIcon}: NavabarDetails) => {
  const navigation: Navigation = useNavigation();

  const onBackArrowPress = (): void => {
    navigation?.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        {hasBackArrow && (
          <SVGIcon name={ICONS.IC_BACK_ARROW} onPress={onBackArrowPress} />
        )}
      </View>
      <View style={styles.titleContainer}>
        {title && (
        <Text
          fontFamily={Fonts.family.DM_SANS_REGULAR}
          style={styles.titleText}>
          {title}
        </Text>
        )}
      </View>
      <View style={styles.rightIconContainer}>
        {hasRightIcon && <SVGIcon name={ICONS.IC_OPTIONS} />}
      </View>
    </View>
  );
};
export default NavBar;
