import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DetailHeader from '@components/DetailHeader';
import Button from '@components/Button';
import {Text} from '@components/Text';
import NavBar from '@components/Navbar';

const SlotListScreen = ({navigation}) => {
  const [slotData, setSlotData] = useState(['4:00 pm', '5:00 pm']);

  return (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon = {true} title={'Mentoring'} />
      <DetailHeader
        rating="4.9"
        title="Mentor name"
        description="Frontend Architect | Founder - ABC company"
      />
      <View style={styles.slotView}>
        <Text style={styles.dateText}>Thursday, September 2</Text>
        {slotData.map((item, index) => {
          return (
            <TouchableOpacity style={styles.slotContainer}>
              <Text style={styles.slotText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="confirm slot" onPress={() => navigation.navigate("MentorSlotConfirmation")} />
      </View>
    </View>
  );
};

export default SlotListScreen;
