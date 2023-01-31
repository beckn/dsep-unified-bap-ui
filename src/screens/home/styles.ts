import { Colors } from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  searchBoxContainer: ViewStyle,
  listContainer: ViewStyle,
  item: ViewStyle,
  icon: ViewStyle,
  input: ViewStyle,
  feature: ViewStyle,
  title: ViewStyle,
  texttitle: ViewStyle,
  list: ViewStyle,
  centeredView: ViewStyle,
  modalView: ViewStyle,
  

};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: { padding: 10 },
  item:{
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    height: 90,
    width: 80,
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    backgroundColor:  `#dcdcdc`, 
  },
  input: {
    height: 40,
    margin: 10,
    width: 300,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor:  `#f8f8ff`, 

  },
  feature: {
    height: 150,
    margin: 12,
    backgroundColor:  `#f8f8ff`,    
    padding: 10,
    borderRadius: 15,
  },
title : {
   height: 110, 
  //  borderRadius: 15,
   borderTopLeftRadius: 15,
   borderTopRightRadius: 15,
  //  padding: 10,
  //  margin: 12,
   alignItems: 'stretch',
   backgroundColor:  `#dcdcdc`,
},
texttitle : {
  fontWeight: 'bold',
  Color: `#000000`
},
list: {
  height: 130,
  flex: 1,
  // flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'

},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  width: 400,
    height: 200,
},
modalView: {
  margin: 10,
  
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 15,
  width: 400,
    height: 400,
  alignItems: 'flex-end',
  shadowColor: '#000',
  shadowOffset: {
    width: 10,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

});
