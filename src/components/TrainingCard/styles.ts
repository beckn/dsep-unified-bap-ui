import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  card: ViewStyle,
  imageView: ViewStyle,
  cardSpacing: ViewStyle,
  nameStyle: TextStyle,
  designationText: TextStyle,
  detailsContainer:ViewStyle,
  bookmarkIcon: ViewStyle,
  provider:TextStyle
  providerContainer:TextStyle
  titleSubTitleWrapper:TextStyle
}

export const styles = StyleSheet.create<Styles>({
  card: {
    flexDirection: 'row',
    padding: Metrics.padding.small,
    backgroundColor: Colors.white,
    borderRadius: Metrics.radius.large,
    marginBottom: Metrics.margin.medium
  },
  bookmarkIcon: { position: 'absolute',top :5,right :5, },
  imageView: {
    width: 126,
    height: 126,
    backgroundColor: Colors.silverSand,
    borderRadius: Metrics.radius.large,
  },
  cardSpacing: {
    paddingTop: Metrics.padding.xSmall,
    paddingLeft: Metrics.padding.medium,
    flex: 1,
    paddingRight: Metrics.padding.xSmall,
    // backgroundColor:'red',
    flexDirection:'row'
  },
  nameStyle: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardTitle,
    paddingBottom: Metrics.padding.xSmall,
  },
  designationText: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardDesc,
  },
  detailsContainer:{width:'100%', justifyContent:'space-between'},
  titleSubTitleWrapper:{marginRight:0},
  providerContainer:{alignSelf:'flex-end'},
  provider:{ alignSelf:'flex-end', fontSize:Fonts.size.small},
});
