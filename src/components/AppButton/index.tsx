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
    disabled: any;
  };

const AppButton = (props: PropType) =>{
    const {styles, text, onPress, disabled, type} = useAppButton(props);
    return(
       <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
       </TouchableOpacity>
    )


  function useAppButton(props: PropType) {
        const {height, text, style, onPress, disabled, type} = props;
        const styles = StyleSheet.create({
          button: {
            height: height,
            backgroundColor: type === "dark" ? Colors.black : type === "grey"? Colors.graniteGray : Colors.background,
            alignItems:'center',
            justifyContent:'center',
            borderRadius: Metrics.radius.xSmall,
            fontFamily: Fonts.family.OPEN_SANS_BOLD,
           
            ...style,
      },
      buttonText :{
        color:  type === "dark" ?  Colors.white : Colors.liteGray,
        textTransform: 'uppercase'
      }
        });

        return {
          styles,
          text,
          onPress,
          disabled,
          type
        };
  }
}

AppButton.defaultProps = {
    height: 45,
};

export default AppButton;