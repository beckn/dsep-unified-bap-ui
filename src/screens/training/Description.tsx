import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import {Navigation} from '@interfaces/commonInterfaces';
import Spacer from '@components/Spacer';
import Loader from '@components/Loader/Loader';


function Description({navigation, data, loader}: {navigation: Navigation, data:any,loader:boolean}) {

  const onClickBuyNow =() =>{
    navigation.navigate("Debit")
  }

  return (
   <ScrollView style={styles.container}>
     
     <SafeAreaView style={styles.container}>
     {loader && <Loader />}
      <View style={styles.body}>
        <Spacer />
        <Text style={styles.heading}>{'About thr Course'}</Text>
        <Spacer />
        <Text>{data?.course?.description}</Text>
        <Spacer />      
        {/* <Text>{data?.para2}</Text>
        <Spacer />  */}
        <Text style={styles.heading}>{'Course Highlights'}</Text>
        <Spacer />
        <FlatList 
         data={data?.courseDetails?.courseHighlights}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <View style={styles.dot}></View>
            <Text style={styles.left}>{item.value}</Text>
           </View>
          </>
         }}
        />
        <Spacer />
        <Text style={styles.heading}>{'General Information'}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Duration'}</Text>
        <Text>{data?.course.duration}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Language'}</Text>
        <Text>{data?.language}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Number of enrollments'}</Text>
        <Text>{data?.enrollments}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{data?.specialization}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Course Creator'}</Text>
        <Text>{data?.courseDetails?.instructors}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Provider'}</Text>
        <Text>{data?.course?.provider?.name}</Text>
        <Spacer />
        <Text style={styles.heading}>{'Prerequisites'}</Text>
        <FlatList 
         data={data?.courseDetails?.prerequisites}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.value}</Text>
           </View>
          </>
         }}
        />
       <Spacer />
        <Text style={styles.heading}>{'Eligibility'}</Text>
        <FlatList 
         data={data?.courseDetails?.eligibility}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.value}</Text>
           </View>
          </>
         }}
        />
         <Spacer />
        <Text style={styles.heading}>{'Course Fees'}</Text>
        <Text>{data?.courseDetails?.price}</Text>
      </View>  
      <View style={styles.bottom}>
       <Button onPress={onClickBuyNow} text={'Buy Now'} type="dark"/>
       <Spacer size={20}/>
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}


export default Description;
