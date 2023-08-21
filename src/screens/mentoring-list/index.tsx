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
  const [searchQuery, setSearchQuery] = useState('');
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

  function filterSessionsByMentorName(data, mentorName) {
    if (!mentorName) {
      return data;
    }

    const filteredData = [];

    for (const item of data) {
      const mentorships = item?.mentorships || [];

      for (const mentorshipArray of mentorships) {
        const mentorshipSessions = mentorshipArray?.mentorshipSessions || [];

        const filteredSessions = mentorshipSessions.filter(
          (session) =>
            session?.mentor?.name?.toLowerCase().includes(mentorName.toLowerCase())
        );

        if (filteredSessions.length > 0) {
          filteredData.push({
            ...item,
            mentorships: [
              {
                ...mentorshipArray,
                mentorshipSessions: filteredSessions,
              },
            ],
          });
        }
      }
    }
    return filteredData;
  }

  const onClearSearch = () => {
    setSearchQuery('')
  }

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
            data={filterSessionsByMentorName(data, searchQuery)}
            ListHeaderComponent={
              <View style={styles.searchBoxContainer}>
                <SearchBox
                onClear={onClearSearch}
                  value={searchQuery}
                  onSearch={(text) => setSearchQuery(text)}
                  placeholder="Search mentorship..."
                />
              </View>
            }
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
