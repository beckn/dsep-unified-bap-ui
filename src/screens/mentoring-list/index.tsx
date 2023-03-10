import Tabs from "@components/Tabs";
import { ApiMethods } from "@constant/common.constant";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { callService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { styles } from "./styles";
import SearchBox from "@components/SearchBox";
import MentorCard from "@components/MentorCard";
import { Navigation } from "@interfaces/commonInterfaces";
import { useMentorContext } from "@context";
import Loader from "@components/Loader/Loader";
import NoData from "@components/NoData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";

const MentoringListScreen = ({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: any;
}) => {
  const { mentor } = route.params;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const { setSelectedMentorData, selectedMentorData, setTransactionId } =
    useMentorContext();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem("email");

    const resp = await callService(
      ApiMethods.POST,
      ENDPOINT.SEARCH_MENTORSHIP,
      { loggedInUserEmail: email, ...mentor }
    );
    if (resp?.status === 200 && resp?.data !== "") {
      setLoader(false);
      setData(resp.data.mentorshipProviders);
      setTransactionId(resp.data.context.transactionId);
    } else {
      setLoader(false);
    }
  };

  const setMentorshipData = (data) => {
    setSelectedMentorData(data);
    navigation.navigate("Mentorships", {
      mentorshipId: data.mentorshipId,
    });
  };

  return (
    <View style={styles.container}>
      {loader ? (
        <Loader />
      ) : data?.length > 0 ? (
        <>
           <Header navigation={navigation} 
        heading='Tutoring & Mentorship'
        />
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <MentorCard
                data={item}
                index={index}
                onPress={(data) => setMentorshipData(data)}
              />
            )}
            contentContainerStyle={styles.listContainer}
          />
        </>
      ) : (
        <NoData message={"No Data found"} />
      )}
    </View>
  );
};

export default MentoringListScreen;
