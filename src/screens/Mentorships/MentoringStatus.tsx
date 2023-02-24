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
const MentorshipStatus = ({ navigation, route }: { navigation: Navigation }) => {
  const [mentorData, setMentorData]: any = useState({});
  const [metorshipApplicationStatus, setMentorshipApplicationStatus]: any = useState("");
  const [loader, setLoader] = useState(true);
  const { applicationId } = route.params;
  const { transactionId } = useMentorContext();

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const resp = await callService(
        ApiMethods.POST,
        ENDPOINT.MENTORSHIP_STATUS,
        {
          mentorshipApplicationId: applicationId,
          context: {
            transactionId: transactionId,
            bppId: "dev.elevate-apis.shikshalokam.org/bpp",
            bppUri: "https://dev.elevate-apis.shikshalokam.org/bpp",
          },
        }
      );
      console.log("respStatus",JSON.stringify(resp))
      if (resp?.status === 200 && resp?.data !== "") {
        setMentorshipApplicationStatus(resp?.data?.mentorshipApplicationStatus)
        setMentorData(
          resp.data.mentorshipProvider.mentorships[0].mentorshipSessions[0].mentor
        );
        setLoader(false);
      } else {
        setLoader(false);
      }
    };

    const goToHome = () => {
      navigation.navigate("Home")
    }

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
          {Object.keys(mentorData).length > 0 ? (
            <>
              <DetailHeader
                rating={mentorData?.rating}
                title={mentorData?.name}
                description={mentorData?.experience}
              />
              <HeadingTitle title="About Mentor" />
              <AboutMentor navigation={navigation} data={mentorData} primaryButtonTitle={metorshipApplicationStatus} primaryOnPressDisabled={true} hasSecondaryButton={true} secondaryButtonTitle={'go to home'} onSecondaryPress={goToHome} />
            </>
          ) : (
            <View />
          )}
        </>
      )}
    </>
  );
};

export default MentorshipStatus;
