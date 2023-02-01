import { styles } from "./styles";
import React from "react";
import {View, Text, FlatList} from 'react-native';

const notificationData = [
    {
        id:1,
        notificatin1:'Congratulations! ',
        notification2 : 'Wipro ',
        notification3: 'liked your resume and want to take an interview of you.',
        time:"4 hrs ago"
    },
    {
        id:2,
        notificatin1:'Congratulations! You passed the first round at',
        notification2:' Google.',
        notification3:' Be prepare for next!',
        time:"6 hrs ago"
    },
    {
        id:3,
        notificatin1:'Congratulations! ',
        notification2 : 'Wipro ',
        notification3: 'liked your resume and want to take an interview of you.',
        time:"4 hrs ago"
    },
    {
        id:4,
        notificatin1:'Congratulations! You passed the first round at',
        notification2:' Google.',
        notification3:' Be prepare for next!',
        time:"6 hrs ago"
    },
]

const Notification =() =>{
 return(
    <View style={styles.container}>
        <FlatList 
           data={notificationData}
           renderItem= {({item,index})=>{
              return(
                 <View style={styles.card}  key={index}>
                 <View style={styles.leftPart}>
                 <View style={styles.icon}></View>
                 </View>
                 <View style={styles.rightPart}>
                 <Text style={styles.text}>{item.notificatin1}<Text style={styles.highLight}>{item.notification2}</Text>{item.notification3}</Text>
                 <Text style={styles.time}>{item.time}</Text>
                 </View>
                 </View>
                )
            }}
        />
    </View>
 )
}
export default Notification;