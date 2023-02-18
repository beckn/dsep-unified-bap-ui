import Tabs from '@components/Tabs';
import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import SearchBox from '@components/SearchBox';
import MentorCard from '@components/MentorCard';
import {Navigation} from '@interfaces/commonInterfaces';
import {useMentorContext} from '@context';
import Loader from '@components/Loader/Loader';
import { Text } from '@components/Text';
import NoData from '@components/NoData';

const MentoringListScreen = ({navigation, route}: {navigation: Navigation, route: any}) => {
  const { mentor } = route.params;
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const {setMentorlist, mentorList, setSelectedMentorData, selectedMentorData} =
    useMentorContext();
  console.log('mentorList', JSON.stringify(mentorList));
  // const [loader, setLoader] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const navigateToAvailableDate = () => {
    navigation.navigate('MentorAvailableDate');
  };

  const List = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <MentorCard
            data={item}
            index={index}
            onPress={navigateToAvailableDate}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    );
  };

  const Demo = () => {
    return <View></View>;
  };

  const getData = async () => {
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.SEARCH_MENTORSHIP, mentor
      // {
      //   sessionTitle: {
      //     key: 'Management',
      //   },
      //   mentor: {
      //     name: 'joffin',
      //   },
      // },
    );
    console.log('resp', JSON.stringify(resp));
    if (resp?.status === 200) {
      setLoader(false)
      setMentorlist(resp.data.mentorshipProviders);
    } else {
      setLoader(false)
      console.log(resp?.message);
    }
  };

  const setMentorshipData = data => {
    setSelectedMentorData(data);
    navigation.navigate('Mentorships', {
      "mentorshipId": selectedMentorData.mentorshipId,
    });
  };

  return (
    <View style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
    
        mentorList.length > 0 ?
        <>
          <View style={styles.searchBoxContainer}>
            <SearchBox />
          </View>
          <FlatList
            data={mentorList}
            renderItem={({item, index}) => (
              <MentorCard
                data={item}
                index={index}
                onPress={data => setMentorshipData(data)}
              />
            )}
            contentContainerStyle={styles.listContainer}
          />
        </> :
        
        <NoData message= {"No Data found"} />

      )}
    </View>
  );
};

export default MentoringListScreen;
