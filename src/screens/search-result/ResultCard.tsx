import React from "react";
import { View  , Image, TouchableOpacity} from "react-native";
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import { styles } from "./styles";

const ResultCard = ({data, onItemPressed})=>{
    return (
    <TouchableOpacity style = {styles.resultCardContainer} key ={data.id} onPress={() => onItemPressed(data)}>
        <View style = {styles.organizationRow}>
            <View style = {styles.profilleIconContainer}>
                <View style = {styles.profileIconOuter}>
                    <View style = {styles.profileIconInner}/>
                </View>
            </View>
            <View style = {styles.organizationDetails}>
                <Text style = {styles.organizationName}>
                    {data.company}
                </Text>
                <Text style = {styles.organizationLocation}>
                {`${data.city}, ${data.country}`}
                </Text>
            </View>
            <View style = {styles.bookmarkIcon}>
            <Image source={images.vector} />
            </View>
        </View>
        <View style = {styles.detailsRow}>
            <Text style = {styles.roleName}>{data.skills}</Text>
            <Text style = {styles.roleAttributes}>{`${data.type1} . ${data.type2} . ${data.type3}`}</Text>
            <View style = {styles.roleHistory}>
                <Text style = {styles.rolePostedDate}>{data.postedOn}</Text>
                <Text style = {styles.rolePostedBy}>{`by ${data.byWhom}`}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default ResultCard;