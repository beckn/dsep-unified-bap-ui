import AboutMentor from './AboutMentor';
import React, {useState,useEffect} from 'react';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import NavBar from '@components/Navbar';
import DetailHeader from '@components/DetailHeader';
const Mentorships = ({navigation}: {navigation: Navigation}) =>{
  const [data, setData]: any = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.POST,ENDPOINT.MENTORSHIP_SELECT,
      {
        "mentorshipId": "63e6065223df082856936335",
        "context": {
          "transactionId": "bdb5ba09-2241-4f00-b434-73466cd06228",
          "bppId": "dev.elevate-apis.shikshalokam.org/bpp",
          "bppUri": "https://dev.elevate-apis.shikshalokam.org/bpp"
        }
      }
    );
    if (resp?.status == 200) {
      setData(resp?.data);
      console.log('resp?.data---Mentorships>>>',resp?.data.mentorshipProvider);
    } else {
      console.log(resp);
    }
  };
    return(
    <>
     <NavBar hasBackArrow={true}  title ={'Mentoring'} hasSecondaryRightIcon ={true}  rightIconName ={''} />
      <DetailHeader
        // title={data?.company?.name}
        time=""
        rating={data?.mentorshipProvider?.mentorships[0]?.mentorshipSessions[0]?.mentor?.rating}
        title={data?.mentorshipProvider?.mentorships[0]?.mentorshipSessions[0]?.mentor?.name}
      />
    <Tabs
        tabData={[
          {label: 'About Mentor',comp : <AboutMentor navigation={navigation} data={data} />},
        ]}
      />
    </>
    )

}

export default Mentorships;