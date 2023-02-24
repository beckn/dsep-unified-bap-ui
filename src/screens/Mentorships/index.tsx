import AboutMentor from "./AboutMentor";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Navigation } from "@interfaces/commonInterfaces";
import { callService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { ApiMethods } from "@constant/common.constant";
import NavBar from "@components/Navbar";
import DetailHeader from "@components/DetailHeader";
import { useMentorContext } from "@context";
import HeadingTitle from "@components/HeadingTitle";
import Loader from "@components/Loader/Loader";
import { ICONS } from "@components/SvgIcon";
const Mentorships = ({ navigation, route }: { navigation: Navigation }) => {
  const [data, setData]: any = useState({});
  const [loader, setLoader] = useState(true);
  const { mentorshipId } = route.params;
  const { selectedMentorData, transactionId, setSelectedMentorObject } =
    useMentorContext();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.SELECT_MENTORSHIP,
      {
        mentorshipId: selectedMentorData?.mentorshipId,
        context: {
          transactionId: transactionId,
          bppId: "dev.elevate-apis.shikshalokam.org/bpp",
          bppUri: "https://dev.elevate-apis.shikshalokam.org/bpp",
        },
      }
    );
    if (resp?.status === 200 && resp?.data !== "") {
      setData(
        resp.data.mentorshipProvider.mentorships[0].mentorshipSessions[0].mentor
      );
      setSelectedMentorObject(resp.data);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };
  const onClickApply = () => {
    navigation.navigate('MentorAvailableDate');
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <NavBar
            hasBackArrow={true}
            title={"Mentoring"}
            hasRightIcon={true}
            rightIconName={ICONS.IC_OPTIONS}
          />
          {Object.keys(data).length > 0 ? (
            <>
              <DetailHeader
                rating={selectedMentorData?.mentor?.rating}
                title={selectedMentorData?.mentor?.name}
                description={selectedMentorData?.mentor?.experience}
              />
              <HeadingTitle title="About Mentor" />
              <AboutMentor navigation={navigation} data={data} primaryButtonTitle={'Apply'} onPress ={onClickApply} />
            </>
          ) : (
            <View />
          )}
        </>
      )}
    </>
  );
};

export default Mentorships;
