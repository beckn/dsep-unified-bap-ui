import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import Filter from '../../assets/svg/filter.svg';
import Search from '../../assets/svg/search.svg';
import Remove from '../../assets/svg/remove.svg';
import Star from '../../assets/svg/star.svg';
import HomeActive from '../../assets/svg/home-active.svg';
import HomeInActive from '../../assets/svg/home-inactive.svg';
import AppliedActive from '../../assets/svg/applied-active.svg';
import AppliedInActive from '../../assets/svg/applied-inactive.svg';
import Saved from '../../assets/svg/saved.svg';
import Profile from '../../assets/svg/profile.svg';
import Illustration from '../../assets/svg/illustration.svg';
import BackArrow from '../../assets/svg/back-arrow.svg';
import Options from '../../assets/svg/options';
import PersonalInfo from '../../assets/svg/personalInfo.svg';
import Resume from '../../assets/svg/resume.svg';
import Settings from '../../assets/svg/settings.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import PurchaseHistory from '../../assets/svg/purchaseHistory.svg';
import PDF from '../../assets/svg/pdf.svg';
import Rectangle from '../../assets/svg/Rectangle.svg';
import Upload from '../../assets/svg/upload.svg';
import Edit from '../../assets/svg/edit.svg';
import Delete from '../../assets/svg/delete.svg';
import Privacy from '../../assets/svg/Privacy.svg';
import Language from '../../assets/svg/Language.svg';
import CPass from '../../assets/svg/cPass.svg';
import LeftLargeArrow from '../../assets/svg/leftLarge-arrow.svg';
import DownArrow from '../../assets/svg/down_arrow.svg';
import YesBank from '../../assets/svg/yesBank.svg';
import MasterCard from '../../assets/svg/MasterCard.svg';
import PaytmCircle from '../../assets/svg/PaytmCircle.svg';
import Paytm from '../../assets/svg/Paytm.svg';
import GrayCircle from '../../assets/svg/grayCircle.svg';
import {Colors} from '@styles/colors';

export const SVGIcon = (props: PropTypes): JSX.Element => {
  const modifiedProps = {
    ...props,
    color: props.color || Colors.grey,
    style: null,
    fill: props.fill,
  };
  const getIcon = (iconName: ICONS): JSX.Element | undefined => {
    switch (iconName) {
      case ICONS.IC_FILTER:
        return <Filter {...modifiedProps} />;
      case ICONS.IC_SEARCH:
        return <Search {...modifiedProps} />;
      case ICONS.IC_REMOVE:
        return <Remove {...modifiedProps} />;
      case ICONS.IC_STAR:
        return <Star {...modifiedProps} />;
      case ICONS.IC_HOME_ACTIVE:
        return <HomeActive {...modifiedProps} />;
      case ICONS.IC_HOME_INACTIVE:
        return <HomeInActive {...modifiedProps} />;
      case ICONS.IC_APPLIED_ACTIVE:
        return <AppliedActive {...modifiedProps} />;
      case ICONS.IC_APPLIED_INACTIVE:
        return <AppliedInActive {...modifiedProps} />;
      case ICONS.IC_SAVED:
        return <Saved {...modifiedProps} />;
      case ICONS.IC_PROFILE:
        return <Profile {...modifiedProps} />;
      case ICONS.IC_ILLUSTRATION:
        return <Illustration {...modifiedProps} />;
      case ICONS.IC_BACK_ARROW:
        return <BackArrow {...modifiedProps} />;
      case ICONS.IC_OPTIONS:
        return <Options {...modifiedProps} />;
      case ICONS.IC_PERSONAL_INFO:
        return <PersonalInfo {...modifiedProps} />;
      case ICONS.IC_RESUME:
        return <Resume {...modifiedProps} />;
      case ICONS.IC_SETTINGS:
        return <Settings {...modifiedProps} />;
      case ICONS.IC_RIGHT_ARROW:
        return <RightArrow {...modifiedProps} />;
      case ICONS.IC_PURCHASE_HISTORY:
        return <PurchaseHistory {...modifiedProps} />;
      case ICONS.IC_LEFT_ARROW:
        return <LeftArrow {...modifiedProps} />;
      case ICONS.IC_PDF:
        return <PDF {...modifiedProps} />;
      case ICONS.IC_RECTANGLE:
        return <Rectangle {...modifiedProps} />;
      case ICONS.IC_UPLOAD:
        return <Upload {...modifiedProps} />;

      case ICONS.IC_EDIT:
        return <Edit {...modifiedProps} />;

      case ICONS.IC_DELETE:
        return <Delete {...modifiedProps} />;
      case ICONS.IC_PRIVACY:
        return <Privacy {...modifiedProps} />;
      case ICONS.IC_LANGUAGE:
        return <Language {...modifiedProps} />;
      case ICONS.IC_CPASS:
        return <CPass {...modifiedProps} />;
      case ICONS.IC_LEFT_LARGE_ARROW:
      return <LeftLargeArrow {...modifiedProps} />;
      case ICONS.IC_DOWN_ARROW:
      return <DownArrow {...modifiedProps} />;
      case ICONS.IC_YES_BANK:
      return <YesBank {...modifiedProps} />;
      case ICONS.IC_MASTER_CARD:
      return <MasterCard {...modifiedProps} />;
      case ICONS.IC_PAYTM_CIRCLE:
      return <PaytmCircle {...modifiedProps} />;
      case ICONS.PAYTM:
      return <Paytm {...modifiedProps} />;
      case ICONS.IC_GRAY_CIRCLE:
      return <GrayCircle {...modifiedProps} />;
    }
  };

  return (
    <View style={[styles.container, props.style]}>{getIcon(props.name)}</View>
  );
};

