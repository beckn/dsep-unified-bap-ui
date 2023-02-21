import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import Button from '@components/Button';
import {Text} from '@components/Text';
import NavBar from '@components/Navbar';
import {useMentorContext} from '@context';
import moment from 'moment';
import {callService, profileApiCallInstance} from '@services';
import {ApiMethods} from '@constant/common.constant';
import {ENDPOINT} from '@services/endpoints';
import Loader from '@components/Loader/Loader';
import Spacer from '@components/Spacer';
import {Fonts} from '@styles/fonts';
import TitleCard from '@components/TitleCard';

const MentorshipConfirmScreen = ({navigation}) => {
  const {selectedMentorData,transactionId} = useMentorContext();
  const [loader, setLoader] = useState(false);

  const mentorshipData = [
    {
      title: 'Session Title',
      desc: selectedMentorData?.mentorshipName,
    },
    {title: 'Session Desc', 
    desc: selectedMentorData?.mentorshipDesc},
    {
      title: 'Selected Slot',
      desc: moment(selectedMentorData.timingStart).format(
        'DD/MM/YYYY, hh:mm A',
      ),
    },
  ];

  const slotTime = moment(selectedMentorData.timingStart).format('HH:mm A');

  const confirmMentorship = async () => {
    setLoader(true);
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.CONFIRM_MENTORSHIP,
      {
        "mentorshipId": selectedMentorData?.mentorshipId,
        "mentorshipSessionId": selectedMentorData?.id,
        "context": {
          "transactionId": transactionId,
          bppId: 'dev.elevate-apis.shikshalokam.org/bpp',
          bppUri: 'https://dev.elevate-apis.shikshalokam.org/bpp',
        },
        billing: {
          name: 'Van Bode III',
          phone: '881-311-2951 x01508',
          email: 'test_user@gmail.com',
          time: {
            timezone: 'IST',
          },
        },
      },
    );

    if (resp?.status === 200) {
      console.log("=====>",resp)
      setLoader(false);
      addSlotData()
      // navigation.navigate('MentorSlotBooked');
    } else {
      setLoader(false);
    }
  };

  const addSlotData = async () => {
    const resp = await profileApiCallInstance.post( ENDPOINT.ADD_MENTORDATA+"test_user@gmail.com/save",{
      "_id": "5f92cbf10cf217478ba93571",
      "mentorship_id": "63e6298723df08285693637b",
      "provider_id": "63d93aea62820fd9e6be9d1b",
      "application_id": null,
      "mentor": "John Doe 2",
      "mentorRating": "4.2",
      "mentorshipTitle\"": "Class Room Engineering Level 1",
      "data": "Response object from select api",
      "bpp_id": "dev.elevate-apis.shikshalokam.org/bpp",
      "bpp_uri": "https://dev.elevate-apis.shikshalokam.org/bpp",
      "created_at": "2023-01-27T07:10:30Z"
    });
    if (resp?.status === 200) {
      console.log("implemented")
      // setData(resp.data);
    } else {
      console.log(resp?.message);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon={true} title={'Mentoring'} />
      <DetailHeader
        rating="4.9"
        title={selectedMentorData?.mentor?.name}
        description={selectedMentorData?.mentor?.experience}
      />
      <View style={styles.detailsView}>
        
        {
           mentorshipData.map((data)=>{
              return <TitleCard title={data.title} desc={data.desc} />
       })
      }
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="confirm slot"
          onPress={confirmMentorship}
        />
      </View>
    </View>
  );
};

export default MentorshipConfirmScreen;
