import React from "react";
import {TouchableOpacity, View} from 'react-native'
import {ICONS, Text, SVGIcon} from '@components';
import {Colors} from '@styles/colors';
import {Metrics} from "@styles/metrics";
import {styles} from './styles';

const Options = ({leftIcon, title, onPress })=>{
    return (
        <TouchableOpacity onPress={onPress} style = {styles.optionsRow}>
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