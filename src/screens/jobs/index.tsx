import Description from './Description';
import AboutCompany from './AboutCompany';
import React,{useState} from 'react';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import { useJobsInternshipsView} from '@context';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import { useEffect } from 'react';
import NavBar from '@components/Navbar';
import DetailHeader from '@components/DetailHeader';
import DescriptionJSON from '../../data/jobs-description.json';


const Jobs = ({navigation}: {navigation: Navigation}) => {
  const {setAboutCompany} = useJobsInternshipsView();
  const [data, setData]: any = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(DescriptionJSON);
    } else {
      console.log(resp);
    }
  };

  return (
    <>
       <NavBar hasBackArrow={true} hasRightIcon = {true} title={data?.selectedJobs[0]?.role} />
      <DetailHeader
        title={data?.company?.name}
        description={data?.selectedJobs[0]?.locations[0]?.city + ', ' +  data?.selectedJobs[0]?.locations[0]?.country}
        heading={data?.selectedJobs[0].employmentInformation.employmentInfo[0].value}
        time=""
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
