import { Colors } from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, ViewStyle} from 'react-native';
import { Fonts } from '@styles/fonts';

type Styles = {
  container: ViewStyle,
  bottom: ViewStyle,
  header:ViewStyle,
  headerHeading:ViewStyle,
  headerText:ViewStyle,
  sectionContainer:ViewStyle,
  topSection:ViewStyle,
  bottomAboutSection:ViewStyle,
  bottomWorkEducationSection:ViewStyle,
  bottomSkillLanguageSection:ViewStyle,
  sectionHeaderText:ViewStyle,
  sectionDetailText:ViewStyle,
  addText:ViewStyle,
  verticalMargin:ViewStyle,
  iconMargin:ViewStyle,
  tags:ViewStyle
  inputStyle: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  bottom: {
    backgroundColor: Colors.white,
     padding: Metrics.padding.medium,
  },
  header: {
    height: 60,
    paddingLeft: Metrics.padding.base,
    paddingRight: Metrics.padding.base,
    justifyContent:'center'
  },
  headerHeading: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3,
    fontSize:Fonts.size.medium
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '900'
  },
  sectionContainer:{ width: '90%', alignSelf: 'center', minHeight: 150, backgroundColor: Colors.white, borderRadius: Metrics.radius.medium, padding: Metrics.padding.medium, marginVertical: Metrics.margin.small },
  topSection:{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: 'grey', borderBottomWidth: 1, alignItems: 'flex-start', },
  bottomAboutSection:{ flex: 3, justifyContent: 'center', paddingTop: Metrics.padding.small },
  bottomWorkEducationSection:{ flex: 3, justifyContent: 'space-between', paddingTop: Metrics.padding.small, flexDirection: 'row' },
  bottomSkillLanguageSection:{ flex: 3, justifyContent: 'flex-start', paddingTop: Metrics.padding.small, flexDirection: 'row', flexWrap:'wrap' },
  sectionHeaderText:{ fontSize: Fonts.size.medium, fontWeight: Fonts.weight.base, color: Colors.black },
  sectionDetailText:{ fontSize: Fonts.size.medium, fontWeight: Fonts.weight.w4, color: Colors.descText },
  addText:{ fontSize: Fonts.size.base, fontWeight: Fonts.weight.w5, color: Colors.black, textDecorationLine: 'underline' },
  verticalMargin:{ marginVertical: Metrics.margin.xSmall },
  iconMargin:{ marginRight: Metrics.margin.small },
  tags:{backgroundColor:Colors.dimGray, borderRadius:Metrics.radius.small, minWidth:20, height:30, alignItems:'center', justifyContent:'center', paddingHorizontal:Metrics.padding.base, margin:Metrics.margin.xSmall},
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: Metrics.radius.small,
    marginVertical: Metrics.margin.small,
    width:'90%'
  },
});
