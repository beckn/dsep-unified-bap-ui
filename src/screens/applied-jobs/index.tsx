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
import {useListView} from '@context';
import axios from 'axios';
import MentorCard from '@components/MentorCard';
import Rating from '@components/Ratings';
import {Fonts} from '@styles/fonts';
import {Text} from '@components/Text';

const AppliedJobs = ({navigation}) => {
  const [dropdownData, setDropdownData] = useState([
    {label: 'Jobs & Internships', value: 'jobs'},
    {label: 'Tutoring & Mentorship', value: 'mentorship'},
    {label: 'Scholarships & Grants', value: 'scholarship'},
    {label: 'Trainings & Courses', value: 'courses'},
  ]);
  const {list, selectedValue, setList, setSelectedValue} = useListView();
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('selectedValue: ', selectedValue);
  }, [selectedValue]);

  const ResultCards = () => {
    return (
      <FlatList
        data={list}
        renderItem={({item, index}) => (
          <ResultCard item={item} onItemPressed={item => console.log(item)} />
        )}
      />
    );
  };

  const MentorShipCards = () => {
    const mentorList = list.filter(item => item?.mentorship_id !== null);
    return (
      <FlatList
        data={mentorList}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <Text
                style={styles.nameStyle}
                fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                {item?.mentorship_id?.mentor}
              </Text>
              <Text
                style={styles.designationText}
                fontFamily={Fonts.family.DM_SANS_REGULAR}>
                {'Frontend Architect | Founder - ABC company'}
              </Text>
              <Rating rating={'4.5'} />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  const ScholarShipsCards = () => {
    const scholarShips = list.filter(item => item?.scholarship_id !== null);
    return (
      <FlatList
        data={scholarShips}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <Text
                style={styles.nameStyle}
                fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                {item?.scholarship_id?.title}
              </Text>
              <Text
                style={styles.designationText}
                fontFamily={Fonts.family.DM_SANS_REGULAR}>
                {item?.scholarship_id?.data}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  const CoursesCards = () => {
    const courses = list.filter(item => item?.course_id !== null);
    return (
      <FlatList
        data={courses}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.card} key={index}>
            <View style={styles.imageView} />
            <View style={styles.cardSpacing}>
              <View style={styles.detailsContainer}>
                <Text
                  style={styles.nameStyle}
                  fontFamily={Fonts.family.OPEN_SANS_REGULAR}>
                  {item?.course_id?.title}
                </Text>
                <Text
                  style={styles.designationText}
                  fontFamily={Fonts.family.DM_SANS_REGULAR}>
                  {'Duration : 23h 40m'}
                </Text>
              </View>
              <Text style={styles.provider}>
                {item?.course_id?.provider_id}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  const getData = async () => {
    console.log("job response appli check",);
    const resp = await axios.get(
      `${BASE_URL_PROFILE}${ENDPOINT.APPLIED_JOBS}test.user@gmail.com`,
    );
    console.log("job response appli check",JSON.stringify(resp));
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
