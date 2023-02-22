import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {callService} from '@services';
import {BASE_URL_PROFILE, ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import ResultCard from './ResultCard';
import {Dropdown} from '@components/Dropdown';
import Header from './Header';
import SavedJSON from '../../data/saved-jobs.json';
import {ReqContextView, useListView} from '@context';
import axios from 'axios';
import MentorCard from '@components/MentorCard';
import Rating from '@components/Ratings';
import {Fonts} from '@styles/fonts';
import {Text} from '@components/Text';
import {userSkillView} from '@context';

const AppliedJobs = ({navigation}) => {
  const {profileInfo} = userSkillView();
  const [dropdownData, setDropdownData] = useState([
   {label: 'Jobs & Internships', value: 'jobs'},
    {label: 'Tutoring & Mentorship', value: 'mentorships'},
    {label: 'Scholarships & Grants', value: 'scholarships'},
    {label: 'Trainings & Courses', value: 'courses'},
  ]);
  const {list, selectedValue, setList, setSelectedValue} = useListView();
  const [data, setData] = useState(null);
  const email = profileInfo.profile?.email;
  const {reqData, setreqData} = ReqContextView();
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('selectedValue: ', selectedValue);
    getData();
  }, [selectedValue]);

  const ResultCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <ResultCard
            item={item}
            onItemPressed={item => {
              let reqdata1 = {
                context: {
                  bppId: item.bpp_id,
                  bppUri: item.bpp_uri,
                },
                companyId: item.provider_id,
                jobs: {
                  jobId: item.job_id,
                },
              };
              setreqData(reqdata1);
              navigation.navigate('Jobs');
            }}
          />
        )}
        ListEmptyComponent={ListEmptyComp}
      />
    );
  };

  cconst MentorShipCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <Text
                style={styles.nameStyle}
                fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                {item?.mentor}
              </Text>
              <Text
                style={styles.designationText}
                fontFamily={Fonts.family.DM_SANS_REGULAR}>
                {item?.mentorshipTitle}
              </Text>
              <Rating rating={item?.mentorRating} />
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={ListEmptyComp}
      />
    );
  };

  const ScholarShipsCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <Text
                style={styles.nameStyle}
                fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                {item?.title}
              </Text>
              <Text
                style={styles.designationText}
                fontFamily={Fonts.family.DM_SANS_REGULAR}>
                {item?.data}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={ListEmptyComp}
      />
    );
  };

  const CoursesCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <View style={styles.detailsContainer}>
                <Text
                  style={styles.nameStyle}
                  fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                  {item?.title}
                </Text>
                <Text
                  style={styles.designationText}
                  fontFamily={Fonts.family.DM_SANS_REGULAR}>
                  {item?.duration}
                </Text>
              </View>
              <Text style={styles.provider}>{item?.provider_id}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={ListEmptyComp}
      />
    );
  };

  const ListEmptyComp = () => (
    <View style={styles.listEmptyContainer}>
      <Text style={styles.listEmptyTextStyle}>No Data Found</Text>
    </View>
  );

  const getData = async () => {
    console.log('job response appli check');
    const resp = await axios.get(
      `${BASE_URL_PROFILE}${ENDPOINT.APPLIED_JOBS}${email}`,
    );
    console.log('job response appli check', JSON.stringify(resp));
    if (resp?.status === 200) {
      console.log(JSON.stringify(resp.data));
      setData(resp.data);
      if (selectedValue) {
        setList(resp.data[selectedValue.toString()]);
      }
    } else {
      console.log(resp);
    }
  };
  return (
    <View style={styles.container}>
      <Header heading={'Applied Jobs'} />
      <View style={styles.dropdownContainer}>
        <Dropdown
          data={dropdownData}
          onSelect={value => {
            setSelectedValue(value);
            if (data && value) {
              setList(data[value]);
            }
          }}
        />
      </View>
      {selectedValue && selectedValue.toString() === 'jobs' ? (
        <ResultCards />
      ) : null}
      {selectedValue && selectedValue.toString() === 'mentorship' ? (
        <MentorShipCards />
      ) : null}
      {selectedValue && selectedValue.toString() === 'scholarship' ? (
        <ScholarShipsCards />
      ) : null}
      {selectedValue && selectedValue.toString() === 'courses' ? (
        <CoursesCards />
      ) : null}
    </View>
  );
};

export default AppliedJobs;
