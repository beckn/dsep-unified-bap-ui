import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@styles/colors";
import { Fonts } from "@styles/fonts";
import { Metrics } from "@styles/metrics";

type Styles = {
  container: ViewStyle;
  backArrowContainer:ViewStyle;
  rightIconContainer: ViewStyle;
  rightIcon: ViewStyle;
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
    paddingBottom : Metrics.padding.xSmall,
    paddingHorizontal: 15
  },
  backArrowContainer:{
    width:"10%",
  },
  titleContainer:{
    width:'80%',
    justifyContent:'center',
    alignItems: 'center',
  },
  rightIconContainer:{
    width:'20%',
    paddingLeft:15,
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rightIcon: {
    marginHorizontal: Metrics.margin.xSmall
  },
  titleText:{
    fontSize:Fonts.size.title,
    fontWeight: Fonts.weight.w6,
    color: Colors.cardTitle
  }
});
