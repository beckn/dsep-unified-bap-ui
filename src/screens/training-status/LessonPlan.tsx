import React,{useState, useEffect} from 'react';
import { View, Text, FlatList,Image, ScrollView } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images';
import Button from '@components/AppButton';
import Spacer from '@components/Spacer';
import {ICONS, SVGIcon } from '@components';
import { Colors } from '@styles/colors';
import LessonPlanJSON from '../../data/lesson-plan.json';
import {ApiMethods} from '@constant/common.constant';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';

function LessonPlan({navigation, onClickBuyNow}){
  const [data, setData]: any = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(LessonPlanJSON);
    } else {
      console.log(resp);
    }
  };
  // const onClickBuyNow =(navigation) =>{
  //   navigation.navigate('Debit')
  // }

  const renderLessionData = ({item, index})=>{
    return (<><View style={[styles.card, styles.row]} key={index}>
    <View style={styles.lessonPlanCardHeader}>
    <Text style={styles.heading}>{item.heading}</Text>
    <Text style={{top:2}}>{item.time}</Text>
    </View>
    <View style={styles.lessonPlanArrow}>
    <SVGIcon
          name={ICONS.IC_DOWN_ARROW}
          fill={Colors.oliveBlack}
    />
    </View>
    </View>
    <View style={styles.lessionLine} />
    </> )

  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
      <Spacer />
        <FlatList 
         data={data.lessonData}
         renderItem={renderLessionData}
        />
        <Spacer />
        <Text >{'Discussions'}</Text>
        <Spacer />
        <View style={styles.rowDirection}>
        <Text style={styles.comments}>{data.discussions}</Text>
        <Image source={images.inclindArrow}/>
        </View>
      </View>
      <View style={styles.bottom}>
       <Button onPress={()=>onClickBuyNow(navigation)} text={'Buy Now'} type="dark"/>
       <Spacer size={20}/>
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View>
    </ScrollView>
  )
}

export default LessonPlan;