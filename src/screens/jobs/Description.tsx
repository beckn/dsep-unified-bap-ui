import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList, ScrollView} from 'react-native';
import Button from '@components/AppButton';
import {styles} from '../scholarships/styles';
import Spacer from '@components/Spacer';
import {Navigation} from '@interfaces/commonInterfaces';

function Description({navigation, data }: {navigation: Navigation, data: any}) {

  const onClickApply = () => {
    navigation.navigate('SubmitApplication');
  }
   const renderItem = ({item, index})=>{
    return(<>
    <View style={styles.row} key={index}>
    <View style={styles.dot}></View>
    <Text style={[styles.params, styles.left]}>
     {item}
    </Text>
    </View>
    <Spacer />
    </>)
   }

  return (  
    <ScrollView>
      <SafeAreaView style={styles.container}>
          <Text style={styles.heading}>{'Job Description'}</Text>
          <Spacer size={5}/>
          <Text>
            {data?.selectedJobs[0]?.description != undefined ? data?.selectedJobs[0]?.description : ""}
          </Text>
        <Spacer size={10} />

        <Text style={styles.heading}>{'Requirements:'}</Text>
        <Spacer />
        <FlatList 
         data = {data?.selectedJobs[0]?.responsibilities}
         renderItem={renderItem}
        />
        <Spacer />
        <Text style={styles.heading}>{'Informations:'}</Text>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Position'}</Text>
          <Text>{data?.selectedJobs[0]?.role}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Qualification'}</Text>
          <Text>
    {data?.selectedJobs[0]?.educationalQualifications[0]?.qualification[0].value != undefined ? data?.selectedJobs[0]?.educationalQualifications[0]?.qualification[0].value: ""
          }{' '}{'Degree'}
          </Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Experience'}</Text>
          <Text>{data?.selectedJobs[0]?.workExperience?.experience[0]?.value}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Job Type'}</Text>
          <Text>{data?.selectedJobs[0].employmentInformation.employmentInfo[0].value}</Text>
        </View>
        <Spacer />
        <View style={styles.card}>
          <Text style={styles.heading}>{'Specialization'}</Text>
          <Text>{}</Text>
        </View>
        <Spacer />
        <Text style={styles.heading}>{'Facilities and others:'}</Text>
        <Spacer />
        {/* <FlatList 
         data={DescriptionJSON.facilities}
         renderItem={renderItem}
        /> */}
      </SafeAreaView>
      <View style={styles.bottom}>
        <Button onPress={onClickApply} text={'Apply'} type="dark" />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default Description;
