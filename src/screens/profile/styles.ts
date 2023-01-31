import {StyleSheet, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
import {Colors} from '@styles/colors';
import { Fonts } from "@styles/fonts";

type Styles = {
  container: ViewStyle;
  optionsRow:ViewStyle;
  optionsLeftIcon:ViewStyle;
  optionsTitle:ViewStyle;
  optionsRightIcon:ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.base,
    backgroundColor:Colors.white
  },
  optionsRow:{
    flexDirection:'row',
    minHeight:Metrics.large,
    backgroundColor:Colors.white,
    margin:Metrics.small,
    alignItems:'center'
  },
  optionsLeftIcon:{
    flex:2
  },
  optionsTitle:{
    flex:7,
    color:Colors.black,
    fontWeight: Fonts.weight.w5
  },
  optionsRightIcon:{
    flex:1
  }
});
