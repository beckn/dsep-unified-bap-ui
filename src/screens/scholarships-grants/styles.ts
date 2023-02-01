import { Colors } from '@styles/colors';
import { Metrics } from '@styles/metrics';
import {StyleSheet, ViewStyle} from 'react-native';
import { Fonts } from '@styles/fonts';

type Styles = {
  container: ViewStyle;
  searchBoxContainer: ViewStyle,
  listContainer: ViewStyle,
  header:ViewStyle,
  headerHeading:ViewStyle,
  headerText:ViewStyle,
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchBoxContainer: {
    paddingTop: Metrics.padding.base,
    paddingHorizontal: Metrics.padding.base,
  },
  listContainer: { paddingTop: 34, paddingHorizontal: 22, paddingBottom: 31 },
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
});
