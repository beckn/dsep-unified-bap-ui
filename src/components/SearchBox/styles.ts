import {Colors} from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  searchBox: ViewStyle;
  input: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  searchBox: {
    height: 47.95,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: Metrics.radius.base,
    alignSelf: 'center',
    marginVertical: Metrics.margin.xtiny,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding.small,
  },
  input: {
    flex: 1,
    paddingLeft: Metrics.padding.xSmall,
  },
});
