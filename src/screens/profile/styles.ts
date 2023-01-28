import {StyleSheet, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';

type Styles = {
  container: ViewStyle;
  inputStyle: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: Metrics.radius.small,
    marginVertical: Metrics.margin.small,
  },
});
