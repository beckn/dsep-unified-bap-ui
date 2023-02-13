import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Fonts} from './fonts';
import {Metrics} from './metrics';

type Styles = {
  flex1: ViewStyle;
  flex1Center: ViewStyle;
  baseFontSize: TextStyle;
  paddingHBase: ViewStyle;
  underline: TextStyle;
  alignCenter: ViewStyle;
};

export const commonStyles = StyleSheet.create<Styles>({
  flex1: {
    flex: 1,
  },
  flex1Center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseFontSize: {
    fontSize: Fonts.size.header,
  },
  paddingHBase: {
    paddingHorizontal: Metrics.padding.base,
  },
  underline: {textDecorationLine: 'underline'},
  alignCenter: {
    alignItems: 'center',
  }
});
