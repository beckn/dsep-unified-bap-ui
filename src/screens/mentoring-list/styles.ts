import { Colors } from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  searchBoxContainer: ViewStyle,
  listContainer: ViewStyle,
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchBoxContainer: {
    paddingTop: Metrics.padding.base,
    paddingHorizontal: Metrics.padding.base,
  },
  listContainer: {paddingTop: 34, paddingHorizontal: 22, paddingBottom: 31 }
});
