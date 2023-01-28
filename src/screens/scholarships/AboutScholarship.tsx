import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import Button from '../../components/button';
import {styles}  from './styles';
import Spacer from '../../components/spacer';


const aboutScholarData = [
  {
    id: 1,
    heading: 'Name',
    value: 'H.G. Infra Engineering Ltd Scholarship for Medical Courses (2022-23)'
  },
  {
    id: 2,
    heading: 'Description',
    value: 'H.G. Infra Engineering Ltd Scholarship for Medical Courses (2022-23)'
  },
  {
    id: 3,
    heading: 'Type',
    value: "Scholarship"
  },
  {
    id: 4,
    heading: 'Scheme Provider Name',
    value: "H.G. Infra Engineering Ltd"
  },
  {
    id: 5,
    heading: 'Financial Year',
    value: "2022-2023"
  },
  {
    id: 6,
    heading: 'Scheme Amount',
    value: "₹40000.00"
  },
  {
    id: 7,
    heading: 'Application Start Date',
    value: "1st Jan 2023"
  },
  {
    id: 8,
    heading: 'Application End Date',
    value: "31st Dec 2023"
  }
]


function AboutScholarship({navigation}) {

  const onClickApply =(navigation) =>{
    Alert.alert('hi')
  }

  
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>{'General Information'}</Text>
        <FlatList 
          data={aboutScholarData}
          renderItem={({ item, index }) => { 
            return(
                <View key={index}>
                 <View style={styles.card} >
                 <Text style={styles.heading}>{item.heading}</Text>
                 <Text>{item.value}</Text>
                 </View>
                <View style={styles.line}></View>
                </View>
            )
          }}
        />
        <Spacer size={20}/>
    </SafeAreaView>
    <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       <Spacer size={10}/>
      </View> 
   </ScrollView>
  );
}


export default AboutScholarship;
