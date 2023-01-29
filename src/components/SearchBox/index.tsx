import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';
import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} />
      <TextInput style={styles.input} />
      <SVGIcon name={ICONS.IC_REMOVE} />
    </View>
  );
};
export default SearchBox;
