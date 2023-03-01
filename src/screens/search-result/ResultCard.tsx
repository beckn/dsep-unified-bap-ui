import React from "react";
import { View  , Image, TouchableOpacity} from "react-native";
import images from '../../assets/images';
import {ICONS, Text, SVGIcon} from '@components';
import { styles } from "./styles";

import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';


const ResultCard = ({data, onButtonClick, onItemPressed})=>{
    
console.log("check data in result card",JSON.stringify(data))
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
                {data?.jobs[0]?.locations[0]?.city}{","} {data?.jobs[0]?.locations[0]?.country}
                </Text>
            </View>
            <View style = {styles.bookmarkIcon}>
            <TouchableOpacity disabled={data.jobs[0].userSavedItem}
            style={{backgroundColor: (data.jobs[0].userSavedItem)? 'red' : 'white'}}
            onPress={() => onButtonClick(data)}>
            <Image source={images.vector} />
            </TouchableOpacity>
            </View>
        </View>
        <View style = {styles.detailsRow}>
            <Text style = {styles.roleName}>{data.jobs[0].role}</Text>
            <Text style = {styles.roleAttributes}></Text>
            <View style = {styles.roleHistory}>
            <Text style = {styles.rolePostedDate}>{(data?.jobs[0]?.userAppliedItem ? 'applied': '')}</Text>
                <Text style = {styles.rolePostedDate}>{data?.postedOn}</Text>
               
            </View>
        </View>
    </TouchableOpacity>
    )
}
// Styles for applied button change, for this data cards should be maped based on jobs
 //     { width: '90%',
    //     height: 150,
    //     backgroundColor:(data.jobs[0].userAppliedItem)? 'orange' :  Colors.white,
    //     alignSelf: 'center',
    //     borderRadius: Metrics.radius.large,
    //     marginVertical: Metrics.margin.xSmall,
    //   }  
export default ResultCard;