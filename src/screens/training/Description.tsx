import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from '../../components/AppButton';
import {styles}  from './styles';
import {Navigation} from '@interfaces/commonInterfaces';



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
function Description({navigation}: {navigation: Navigation}) {

  const onClickBuyNow =() =>{
    navigation.navigate("Debit")
  }

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.spacer} />
        <Text style={styles.heading}>{'About thr Course'}</Text>
        <View style={styles.spacer} />
        <Text>{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.'}</Text>
        <View style={styles.spacer} />       
        <Text>{'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.'}</Text>
        <View style={styles.spacer} />  
        <Text style={styles.heading}>{'Course Highlights'}</Text>
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
        <Text style={styles.heading}>{'General Information'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Duration'}</Text>
        <Text>{'23h 40m'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Language'}</Text>
        <Text>{'English, Hindi'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Number of enrollments'}</Text>
        <Text>{'1,271'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{'Interaction Design'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Course Creator'}</Text>
        <Text>{'Udemy'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Provider'}</Text>
        <Text>{'Ignou'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Prerequisites'}</Text>
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
       <Button onPress={onClickBuyNow} text={'Buy Now'} type="dark"/>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
        <Button onPress={()=>{}} text={'GIFT THIS COURSE'} type=""/>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}


export default Description;
