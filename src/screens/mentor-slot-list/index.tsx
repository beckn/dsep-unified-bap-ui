import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import Button from '@components/Button';
import {Text} from '@components/Text';
import NavBar from '@components/Navbar';
import { useMentorContext } from '@context';
import moment from 'moment';
import { callService } from '@services';
import { ApiMethods } from '@constant/common.constant';
import { ENDPOINT } from '@services/endpoints';

const SlotListScreen = ({navigation}) => {
  const {selectedMentorData} = useMentorContext()
  const [selectedSlot,setSelectedSlot] = useState(false)
  
  const slotTime = moment(selectedMentorData.timingStart).format('HH:mm A')

  const confirmMentorship = async () => {
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.CONFIRM_MENTORSHIP,
      {
        "mentorshipId": "63e6065223df082856936335",
        "mentorshipSessionId": "2494098b-a2e8-4d29-8791-1b708c458cb5",
        "context": {
          "transactionId": "bdb5ba09-2241-4f00-b434-73466cd06228",
          "bppId": "dev.elevate-apis.shikshalokam.org/bpp",
          "bppUri": "https://dev.elevate-apis.shikshalokam.org/bpp"
        },
        "billing": {
          "name": "Van Bode III",
          "phone": "881-311-2951 x01508",
          "email": "test_user@gmail.com",
          "time": {
            "timezone": "IST"
          }
        }
      }
          
      )
      
      if (resp?.status === 200) {
        navigation.navigate("MentorSlotConfirmation")
      }
    
  };

  return (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon = {true} title={'Mentoring'} />
      <DetailHeader
        rating="4.9"
        title="Mentor name"
        description="Frontend Architect | Founder - ABC company"
      />
      <View style={styles.slotView}>
        <Text style={styles.dateText}>{moment(selectedMentorData.timingStart).format('dddd, MMMM DD')}</Text>
       
          
            <TouchableOpacity style={[styles.slotContainer, selectedSlot && styles.selectedSlot]} onPress = {() => setSelectedSlot(!selectedSlot)}>
              <Text style={styles.slotText}>{slotTime}</Text>
            </TouchableOpacity>
          
        
      </View>
      <View style={styles.buttonContainer}>
        <Button title="confirm slot" onPress={confirmMentorship} disabled={!selectedSlot} />
      </View>
    </View>
  );
};

export default SlotListScreen;
