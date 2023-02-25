import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import DetailHeader from "@components/DetailHeader";
import Button from "@components/Button";
import { Text } from "@components/Text";
import NavBar from "@components/Navbar";
import { useMentorContext, userSkillView } from "@context";
import moment from "moment";
import { callService, profileApiCallInstance } from "@services";
import { ApiMethods } from "@constant/common.constant";
import { ENDPOINT } from "@services/endpoints";
import Loader from "@components/Loader/Loader";
import Spacer from "@components/Spacer";
import { Fonts } from "@styles/fonts";
import TitleCard from "@components/TitleCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MentorshipConfirmScreen = ({ navigation }) => {
  const { selectedMentorData, transactionId, selectedMentorObject } =
    useMentorContext();
  const [loader, setLoader] = useState(false);
  const { languages, skills, profileInfo } = userSkillView();

  const mentorshipData = [
    {
      title: "Session Title",
      desc: selectedMentorData?.mentorshipName,
    },
    { title: "Session Desc", desc: selectedMentorData?.mentorshipDesc },
    {
      title: "Selected Slot",
      desc: moment(selectedMentorData.timingStart).format(
        "DD/MM/YYYY, hh:mm A"
      ),
    },
  ];

  const slotTime = moment(selectedMentorData.timingStart).format("HH:mm A");

  const confirmMentorship = async () => {
    setLoader(true);
    const fullName = await AsyncStorage.getItem("fullName");
    const email = await AsyncStorage.getItem("email");
    const mobileNumber = await AsyncStorage.getItem("phoneNumber");
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.CONFIRM_MENTORSHIP,
      {
        mentorshipId: selectedMentorData?.mentorshipId,
        mentorshipSessionId: selectedMentorData?.id,
        context: {
          transactionId: transactionId,
          bppId: "dev.elevate-apis.shikshalokam.org/bpp",
          bppUri: "https://dev.elevate-apis.shikshalokam.org/bpp",
        },
        billing: {
          name: fullName,
          email: email,
          time: {
            timezone: "IST",
          },
        },
      }
    );

    if (resp?.status === 200 && resp?.data !== "") {
      addSlotData(resp.data.mentorshipApplicationId,resp.data.mentorshipSession.sessionJoinLinks[0].link);
    } else {
      setLoader(false);
    }
  };

  const addSlotData = async (mentorshipApplicationId,sessionLink) => {
    console.log("sessionLink",sessionLink)
    const email = await AsyncStorage.getItem("email");
    const resp = await profileApiCallInstance.post(
      ENDPOINT.ADD_MENTORDATA + email + "/applied",
      {
        _id: profileInfo.profile?.id,
        mentorshipSession_id: selectedMentorData?.id,
        mentorship_id: selectedMentorData?.mentorshipId, //mentorship id
        provider_id: selectedMentorData?.mentorshipProviderId, //mentorship provider id
        application_id: mentorshipApplicationId, //mentorshipApplicationId
        mentor: selectedMentorData.mentor.name, // mentorname
        mentorRating: null, //null
        mentorshipTitle: selectedMentorData.mentorshipName, //mentorship title
        mentorshipSessionJoinLink: sessionLink,
        data: selectedMentorObject, //on ly data
        bpp_id: "dev.elevate-apis.shikshalokam.org/bpp",
        bpp_uri: "https://dev.elevate-apis.shikshalokam.org/bpp",
        transaction_id: transactionId,
        created_at: new Date().toString(),
      }
    );
    console.log("resp223",resp)
    if (resp?.status === 200) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "MentorSlotConfirmation",
            params: {
              sessionLink: sessionLink,
            },
          },
        ],
      });
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon={true} title={"Mentoring"} />
      <DetailHeader
        rating="4.9"
        title={selectedMentorData?.mentor?.name}
        description={selectedMentorData?.mentor?.experience}
      />
      <View style={styles.detailsView}>
        {mentorshipData.map((data) => {
          return <TitleCard title={data.title} desc={data.desc} />;
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="confirm slot" onPress={confirmMentorship} />
      </View>
    </View>
  );
};

export default MentorshipConfirmScreen;
