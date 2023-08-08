import {ICONS, SVGIcon} from '@components/SvgIcon';
import {Colors} from '@styles/colors';
import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

const SearchBox = ({value, onSearch, ...props}) => {
  return (
    <View style={styles.searchBox}>
      <SVGIcon name={ICONS.IC_SEARCH} fill={Colors.white} />
      <TextInput onChangeText={(value)=>{onSearch(value)}} style={styles.input} value = {value} {...props}/>
      <SVGIcon name={ICONS.IC_REMOVE} />
    </View>
  );
};
export default SearchBox;
