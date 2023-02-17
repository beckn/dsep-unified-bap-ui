import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  slotView: ViewStyle;
  dateText: TextStyle;
  slotText: ViewStyle,
  slotContainer: ViewStyle,
  buttonContainer: ViewStyle,
  selectedSlot: ViewStyle
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  slotView: {
    flex: 1,
    padding: Metrics.padding.base
  },
  dateText: {
    paddingTop: Metrics.padding.medium,
    paddingBottom: 31,
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.medium,
    color: Colors.slotText
  },
  slotText: {
    color: Colors.descText
  },
  slotContainer: {
    width: "45%",
    backgroundColor: Colors.slotBg,
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 10,
    borderRadius: 6
  },
  buttonContainer: {
    paddingHorizontal: 23,
    paddingVertical: 37,
    backgroundColor: Colors.white
  },
  selectedSlot: {
    borderColor: Colors.black,
    borderWidth : 1
  }
});
