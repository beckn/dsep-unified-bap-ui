import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@styles/colors";
import { Fonts } from "@styles/fonts";
import { Metrics } from "@styles/metrics";

type Styles = {
  container: ViewStyle;
  backArrowContainer:ViewStyle;
  rightIconContainer: ViewStyle;
  titleContainer: ViewStyle;
  titleText: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.black10,
    paddingTop : 23,
    paddingBottom : Metrics.padding.xSmall
  },
  backArrowContainer:{
    width:"15%",
    justifyContent:'center',
    alignItems: 'center',
  },
  titleContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems: 'center'
  },
  rightIconContainer:{
    width:"15%",
    justifyContent:'center',
    alignItems: 'center'
  },
  titleText:{
    fontSize:Fonts.size.title,
    fontWeight: Fonts.weight.w6,
    color: Colors.cardTitle
  }
});
