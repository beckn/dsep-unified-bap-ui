import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import Filter from '../../assets/svg/filter.svg';
import Search from '../../assets/svg/search.svg';
import Remove from '../../assets/svg/remove.svg';
import Star from '../../assets/svg/star.svg';
import { Colors } from "@styles/colors";


export const SVGIcon = (props: PropTypes): JSX.Element => {
  const modifiedProps = {
    ...props,
    color: props.color || Colors.grey,
    style: null,
    fill: props.fill,
  };
  const getIcon = (iconName: ICONS): JSX.Element => {
    switch (iconName) {
      case ICONS.IC_FILTER:
        return <Filter {...modifiedProps} />;
      case ICONS.IC_SEARCH:
        return <Search {...modifiedProps} />;
      case ICONS.IC_REMOVE:
        return <Remove {...modifiedProps} />;
      case ICONS.IC_STAR:
        return <Star {...modifiedProps} />;
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
}
