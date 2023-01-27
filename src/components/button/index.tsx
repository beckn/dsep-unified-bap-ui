import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '@styles/colors';
import {Metrics} from '@styles/metrics';
import {Fonts} from '@styles/fonts';


type PropType = {
    style?: ViewStyle;
    height: number;
    text: any;
    onPress: any;
    type: any;
  };

const AppButton = (props: PropType) =>{
    const {styles, text, onPress, type} = useAppButton(props);
    return(
       <TouchableOpacity onPress={onPress} style={styles.buyButton}>
        <Text style={styles.buttonText}>{text}</Text>
       </TouchableOpacity>
    )


  function useAppButton(props: PropType) {
        const {height, text, style, onPress, type} = props;
        const styles = StyleSheet.create({
          buyButton: {
            height: height,
            backgroundColor: type === "dark" ? Colors.black : Colors.backgound,
            alignItems:'center',
            justifyContent:'center',
            borderRadius: Metrics.radius.small,
            fontFamily: Fonts.family.OPEN_SANS_BOLD,
            ...style,
      },
      buttonText :{
        color:  type === "dark" ?  Colors.white : Colors.black
      }
        });

        return {
          styles,
          text,
          onPress,
          type
        };
  }
}

AppButton.defaultProps = {
    height: 45,
};

export default AppButton;