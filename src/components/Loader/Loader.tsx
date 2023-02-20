import { Colors } from '@styles/colors';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';


const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color={Colors.black} />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});