import {Colors} from '@styles/colors';
import { Fonts } from '@styles/fonts';
import { Metrics } from '@styles/metrics';
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  ratingsContainer: ViewStyle;
  starIcon: ImageStyle;
  ratingText: TextStyle
};

export const styles = StyleSheet.create<Styles>({
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
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    color: Colors.black,
    paddingRight: Metrics.padding.xSmall,
  },
});
