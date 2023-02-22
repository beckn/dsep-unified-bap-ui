import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  buttonContainer: ViewStyle;
  heading: TextStyle,
  card: ViewStyle,
  detailsView: ViewStyle,
  desc: TextStyle

};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    paddingHorizontal: 23,
    paddingVertical: 37,
    backgroundColor: Colors.white
  },
  detailsView:{
    flex: 1,
    padding: Metrics.padding.base
  },
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
