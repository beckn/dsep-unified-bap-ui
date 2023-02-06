import Description from './Description';
import AboutCompany from './AboutCompany';
import React from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import { useJobsInternshipsView} from '@context';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import aboutCompanyTabDetails from '../../data/about-company.json';
import { useEffect } from 'react';

const Jobs = ({navigation}: {navigation: Navigation}) => {
  const {setAboutCompany} = useJobsInternshipsView();
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setAboutCompany(aboutCompanyTabDetails);
    } else {
      console.log(resp);
    }
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <Header
        navigation={navigation}
        heading="UX Designer"
        online={''}
        video={''}
        education="Senior Fulltime Remote"
        rating={''}
      />
      <Tabs
        tabData={[
          {label: 'Description', comp: <Description navigation={navigation} />},
          {
            label: 'About Company',
            comp: <AboutCompany navigation={navigation} />,
          },
        ]}
      />
    </>
  );
};

export default Jobs;
