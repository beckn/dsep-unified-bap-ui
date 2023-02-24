import Description from "./Description";
import LessonPlan from "./LessonPlan";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Tabs from "@components/Tabs";
import { Navigation } from "@interfaces/commonInterfaces";
import { callService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { ApiMethods } from "@constant/common.constant";
import Loader from "@components/Loader/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReqContextView } from '@context';


const TrainingStatus = ({ navigation, route, }: { navigation: Navigation; route: any; }) => {
  const [trainingData, setTrainingData]: any = useState();
  const [loader, setLoader] = useState(true);
  const { reqData, setreqData, headerData, setHeaderData } = ReqContextView();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log("check courses req data in training folder ", JSON.stringify(reqData))
    const resp = await callService(ApiMethods.POST, ENDPOINT.COURSE_STATUS, reqData);
    if (resp?.status == 200) {
      setTrainingData(resp?.data);
      setLoader(false);
    } else {
      console.log(resp);
      setLoader(false);
    }
  };

  
  return loader ? (
    <Loader />
  ) : (
    <>
      <Header
        navigation={navigation}
        heading={trainingData?.course?.name}
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
export default TrainingStatus;
