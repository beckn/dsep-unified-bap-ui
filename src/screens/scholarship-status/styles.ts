import {StyleSheet, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
type Styles = {
  container: ViewStyle;
  container2: ViewStyle;
  heading: ViewStyle;
  card: ViewStyle;
  line: ViewStyle;
  bottom: ViewStyle;
  dot: ViewStyle;
  left: ViewStyle;
  params: ViewStyle;
  row: ViewStyle;
  inputStyle: ViewStyle;
  inputStyleMultiLine: ViewStyle;
  rignt: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: Metrics.padding.medium,
    
  },
  container2: {
    flex: 1,
    //padding: Metrics.padding.medium,
    
  },
  
  heading: {
    color: Colors.black,
    fontSize: Fonts.size.medium,
  },
  card: {
    height:70,
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
    inputStyle: {
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: Metrics.radius.small,
      marginVertical: Metrics.margin.small,
    },
    inputStyleMultiLine: {
      height: 130,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: Metrics.radius.small,
      marginVertical: Metrics.margin.small,
    },
    rignt :{
      marginLeft: 30
    }
});
