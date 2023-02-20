

import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Text } from '..';


const NoData = ({message}) => {
  return (
    <View style={styles.emptyView}>
    <Text style={styles.emptyText}>{message}</Text>
    </View>
  );
};
export default NoData;

const styles = StyleSheet.create({
    emptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyText: {
        fontSize: Fonts.size.title,
        color: Colors.cardTitle
      },
});