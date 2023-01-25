import React, {FunctionComponent} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {Fonts} from '@styles/fonts';

type TextProps = {
  children: string | JSX.Element;
  style?: TextStyle | TextStyle[];
  onPress?: () => void;
  fontFamily?: string;
};

export const Text: FunctionComponent<TextProps> = ({
  children,
  style,
  onPress,
  fontFamily = Fonts.family.OPEN_SANS_REGULAR,
}) => {
  return (
    <RNText style={[style, {fontFamily: fontFamily}]} onPress={onPress}>
      {children}
    </RNText>
  );
};
