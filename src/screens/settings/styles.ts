import { Colors } from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  card:ViewStyle;
  image:ViewStyle;
  text:ViewStyle;
  line: ViewStyle;
 
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    height:60,
    flexDirection:'row',
    padding:15,
    alignItems:'center'
  },
  image: {
    height:30, 
    width:30,
    backgroundColor:'blue'
  },
  text:{
    paddingLeft:15,
    color:Colors.black,
    fontWeight:'700'
  },
  line: {
    height:1, 
    backgroundColor: '#000',
    marginLeft:16,
    width:'92%',
    opacity: 0.2
  }
 });
