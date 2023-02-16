import React from "react";
import { View  , Image, TouchableOpacity} from "react-native";
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import { styles } from "./styles";

// const ResultCard = ({navigation})=>{
//     return (
//     <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>  
//     <View style = {styles.resultCardContainer}>
const ResultCard = ({data, onItemPressed})=>{
console.log(data)
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
                    {data.company.name}
                </Text>
                <Text style = {styles.organizationLocation}>
                {data.jobs[0].locations[0].city}{","} {data.jobs[0].locations[0].country}
                </Text>
            </View>
            <View style = {styles.bookmarkIcon}>
            <Image source={images.vector} />
            </View>
        </View>
        <View style = {styles.detailsRow}>
            <Text style = {styles.roleName}>{data.jobs[0].role}</Text>
            <Text style = {styles.roleAttributes}></Text>
            <View style = {styles.roleHistory}>
                <Text style = {styles.rolePostedDate}>{data?.postedOn}</Text>
                <Text style = {styles.rolePostedBy}></Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default ResultCard;