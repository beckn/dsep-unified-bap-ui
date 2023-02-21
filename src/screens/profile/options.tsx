import React from "react";
import {TouchableOpacity, View} from 'react-native'
import {ICONS, Text, SVGIcon} from '@components';
import {Colors} from '@styles/colors';
import {Metrics} from "@styles/metrics";
import {styles} from './styles';

const Options = ({leftIcon, title, onPress, backgroundColor })=>{
    return (
        <TouchableOpacity onPress={onPress} style = {{
            backgroundColor: backgroundColor,
            flexDirection:'row',
            minHeight:Metrics.large,
            margin:Metrics.small,
            alignItems:'center'
        }}>
            <SVGIcon 
                name={leftIcon}
                width={Metrics.large}
                height={Metrics.large}
                style = {styles.optionsLeftIcon}
                color = {Colors.black}
            />
            <Text style = {styles.optionsTitle}>{title}</Text>
            <SVGIcon 
                name={ICONS.IC_RIGHT_ARROW}
                width={Metrics.small}
                height={Metrics.small}
                style = {styles.optionsRightIcon}
                color={Colors.black}
            />
        </TouchableOpacity>
    )
}

export default Options;