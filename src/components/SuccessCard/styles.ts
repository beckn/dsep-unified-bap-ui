import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  card: ViewStyle,
  textContainer: ViewStyle,
  cardTitle: TextStyle,
  cardDesc: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  card: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    paddingTop: 46,
    backgroundColor: Colors.background,
  },
  textContainer: {
    paddingTop: 14,
    alignItems: "center",
    justifyContent: "center",
    width:"60%"
  },
  cardTitle:{
    color: Colors.sucessCardTitle,
    fontWeight: Fonts.weight.bold,
    paddingBottom: Metrics.padding.small
  },
  cardDesc:{
    color: Colors.descText,
    paddingBottom: Metrics.padding.small,
    textAlign:"center"
  },
});
