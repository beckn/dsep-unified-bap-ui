import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  arrowContainer: ViewStyle;
  calendarContainer: ViewStyle;
  monthText: TextStyle,
  yearText: TextStyle,
  availableDateContainer: ViewStyle,
  availableDateText: TextStyle,
  pointer: ViewStyle
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calendarContainer: { flex: 1, paddingTop: 30 },
  arrowContainer: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.radius.small,
    borderColor: Colors.columbiaBlue,
    borderWidth: 1,
  },
  monthText: {
    fontWeight: Fonts.weight.w4,
    fontSize: Fonts.size.title,
    color: Colors.cardTitle,
    paddingBottom: Metrics.padding.xSmall
  },
  yearText: {
    fontWeight: Fonts.weight.w4,
    fontSize: Fonts.size.base,
    color: Colors.cardDesc
  },

  availableDateContainer: {
    width: 30,
    height: 30,
    backgroundColor: Colors.antiFlashWhite,
    borderRadius: Metrics.radius.small,

  },
  availableDateText: {
    color: Colors.cardTitle,
    fontWeight: Fonts.weight.bold
  },
  pointer: {
    width: 26,
    height: 4,
    backgroundColor: Colors.columbiaBlue,
    alignSelf: 'center',
    opacity: 0.5,
    borderRadius: Metrics.radius.xSmall,
    marginTop: Metrics.margin.small
  }
});
