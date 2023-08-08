import {Colors} from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  labelWrapper: ViewStyle;
  inputContainer: ViewStyle;
  labelText: ViewStyle;
  inputStyleMultiLine: TextStyle;
  inputStyle: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  inputContainer:{ 
    borderRadius: Metrics.radius.small,
    marginBottom :8,
  },
  labelWrapper: {
    alignSelf: 'flex-start',
  },
  labelText: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color : Colors.slotText
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderRadius: Metrics.radius.small,
    marginVertical: Metrics.margin.small,
    paddingHorizontal:10
  },
  inputStyleMultiLine: {
    height: 130,
    borderWidth: 1,
    borderColor: Colors.liteGray,
    borderRadius: Metrics.radius.small,
    marginVertical: Metrics.margin.small,
    paddingHorizontal:10,
    textAlignVertical: 'top'
  },
});
