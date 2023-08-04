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
  backButtonContainer: ViewStyle;
  titleTextWraper: ViewStyle;
  tagsText: ViewStyle;
  sectionSubTitleText: ViewStyle;
  uploadDocLabelText: ViewStyle;
  uploadDocBox: ViewStyle;
  uploadedDocContainer: ViewStyle;
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
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0,
    color: Colors.black,
    textAlign: 'left',
  },
  sectionContainer:{flex:1, width:'90%',marginHorizontal:24, alignSelf: 'center', minHeight: 150, backgroundColor: Colors.white, borderRadius: Metrics.radius.medium, padding: Metrics.padding.medium, marginVertical: Metrics.margin.small },
  topSection:{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#DEE1E7', borderBottomWidth: 1, alignItems: 'flex-start', },
  bottomAboutSection:{ flex: 3, justifyContent: 'center', paddingTop: Metrics.padding.small },
  bottomWorkEducationSection:{ flex: 3, justifyContent: 'space-between', paddingTop: Metrics.padding.small, flexDirection: 'row' },
  bottomSkillLanguageSection:{ flex: 3, justifyContent: 'flex-start', paddingTop: Metrics.padding.small, flexDirection: 'row', flexWrap:'wrap' },
  sectionHeaderText:{ fontSize: Fonts.size.medium, fontWeight: Fonts.weight.base, color: Colors.black },
  sectionDetailText:{ fontSize: Fonts.size.base, fontWeight: Fonts.weight.w4, color: Colors.descText },
  addText:{ fontSize: Fonts.size.base, fontWeight: '700', color: Colors.black, textDecorationLine: 'underline' },
  verticalMargin:{ marginVertical: Metrics.margin.xSmall },
  iconMargin:{ position: 'absolute', right: 10, top :10 },
  tags:{backgroundColor:Colors.lightGrey, borderRadius:Metrics.radius.small, minWidth:20, height:30, alignItems:'center', justifyContent:'center', paddingHorizontal:Metrics.padding.base, margin:Metrics.margin.xSmall},
  tagsText:{color: '#67617C',
    fontFamily: 'DM Sans',
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: Metrics.radius.small,
    marginVertical: Metrics.margin.small,
    width:'90%'
  },
  backButtonContainer :{ position: 'absolute', left : 10, top: 10, zIndex:1},
  titleTextWraper :{alignItems: 'center', width: '100%'},
  sectionSubTitleText :{alignItems: 'center', width: '100%'},
  uploadDocBox :{ flex: 1, width: '100%', height: 75, borderColor: '#9D97B5', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', borderRadius: 15, borderStyle: 'dashed', borderWidth: 1, alignSelf: 'center' },
  uploadDocLabelText :{
    textAlign: 'center', fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0,
    color: '#000'
  },
  uploadedDocContainer : { padding:1, borderWidth :0, justifyContent:'center', alignItems:'center'}
})