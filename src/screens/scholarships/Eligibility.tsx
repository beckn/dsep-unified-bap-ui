import Spacer from '@components/Spacer';
import React, {useState, useEffect} from 'react';
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
import EligibilityJSON from '../../data/eligibility.json';
import {ApiMethods} from '@constant/common.constant';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';

function Eligibility({navigation, data}:{navigation: Navigation, data:any}) {
  const [eledata, setEleData]: any = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setEleData(EligibilityJSON);
    } else {
      console.log(resp);
    }
  };

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
  const renderItem =({item,index})=>{
  return(
    <View style={styles.row} key={index}>
    <View style={styles.dot}></View>
    <Text style={styles.left}>{item.title}</Text>
    </View>

  )
  }

  return (
   <ScrollView >
     <SafeAreaView style={styles.container}>
     <Text style={styles.heading}>{'Eligibility Criteria:'}</Text>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Qualification criteria :'} <Text style={[styles.params,styles.left]}>{eledata?.criteria}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Current Education : '} <Text style={[styles.params,styles.left]}>{eledata?.education}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Gender : '} <Text style={[styles.params,styles.left]}>{eledata?.gender}</Text></Text>
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Family Income criteria : '} <Text style={[styles.params,styles.left]}>{eledata?.income}</Text></Text>
     </View>
     <Spacer />
     <Text style={styles.heading}>{'Additional Information'}</Text>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Is your parent working in HG Infra ? If Yes,'}</Text>
     </View>
     <Spacer />
     <View style={styles.rignt}>
     <FlatList 
      data={eledata?.fields}
      renderItem={renderItem}
     />
     </View>
     <Spacer />
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Spoc Name : '} <Text style={[styles.params,styles.left]}>{eledata?.spocName}</Text></Text>
     </View>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Spoc Email : '} <Text style={[styles.params,styles.left]}>{eledata?.spocEmail}</Text></Text>
     </View>
     <Spacer /> 
     <View style={styles.row}>
     <View style={styles.dot}></View>
     <Text style={[styles.heading,styles.left]}>{'Helpdesk Number : '} <Text style={[styles.params,styles.left]}>{eledata?.helpNumber}</Text></Text>
     </View>
     <Spacer size={20}/>  
     <Text style={styles.heading}>{'While applying to scholarship, below documents need to be uploaded:'}</Text>
      <Spacer />
      <FlatList 
      data={eledata?.documents}
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
