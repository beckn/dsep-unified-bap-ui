import {StyleSheet} from 'react-native';
import {Colors} from '@styles/colors';
import {Metrics} from '@styles/metrics';
import {Fonts} from '@styles/fonts';

export const styles = StyleSheet.create({
  tabSection: {
    flexDirection: 'row',
    width: '100%',
  },
  tabview: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Metrics.padding.medium,
    borderBottomWidth: 0.5
  },
  selectedTab: {
    borderBottomWidth: 3.8
  },
  tabText: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    fontFamily: Fonts.family.OPEN_SANS_REGULAR,
    color: Colors.black,
  },
  selectedTabText: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.bold,
    fontFamily: Fonts.family.OPEN_SANS_BOLD,
    color: Colors.black,
  }
});
