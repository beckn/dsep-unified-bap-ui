import { Colors } from '@styles/colors';
import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  card:ViewStyle;
  text: ViewStyle;
  leftPart: ViewStyle;
  rightPart: ViewStyle;
  icon: ViewStyle;
  highLight: ViewStyle;
  time: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    height:70,
    alignItems:'center',
    // borderWidth:1,
    flexDirection:'row',
    padding:5,
    width:'100%'
  },
  text:{
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15
  },
  leftPart: {
    width:'15%', 
    alignItems:'center'
  },
  rightPart: {
    width:'85%'
  },
  icon:{
    height:40, 
    width:40, 
    backgroundColor: '#C4C4C4', 
    borderRadius:25
  },
  highLight: {
    color: '#000000'
  },
  time:{
    paddingLeft: 15
  }
 });
