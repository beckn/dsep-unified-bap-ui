import React from 'react';
import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';

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


  const renderLessionData = ({item, index})=>{
    return (<><View style={styles.card}>
    <View style={{flex:10.5,top:1}}>
    <Text style={styles.heading}>{item.heading}</Text>
    <Text style={{top:2}}>{item.time}</Text>
    </View>
    <View style={{flex:1.5,  alignItems:'center', top:4}}>
   <Image source={images.downArrow} style={{top:5}} /> 
    </View>
    </View>
    <View style={{backgroundColor:'gray', height:0.7, opacity:0.4}} />
    </> )

  }
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{'Design Thinking'}</Text>
        <Image source={images.vector} />
        </View>
          <View style={styles.video}>
            <Text>{'online'}</Text>
            <View style={styles.horizontalSpace} />
            <Text>{'video & lecture'}</Text>
          </View>
      </View>
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
        <Text style={{color:'#5D91CC'}}>{'23 comments '}</Text>
        <Image source={images.inclindArrow}/>
        </View>
      

      </View>
      <View style={styles.bottom}>
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.buyButton}>
        <Text style={{color:'#ffffff'}}>{'Buy Now'}</Text>
        </View>
       </TouchableOpacity>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.getButton}>
        <Text style={{color:'#000000'}} >{'GIFT THIS COURSE'}</Text>
        </View>
       </TouchableOpacity>
      </View>
       
    </View>
    )
}

export default LessonPlan;