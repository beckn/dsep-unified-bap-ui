import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";
import Button from "@components/Button";
import { styles } from "./styles";
import Spacer from "@components/Spacer";
import { Navigation } from "@interfaces/commonInterfaces";
import { Text } from "@components/Text";
import { Fonts } from "@styles/fonts";
import TitleCard from "@components/TitleCard";
import { useMentorContext } from "@context";

function AboutMentor({navigation,data,}:{navigation: Navigation; data: any}) {
  const { selectedMentorData } = useMentorContext();

  const onClickApply = () => {
    navigation.navigate("MentorAvailableDate");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          fontFamily={Fonts.family.OPEN_SANS_REGULAR}
          style={styles.aboutMentorTitle}
        >
          {"About mentor"}
        </Text>
        <View style={styles.card}>
          <Spacer />
          <Text
            fontFamily={Fonts.family.OPEN_SANS_REGULAR}
            style={styles.aboutMentordesc}
          >
            {data.aboutMentor}
          </Text>
        </View>
        <Spacer size={20} />
        <Spacer />
        <Text style={styles.otherInformation}>{"Other information"}</Text>
        <Spacer />
        <TitleCard title={"Professional experience"} desc={data.experience} />
        <TitleCard title={"Qualification"} desc={data.qualification} />
        <TitleCard title={"Total Meetings"} desc={data.totalMeetings} />
        <TitleCard title={"Specialist in"} desc={data.specialisation} />
        <Spacer />
      </View>
      <View style={styles.bottom}>
        <Button
          onPress={onClickApply}
          title={"Apply"}
        />
        <Spacer size={10} />
      </View>
    </ScrollView>
  );
}

export default AboutMentor;
