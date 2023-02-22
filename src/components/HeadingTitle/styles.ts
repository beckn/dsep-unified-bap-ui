import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colors } from "@styles/colors";
import { Metrics } from "@styles/metrics";
import { Fonts } from "@styles/fonts";

type Styles = {
  titleContainer: ViewStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  titleContainer: {
    alignItems: "center",
    paddingVertical: Metrics.padding.medium,
    borderBottomWidth: 3.8,
  },
  title: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.bold,
    fontFamily: Fonts.family.OPEN_SANS_BOLD,
    color: Colors.black,
  },
});
