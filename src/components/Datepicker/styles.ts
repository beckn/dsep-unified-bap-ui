import {Colors} from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  buttonWrapper: ViewStyle;
  button: ViewStyle;
  labelWrapper: ViewStyle;
  labelText: ViewStyle;
  input: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  buttonWrapper: {
   flex: 1,
  },
  labelWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
      flexDirection: 'row',
      height: 50,
      paddingHorizontal: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor : Colors.liteGray,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical : 5
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
  input: {
    flex: 1,
    paddingLeft: Metrics.padding.xSmall,
  },
});
