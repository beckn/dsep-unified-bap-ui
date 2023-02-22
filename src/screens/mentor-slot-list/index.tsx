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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ICONS, SVGIcon } from '@components/SvgIcon';

const SlotListScreen = ({navigation}) => {
  const {selectedMentorData, transactionId} = useMentorContext();
  const [selectedSlot, setSelectedSlot] = useState(false);
  const [loader, setLoader] = useState(false);

  const slotTime = moment(selectedMentorData.timingStart).format('hh:mm A');

  const confirmMentorship = async () => {
    console.log("selectedMentorData",selectedMentorData)
    setLoader(true);
    const fullName = await AsyncStorage.getItem('fullName');
    const email = await AsyncStorage.getItem('email');
    const mobileNumber = await AsyncStorage.getItem('phoneNumber');
    console.log("fullName",fullName)
    console.log("email",email)
    console.log("mobileNumber",mobileNumber)

    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.INIT_MENTORSHIP,
      {
        "mentorshipId": selectedMentorData?.mentorshipId,
        "mentorshipSessionId": selectedMentorData?.id,
        "context": {
          "transactionId": transactionId,
          "bppId": "dev.elevate-apis.shikshalokam.org/bpp",
          "bppUri": "https://dev.elevate-apis.shikshalokam.org/bpp"
        },
        "billing": {
          "name": fullName,
          "phone": mobileNumber,
          "email": "israr.khan@eminds.ai",
          "time": {
            "timezone": "IST"
          }
        }
      }
    );
      console.log("resp slot-list",resp)
    if (resp?.status === 200) {
      // navigation.navigate('MentorshipConfirmation');
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon={true} rightIconName={ICONS.IC_OPTIONS} title={'Mentoring'} />
      <DetailHeader
    title={selectedMentorData?.mentor?.name}
    description= {selectedMentorData?.mentor?.experience}
      />
      <View style={styles.slotView}>
        <Text style={styles.dateText}>
          {moment(selectedMentorData.timingStart).format('dddd, MMMM DD')}
        </Text>

        <TouchableOpacity
          style={[styles.slotContainer, selectedSlot && styles.selectedSlot]}
          onPress={() => setSelectedSlot(!selectedSlot)}>
          <Text style={styles.slotText}>{slotTime}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="confirm slot"
          onPress={confirmMentorship}
          disabled={!selectedSlot}
        />
      </View>
    </View>
  );
};

export default SlotListScreen;
