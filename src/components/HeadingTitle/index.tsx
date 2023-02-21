import { commonStyles } from "@styles/commonStyles";
import React, { ReactElement, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type titleDetails = {
  title: string;
};

const HeadingTitle = ({ title }: titleDetails) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default HeadingTitle;
