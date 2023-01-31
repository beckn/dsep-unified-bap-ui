import Spacer from '@components/Spacer';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import Button from '@components/AppButton';
import {styles}  from './styles';
import {Navigation} from '@interfaces/commonInterfaces';


const documents = [
    {
      id: 1,
      title: 'Proof of Identity',
    },
    {
      id: 2,
      title: 'Proof Of Address',
    },
    {
      id: 3,
      title: '10th & 12th Marksheets',
    },
    {
      id: 4,
      title: 'Previous academic marksheet',
    },
    {
        id: 5,
        title: 'Income Certificate/ITR/Salary Certificate',
    },
    {
        id: 6,
        title: 'Student Bank Passbook',
    },
    {
        id: 7,
        title: 'Current Year Fee receipt/Fee Structure - Tuition and Non Tuition',
    },
    {
        id: 8,
        title: 'Bonafide Certificate from Institute',
    },
  ]

function Eligibility({navigation}:{navigation: Navigation}) {

  const onClickApply =() =>{
    navigation.navigate("Confirmation",{
      id:2,
      heading:'H.G. Infra Engineering Ltd Scholarship for Medical Courses',
      time: '',
      imgPara: 'Congratulations!',
      para1: 'Your scholarship application was submitted successfully!',
      para2: 'We will evaluate your application and respond as soon as possible.'
 
    });
  }
  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
     <Text style={styles.heading}>{'Eligibility Criteria:'}</Text>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Qualification criteria :'} <Text style={[styles.params,styles.left]}>{'Minimum 50% in Class 10, One Minimum 50% in Class 12'}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Current Education : '} <Text style={[styles.params,styles.left]}>{'BAMS, BHMS, BUMS'}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Gender : '} <Text style={[styles.params,styles.left]}>{'All Gender'}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Family Income criteria : '} <Text style={[styles.params,styles.left]}>{'Family income is less than 500000.00'}</Text></Text>
     </View>
     <Spacer />
     <Text style={styles.heading}>{'Additional Information'}</Text>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Is your parent working in HG Infra ? If Yes,'}</Text>
     </View>
     <View style={{marginLeft: 30, marginTop:10}}>
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={styles.left}>{'Branch Name'}</Text>
     </View>
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={styles.left}>{'Designation'}</Text>
     </View>
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={styles.left}>{'ID card'}</Text>
     </View>
     </View> 
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Spoc Name : '} <Text style={[styles.params,styles.left]}>{'Tom A'}</Text></Text>
     </View>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Spoc Email : '} <Text style={[styles.params,styles.left]}>{'tom@xyz.com'}</Text></Text>
     </View>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Helpdesk Number : '} <Text style={[styles.params,styles.left]}>{'36364646'}</Text></Text>
     </View>
     <Spacer size={20}/>  
     <Text style={styles.heading}>{'While applying to scholarship, below documents need to be uploaded:'}</Text>
      <Spacer />
      <FlatList 
      data={documents}
      renderItem={({item,index})=>{
        return(<View style={styles.row} key={index}>
            <View style={styles.dot}></View>
            <Text style={styles.left}>{item.title}</Text>
            </View>)
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


export default Eligibility;
