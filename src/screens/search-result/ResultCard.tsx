import React from "react";
import { View  , Image} from "react-native";
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import { styles } from "./styles";

const ResultCard = ({})=>{
    return (
    <View style = {styles.resultCardContainer}>
        <View style = {styles.organizationRow}>
            <View style = {styles.profilleIconContainer}>
                <View style = {styles.profileIconOuter}>
                    <View style = {styles.profileIconInner}/>
                </View>
            </View>
            <View style = {styles.organizationDetails}>
                <Text style = {styles.organizationName}>
                    Facebook
                </Text>
                <Text style = {styles.organizationLocation}>
                    Bangalore, India
                </Text>
            </View>
            <View style = {styles.bookmarkIcon}>
            <Image source={images.vector} />
            </View>
        </View>
        <View style = {styles.detailsRow}>
            <Text style = {styles.roleName}>UX Designer</Text>
            <Text style = {styles.roleAttributes}>Senior . Fulltime . Remote</Text>
            <View style = {styles.roleHistory}>
                <Text style = {styles.rolePostedDate}>1d ago</Text>
                <Text style = {styles.rolePostedBy}>by affnidi</Text>
            </View>
        </View>
    </View>
    )
}

export default ResultCard;