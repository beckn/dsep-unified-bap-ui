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
}

const Button: FunctionComponent<ButtonTypes> = ({
  title,
  onPress,
  disabled,
  style = styles.defaultButtonStyle,
  labelStyle = styles.defaultLabelStyle,
}) => {
  return (
    <View
      style={[
        { ...styles.defaultButtonStyle },
        style
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        disabled={disabled}
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