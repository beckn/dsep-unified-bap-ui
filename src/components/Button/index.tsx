import React, { FunctionComponent } from "react";
import { View, TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "@components/Text";
import { styles } from "./style";
import { TextStyle } from "react-native";

type ButtonTypes = {
  title : string,
  disabled? : boolean,
  onPress?: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  onPressDisabled? : boolean;
}

const Button: FunctionComponent<ButtonTypes> = ({
  title,
  onPress,
  disabled,
  onPressDisabled,
  style = styles.defaultButtonStyle,
  labelStyle = styles.defaultLabelStyle,
}) => {
  return (
    <View
      style={[
        { ...styles.defaultButtonStyle ,opacity: disabled ? 0.5 : 1},
        style,
        
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        disabled={disabled || onPressDisabled}
      >
        <View style={styles.labelWrapper}>
          <Text
            style={[
              { ...styles.defaultLabelStyle },
              labelStyle
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;