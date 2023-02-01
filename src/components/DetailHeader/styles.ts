import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@styles/colors";
import { Metrics } from "@styles/metrics";
import { Fonts } from "@styles/fonts";

type Styles = {
  topSection: ViewStyle;
  lowerSection: ViewStyle;
  outerCircle: ViewStyle;
  innerCircle: ViewStyle;
  titleText: ViewStyle;
  ratingContainer: ViewStyle;
  descriptionText: ViewStyle;
  textContainer: ViewStyle;
  borderBottom : ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  topSection: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.black10,
    height: 90,
  },
  lowerSection: {
    backgroundColor: Colors.background,
  },
  outerCircle: {
    height: 74,
    width: 74,
    backgroundColor: Colors.black10,
    borderRadius: 37,
    alignSelf: "center",
    marginTop: -37,
    justifyContent: "center",
    alignItems: "center",

  },
  innerCircle: {
    height: 52,
    width: 52,
    backgroundColor: Colors.black,
    borderRadius: 26,
    alignSelf: "center",
  },
  textContainer: {
    paddingBottom: Metrics.padding.sLarge,
  },
  borderBottom :{
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.black10
  },
  ratingContainer: {
    flex:1,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    paddingRight: 30,
    alignSelf:'flex-end'
  },
  titleText: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.w4,
    fontFamily: Fonts.family.OPEN_SANS_REGULAR,
    textAlign: "center",
    marginTop: Metrics.margin.xSmall,
    color: Colors.cardTitle,
  },
  descriptionText: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    fontFamily: Fonts.family.DM_SANS_REGULAR,
    textAlign: "center",
    color: Colors.cardDesc,
  },
});
