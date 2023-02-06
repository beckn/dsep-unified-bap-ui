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
  inputStyle: ViewStyle;
  searchBox: ViewStyle;
  input: ViewStyle;
  centeredView: ViewStyle;
  modalView: ViewStyle;
  calender: ViewStyle;
  button: ViewStyle;
  searchBoxContainer: ViewStyle;
  bottom: ViewStyle;
  inputStyleMultiLine: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  searchBoxContainer: {
    paddingTop: Metrics.padding.base,
    paddingHorizontal: Metrics.padding.base,
  },
  bottom: {
    backgroundColor: Colors.white,
     padding: Metrics.padding.medium,
  },
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
  calender:{
    flexDirection:'row',
    // minHeight:Metrics.large,
    // // backgroundColor:Colors.white,
    // // margin:Metrics.small,
    height: 60,
    width: 200,
    margin: 10,
    alignItems: 'stretch'
  },
  optionsLeftIcon:{
    flex:2
  },
  button:{
    padding: 6
  },
  optionsTitle:{
    flex:7,
    color:Colors.black,
    fontWeight: Fonts.weight.w5
  },
  optionsRightIcon:{
    flex:1
  },
  searchBox: {
    height: 47.95,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: Metrics.radius.base,
    alignSelf: 'center',
    marginVertical: Metrics.margin.xtiny,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding.small,
  },
  input: {
    flex: 1,
    paddingLeft: Metrics.padding.xSmall,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }

});
