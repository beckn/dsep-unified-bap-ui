import Description from "./Description";
import LessonPlan from "./LessonPlan";
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Tabs from "@components/Tabs";
import { Navigation } from "@interfaces/commonInterfaces";
import { callService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { ApiMethods } from "@constant/common.constant";
import Loader from "@components/Loader/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Training = ({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: any;
}) => {

  const [trainingData, setTrainingData]: any = useState();
  const [loader, setLoader] = useState(true);
  const { data, context } = route.params;
  const dataref = useRef();
  useEffect(() => {
    getData();
    console.log('trsinig', );
  }, [trainingData]);
  const getData = async () => {
    const reqData = {
      courseId: data.id,
      courseProviderId: data.provider.id,
      context: context,
    }
    console.log('reqData',reqData);
    const resp = await callService(ApiMethods.POST, ENDPOINT.SELECT_TRAINING, reqData);
    if (resp?.status == 200) {
      setTrainingData(resp?.data);
      dataref.current = resp.data;
      console.log('respData.data',resp.data);
      console.log('respData',resp);
      setLoader(false);
    } else {
      console.log(resp);
      setLoader(false);
    }
  };

  const onClickBuyNow = async () => {
    setLoader(true);
    const fullName = await AsyncStorage.getItem("fullName");
    const email = await AsyncStorage.getItem("email");
    const mobileNumber = await AsyncStorage.getItem("phoneNumber");
    const applicantProfile = {
      name: fullName,
      email: email,
      contact: mobileNumber,
    };
    const resp = await callService(ApiMethods.POST, ENDPOINT.INIT_TRAINING, {
      context: context,
      courseId: trainingData?.course?.id,
      CourseProviderId: trainingData?.course?.provider?.id,
      applicantProfile: applicantProfile,
      additionalFormData: {
        submissionId: Math.floor(100000 + Math.random() * 900000).toString(),
        data: [
          {
            formInputKey: "key123",
            formInputValue: "value123",
          },
        ],
      },
    });

    if (resp?.status == 200) {
      setLoader(false);
      // setResponse(resp?.data);
      navigation.navigate("ConfirmTraining", {
        data: trainingData,
        applicantProfile,
      });
    } else {
      setLoader(false);
      console.log(resp);
    }
  };
  return loader ? (
    <Loader />
  ) : (
    <>
      <Header
        navigation={navigation}
        heading=   {trainingData?.course?.name}
        online="online"
        video="video & lecture"
        education={""}
        rating={4.8}
      />
      <Tabs
        tabData={[
          {
            label: "Description",
            comp: (
              <Description
                navigation={navigation}
                data={trainingData}
                loader={loader}
                onClickBuyNow={onClickBuyNow}
                buyNowDisabled={data.userAppliedItem}
              />
            ),
          },
          {
            label: "Lesson Plan",
            // comp : <LessonPlan  navigation={navigation} onClickBuyNow = {onClickBuyNow}/>
          },
        ]}
      />
    </>
  );
};
export default Training;
