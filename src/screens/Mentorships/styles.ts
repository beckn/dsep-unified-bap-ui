import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
type Styles = {
  container: ViewStyle;
  heading: ViewStyle;
  card: ViewStyle;
  line: ViewStyle;
  bottom: ViewStyle;
  dot: ViewStyle;
  left: ViewStyle;
  params: ViewStyle;
  row: ViewStyle;
  aboutMentorTitle: TextStyle;
  aboutMentordesc: TextStyle;
  otherInformation: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    // backgroundColor: Colors.backgound,
    padding: Metrics.padding.medium,
    
  },
  aboutMentorTitle:{
    fontWeight : Fonts.weight.w6,
    color: Colors.slotText,
    fontSize: Fonts.size.medium
  },
  aboutMentordesc:{
    color: Colors.graniteGray,
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4
  },
  otherInformation:{
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.medium,
    color: Colors.slotText
  },
  heading: {
    color: Colors.black,
    fontSize: Fonts.size.medium,
  },
  card: {
    // minHeight:100,
    justifyContent: 'space-evenly'
  },
  line : {
    height:1, 
    width:'100%', 
    backgroundColor:Colors.black, 
    opacity: 0.2
    },
    bottom: {
      backgroundColor: Colors.white,
       padding: Metrics.padding.medium,
    },
    dot: {
      height:3, 
      width:3, 
      backgroundColor: Colors.black, 
      borderRadius: Metrics.radius.large,
      top:Metrics.padding.small
    },
    left:{
      left: Metrics.padding.small, 
    },
    params: {
      fontSize: Fonts.size.medium,
      color: Colors.lightBlack
    },
    row:{
      flexDirection: 'row'
    },
});
