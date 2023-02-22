import {StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
import {Colors} from '@styles/colors';
import {Fonts} from '@styles/fonts';
import {commonStyles} from '@styles/commonStyles';

type Styles = {
  container: ViewStyle;
  header: ViewStyle;
  headerHeading: ViewStyle;
  headerText: ViewStyle;
  resultCardContainer: ViewStyle;
  organizationRow: ViewStyle;
  profilleIconContainer: ViewStyle;
  profileIconOuter: ViewStyle;
  profileIconInner: ViewStyle;
  organizationDetails: ViewStyle;
  organizationName: ViewStyle;
  organizationLocation: ViewStyle;
  bookmarkIcon: ViewStyle;
  detailsRow: ViewStyle;
  roleName: ViewStyle;
  roleAttributes: ViewStyle;
  roleHistory: ViewStyle;
  rolePostedDate: ViewStyle;
  rolePostedBy: ViewStyle;
  dropdownContainer: ViewStyle;
  rightTextContainer: ViewStyle;
  rightText: TextStyle;
  card: ViewStyle;
  imageView: ViewStyle;
  cardSpacing: ViewStyle;
  nameStyle: TextStyle;
  designationText: TextStyle;
  detailsContainer: ViewStyle;
  provider: TextStyle;
  listEmptyContainer: ViewStyle;
  listEmptyTextStyle: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    paddingHorizontal: Metrics.padding.base,
    flexDirection: 'row',
  },
  headerHeading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: Fonts.weight.w6,
    fontSize: 16,
    color: Colors.cardTitle,
  },
  rightText: {
    textAlign: 'center',
    fontWeight: Fonts.weight.w4,
    fontSize: 12,
    color: Colors.black,
    ...commonStyles.underline,
  },
  rightTextContainer: {
    position: 'absolute',
    right: 22,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  resultCardContainer: {
    width: '90%',
    height: 150,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: Metrics.radius.large,
    marginVertical: Metrics.margin.xSmall,
  },
  organizationRow: {flex: 1, flexDirection: 'row'},
  profilleIconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconOuter: {
    height: '50%',
    width: '50%',
    backgroundColor: Colors.liteGray,
    borderRadius: Metrics.radius.xxxLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconInner: {
    height: '70%',
    width: '70%',
    backgroundColor: Colors.black,
    borderRadius: Metrics.radius.large,
  },
  organizationDetails: {flex: 7, justifyContent: 'center'},
  organizationName: {
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardTitle,
  },
  organizationLocation: {
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
  },
  bookmarkIcon: {flex: 1, alignItems: 'flex-start', justifyContent: 'center'},
  detailsRow: {flex: 1, paddingHorizontal: Metrics.padding.base},
  roleName: {
    flex: 1,
    fontSize: Fonts.size.title,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardTitle,
  },
  roleAttributes: {
    flex: 1,
    fontSize: Fonts.size.base,
    fontWeight: Fonts.weight.w4,
    color: Colors.cardTitle,
  },
  roleHistory: {flex: 1, justifyContent: 'space-between', flexDirection: 'row'},
  rolePostedDate: {fontSize: Fonts.size.base, fontWeight: Fonts.weight.w4},
  rolePostedBy: {fontSize: Fonts.size.base, fontWeight: Fonts.weight.w4},
  dropdownContainer: {
    width: '90%',
    marginVertical: Metrics.margin.medium,
    alignSelf: 'center',
    zIndex: 2,
  },
  card: {
    flexDirection: 'row',
    padding: Metrics.padding.small,
    backgroundColor: Colors.white,
    borderRadius: Metrics.radius.large,
    marginBottom: Metrics.margin.medium,
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
  detailsContainer: {flex: 4},
  provider: {flex: 1, alignSelf: 'flex-end', fontSize: Fonts.size.small},
  listEmptyContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  listEmptyTextStyle: {fontSize: 16, color: 'black'},
});