type Styles = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export interface PropTypes {
  color?: string;
  fill?: string;
  name: ICONS;
  width?: number;
  height?: number;
  style?;
  onPress?: () => void;
}

export enum ICONS {
  IC_FILTER = 'IC_FILTER',
  IC_SEARCH = 'IC_SEARCH',
  IC_REMOVE = 'IC_REMOVE',
  IC_STAR = 'IC_STAR',
  IC_HOME_ACTIVE = 'IC_HOME_ACTIVE',
  IC_HOME_INACTIVE = 'IC_HOME_INACTIVE',
  IC_APPLIED_ACTIVE = 'IC_APPLIED_ACTIVE',
  IC_APPLIED_INACTIVE = 'IC_APPLIED_INACTIVE',
  IC_SAVED = 'IC_SAVED',
  IC_PROFILE = 'IC_PROFILE',
  IC_ILLUSTRATION = 'IC_ILLUSTRATION',
  IC_BACK_ARROW = 'IC_BACK_ARROW',
  IC_OPTIONS = 'IC_OPTIONS',
  IC_PERSONAL_INFO = 'IC_PERSONAL_INFO',
  IC_RESUME = 'IC_RESUME',
  IC_SETTINGS = 'IC_SETTINGS',
  IC_RIGHT_ARROW = 'IC_RIGHT_ARROW',
  IC_LEFT_ARROW = 'IC_LEFT_ARROW',
  IC_PURCHASE_HISTORY = 'IC_PURCHASE_HISTORY',
  IC_PDF = 'IC_PDF',
  IC_RECTANGLE = 'IC_RECTANGLE',
  IC_UPLOAD = 'IC_UPLOAD',
  IC_EDIT = 'IC_EDIT',
  IC_DELETE = 'IC_DELETE',
  IC_PRIVACY = 'IC_PRIVACY',
  IC_LANGUAGE = 'IC_LANGUAGE',
  IC_CPASS = 'IC_CPASS',
  IC_LEFT_LARGE_ARROW= 'IC_LEFT_LARGE_ARROW',
  IC_DOWN_ARROW='IC_DOWN_ARROW',
  IC_YES_BANK= 'IC_YES_BANK',
  IC_MASTER_CARD= 'IC_MASTER_CARD',
  IC_PAYTM_CIRCLE='IC_PAYTM_CIRCLE',
  PAYTM='PAYTM',
  IC_GRAY_CIRCLE='IC_GRAY_CIRCLE',
}
