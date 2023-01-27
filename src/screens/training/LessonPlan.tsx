import React from 'react';
import { View, Text, FlatList,Image } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import Button from '../../components/button';

const lessionData = [
  {
    id:1,
    heading: 'Lesson 1 : Sed ut perspiciatis unde omnis iste.',
    time: '1h 25m'
  },
  {
    id:2,
    heading: 'Lesson 2 : Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    time: '1h 10m'
  },
  {
    id:3,
    heading: 'Lesson 3 : Exercitationem ullam corporis suscipit laboriosam',
    time: '1h 5m'
  },
  {
    id:4,
    heading: 'Lesson 4 : Ut enim ad minima veniam, quis nostrum ',
    time: '1h 15m'
  },
  {
    id:5,
    heading: 'Lesson 5 : Voluptatem quia voluptas sit aspernatur',
    time: '1h 11m'
  },
  {
    id:6,
    heading: 'Lesson 6 : Ut enim ad minima veniam, quis nostrum ',
    time: '1h 2m'
  },
]
function LessonPlan({navigation}){
const onClickBuyNow =(navigation) =>{
    navigation.navigate('Debit')
  }

  const renderLessionData = ({item, index})=>{
    return (<><View style={styles.card} key={index}>
    <View style={styles.lessonPlanCardHeader}>
    <Text style={styles.heading}>{item.heading}</Text>
    <Text style={{top:2}}>{item.time}</Text>
    </View>
    <View style={styles.lessonPlanArrow}>
   <Image source={images.downArrow} style={{top:5}} /> 
    </View>
    </View>
    <View style={styles.lessionLine} />
    </> )

  }
    return (
    <View style={styles.container}>
      <View style={styles.body}>
      <View style={styles.spacer}  />
        <FlatList 
         data={lessionData}
         renderItem={renderLessionData}
        />
        <View style={styles.spacer} />
        <Text >{'Discussions'}</Text>
        <View style={styles.spacer} />
        <View style={styles.rowDirection}>
        <Text style={styles.comments}>{'23 comments '}</Text>
        <Image source={images.inclindArrow}/>
        </View>
      </View>
      <View style={styles.bottom}>
       <Button onPress={()=>onClickBuyNow(navigation)} text={'Buy Now'} type="dark"/>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View>
    </View>
    )
}

export default LessonPlan;