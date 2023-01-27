import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  card: ViewStyle,
  imageView: ViewStyle,
  cardSpacing: ViewStyle,
  nameStyle: TextStyle,
  destinationText: TextStyle,
  ratingsContainer: ViewStyle;
  starIcon: ViewStyle,
  ratingText: TextStyle
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
  destinationText: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardDesc,
  },
  ratingsContainer: {
    backgroundColor: Colors.dimGray,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: Metrics.padding.xSmall,
    paddingLeft: Metrics.padding.xSmall,
    paddingRight: Metrics.padding.small,
    borderRadius: Metrics.radius.xSmall,
    marginTop: Metrics.margin.medium,
  },
  starIcon: {
    marginRight: Metrics.margin.xSmall
  },
  ratingText: {
    fontSize: Metrics.tiny,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: Colors.black,
    paddingRight: Metrics.padding.xSmall,
  },
});
