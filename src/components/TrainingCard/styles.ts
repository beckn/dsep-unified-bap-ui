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
  provider:TextStyle
}

export const styles = StyleSheet.create<Styles>({
  card: {
    flexDirection: 'row',
    padding: Metrics.padding.small,
    backgroundColor: Colors.white,
    borderRadius: Metrics.radius.large,
    marginBottom: Metrics.margin.medium
  },
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
  detailsContainer:{flex:4},
  provider:{ flex:1,alignSelf:'flex-end', fontSize:Fonts.size.small}
});
