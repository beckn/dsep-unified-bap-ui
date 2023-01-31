import { StyleSheet, View, ViewStyle } from 'react-native';
import { Metrics } from '@styles/metrics';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';

type Styles = {
  container: ViewStyle;
  header: ViewStyle;
  headerHeading: ViewStyle;
  headerText: ViewStyle;
  resultCardContainer: ViewStyle;
  organizationRow:ViewStyle;
  profilleIconContainer:ViewStyle;
  profileIconOuter:ViewStyle;
  profileIconInner:ViewStyle;
  organizationDetails:ViewStyle;
  organizationName:ViewStyle;
  organizationLocation:ViewStyle;
  bookmarkIcon:ViewStyle;
  detailsRow:ViewStyle;
  roleName:ViewStyle;
  roleAttributes:ViewStyle;
  roleHistory:ViewStyle;
  rolePostedDate:ViewStyle;
  rolePostedBy:ViewStyle;
  searchBoxContainer: ViewStyle;
  bottom: ViewStyle;
  input: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  searchBoxContainer: {
    paddingTop: Metrics.padding.base,
    paddingHorizontal: Metrics.padding.base,
  },
  container: {
    flex: 1,
  },
  bottom: {
    backgroundColor: Colors.white,
     padding: Metrics.padding.medium,
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
  header: {
    height: 120,
    paddingLeft: Metrics.padding.base,
    paddingRight: Metrics.padding.base
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
  resultCardContainer:
  {
    width: '90%',
    height: 150,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: Metrics.radius.large,
    marginVertical: Metrics.margin.xSmall
  },
  organizationRow:{flex:1, flexDirection:"row"},
  profilleIconContainer:{flex:2, alignItems:'center', justifyContent:'center'},
  profileIconOuter:{height:'50%', width:'50%', backgroundColor:Colors.liteGray, borderRadius:Metrics.radius.xxxLarge, alignItems:'center', justifyContent:'center'},
  profileIconInner:{height:'70%', width:'70%', backgroundColor:Colors.black, borderRadius:Metrics.radius.large, },
  organizationDetails:{flex:7, justifyContent:'center'},
  organizationName:{fontSize:Fonts.size.title, fontWeight:Fonts.weight.w4, color:Colors.cardTitle},
  organizationLocation:{fontSize:Fonts.size.base, fontWeight:Fonts.weight.w4},
  bookmarkIcon:{flex:1, alignItems:'flex-start', justifyContent:'center'},
  detailsRow:{flex:1, paddingHorizontal:Metrics.padding.base},
  roleName:{flex:1 , fontSize:Fonts.size.title, fontWeight:Fonts.weight.w4,color:Colors.cardTitle},
  roleAttributes:{flex:1, fontSize:Fonts.size.base, fontWeight:Fonts.weight.w4,color:Colors.cardTitle},
  roleHistory:{flex:1, justifyContent:'space-between', flexDirection:'row'},
  rolePostedDate:{fontSize:Fonts.size.base, fontWeight:Fonts.weight.w4},
  rolePostedBy:{fontSize:Fonts.size.base, fontWeight:Fonts.weight.w4}
});
