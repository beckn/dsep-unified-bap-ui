import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {

  heading: TextStyle,
  card: ViewStyle,

  desc: TextStyle

};

export const styles = StyleSheet.create<Styles>({

  heading: {
    color: Colors.slotText,
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.bold
  },
  desc:{
    color: Colors.cardDesc,
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4
  },
  card: {
    // minHeight:100,
    justifyContent: 'space-evenly'
  },
});
