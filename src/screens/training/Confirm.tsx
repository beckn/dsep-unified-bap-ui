import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import Button from "@components/AppButton";
import { styles } from "./styles";
import { Navigation } from "@interfaces/commonInterfaces";
import Spacer from "@components/Spacer";
import Loader from "@components/Loader/Loader";
import { callService, ProfileCallService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { ApiMethods } from "@constant/common.constant";
import { ReqContextView, userSkillView } from "@context";

function ConfirmTraining({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: any;
}) {
  const { data, applicantProfile } = route.params;
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState("");
  const { reqData, setreqData } = ReqContextView();
  const { languages, skills, profileInfo } = userSkillView();
  const email = profileInfo.profile?.email;


  const AddItemToProfile = async (item) => {
    let req = {
      _id: profileInfo.profile?.id,
      course_id: item?.course?.id,
      provider_id: item?.course?.provider?.id,
      application_id: item?.applicationId,
      title: item?.course?.name,
      duration: item?.course?.duration,
      courseUrl: item?.courseDetails?.courseUrl,
      data: JSON.stringify(item),
      bpp_id: item.context.bppId,
      bpp_uri: item.context.bppUri,
      transaction_id: item.context.transactionId,
      created_at: new Date().toString(),
    };
    let end =
      ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE + "/course/" + email + "/applied";
    console.log("Data to be sent", JSON.stringify(req), end);
    try {
      const resp = await ProfileCallService(ApiMethods.POST, end, req);
      console.log("check saved profile respo", JSON.stringify(resp));
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Confirmation",
            params: {
              id: 2, // resp?.data?.application_id,
              heading: resp?.data?.title,
              time: resp?.data?.duration,
              imgPara: "Successful",
              courseUrl: resp?.data?.courseUrl,
              para1: "Congratulations, your application has been sent",
            },
          },
        ],
      });
    } catch (error) {}
  };

  const onConfirmPress = async () => {
    const request = {};

    request.context = {
      transactionId: data.context.transactionId,
      bppId: data.context.bppId,
      bppUri: data.context.bppUri,
    };
    request.courseId = data.course.id;
    request.CourseProviderId = data.course.provider.id;
    request.applicantProfile = applicantProfile;
    setLoader(true);
    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.CONFIRM_TRAINING,
      request
    );
    if (resp?.status == 200) {
      setLoader(false);
      setResponse(resp?.data);
      console.log("::::::", resp?.data);

      // navigation.navigate("Confirmation", {
      //   id: 2, //resp?.data?.applicationId,
      //   heading: resp?.data?.course?.name,
      //   time: resp?.data?.course?.duration,
      //   imgPara: "Successful",
      //   para1: "Congratulations,  you have successfully unlocked the course",
      // });

      AddItemToProfile(resp.data);

      console.log("resp?.data--->>>", resp?.data);
    } else {
      setLoader(false);
      console.log(resp);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <View style={styles.body}>
            <Spacer />
            <Text style={styles.heading}>{"About the Course"}</Text>
            <Spacer />
            <Text>{data?.course?.description  || 'NA'}</Text>

            <Spacer />

            <Text style={styles.heading}>{"Duration"}</Text>
            <Text>{data?.course.duration  || 'NA'}</Text>
            <Spacer />
            <Text style={styles.heading}>{"Language"}</Text>
            <Text>{data?.language  || 'NA'}</Text>
            <Spacer />

            <Text style={styles.heading}>{"Specialization"}</Text>
            <Text>{data?.specialization  || 'NA'}</Text>
            <Spacer />
            <Text style={styles.heading}>{"Course Creator"}</Text>
            <Text>{data?.courseDetails?.instructors  || 'NA'}</Text>
            <Spacer />
            <Text style={styles.heading}>{"Course Fees"}</Text>
            <Text>{data?.courseDetails?.price || 'NA'}</Text>
          </View>
          <View style={styles.bottom}>
            <Button onPress={onConfirmPress} text={"Confirm"} type="dark" />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export default ConfirmTraining;
