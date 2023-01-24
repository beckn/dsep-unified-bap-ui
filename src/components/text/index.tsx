import React, {FunctionComponent} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type TextProps = {
  children: string | JSX.Element;
  style?: TextStyle | TextStyle[];
  onPress?: () => void;
};

export const Text: FunctionComponent<TextProps> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <RNText style={style} onPress={onPress}>
      {children}
    </RNText>
  );
};
