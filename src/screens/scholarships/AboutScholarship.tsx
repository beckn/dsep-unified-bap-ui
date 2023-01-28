import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '../../components/button';
import {styles}  from './styles';


const courses = [
  {
    id: 1,
    name: 'Fundamentals in UX'
  },
  {
    id: 2,
    name: 'Research'
  },
  {
    id: 3,
    name: 'Prototyping'
  },
  {
    id: 4,
    name: 'Design'
  },
  {
    id: 5,
    name: 'Presentation skills'
  }
]

const prerequisites = [
  {
    id: 1,
    name: 'Sed ut perspiciatis unde omnis iste natus error sit.'
  },
  {
    id: 2,
    name: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.'
  },
  {
    id: 3,
    name: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  },
  {
    id: 4,
    name: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  }
]

const eligibility = [
  {
    id: 1,
    name:'Sed ut perspiciatis unde omnis iste natus error sit.'
  },
  {
    id: 2,
    name:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.'
  }
]
function AboutScholarship({navigation}) {

  const onClickBuyNow =(navigation) =>{
    navigation.navigate('Debit')
  }

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
   </ScrollView>
  );
}


export default AboutScholarship;
