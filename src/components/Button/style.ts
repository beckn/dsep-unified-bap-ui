import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@styles/colors";
import { Fonts } from "@styles/fonts";
import { Metrics } from "@styles/metrics";

export const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      height: "100%",
      width: "100%",
    },
    defaultButtonStyle: {
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: Colors.black,
      borderRadius: Metrics.radius.xxSmall,
      height: 50
    },
    labelWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center"
    },
    defaultLabelStyle: {
      fontSize: Fonts.size.caption,
      fontFamily: Fonts.family.DM_SANS_REGULAR,
      fontWeight: Fonts.weight.bold,
      letterSpacing: 1,
      textAlign: "center",
      alignSelf: "center",
      lineHeight: Fonts.lineHeight.base,
      color: Colors.white,
      textTransform: 'uppercase'
    }
  });
  