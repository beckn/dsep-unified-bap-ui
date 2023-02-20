import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import Button from '@components/Button';
import {Text} from '@components/Text';
import NavBar from '@components/Navbar';
import {useMentorContext} from '@context';
import moment from 'moment';
import {callService} from '@services';
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
      title: 'MentorShip Title',
      desc: selectedMentorData?.mentorshipName,
    },
    {title: 'Mentorship Desc', 
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
      setLoader(false);
      navigation.navigate('MentorSlotBooked');
    } else {
      setLoader(false);
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
        description="Frontend Architect | Founder - ABC company"
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
