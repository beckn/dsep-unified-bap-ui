import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from '../training/styles';
import {Navigation} from '@interfaces/commonInterfaces';



const courses = [
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
  },
]

const prerequisites = [
  {
    id: 1,
    name: 'Medical'
  },
  {
    id: 2,
    name: 'Dental'
  },
  {
    id: 3,
    name: 'Technical Cartification'
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
function Description({navigation}: {navigation: Navigation}) {

  const onClickBuyNow =() =>{
    navigation.navigate("Debit")
  }

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.spacer} />
        <Text style={styles.heading}>{'Job Description'}</Text>
        <View style={styles.spacer} />
        <Text>{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.'}</Text>
        <View style={styles.spacer} />  
        <Text style={styles.heading}>{'Requirements'}</Text>
        <View style={styles.spacer} />
        <FlatList 
         data={courses}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <View style={styles.dot}></View>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Informations'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Position'}</Text>
        <Text>{'Senior Designer'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Qualification'}</Text>
        <Text>{'Bachelor’s Degree'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Experience'}</Text>
        <Text>{'3 Years'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Job Type'}</Text>
        <Text>{'Full-Time'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{'Design'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Facilities and Others'}</Text>
        <FlatList 
         data={prerequisites}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Eligibility'}</Text>
        <FlatList 
         data={eligibility}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Course Fees'}</Text>
        <Text>{'₹2,500'}</Text>
      </View>  
      <View style={styles.bottom}>
       <Button onPress={onClickBuyNow} text={'Apply Now'} type="dark"/>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}


export default Description;
