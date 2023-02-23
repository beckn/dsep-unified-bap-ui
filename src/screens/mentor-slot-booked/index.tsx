import { ApiMethods } from "@constant/common.constant";
import React, { useEffect, useState } from "react";
import { Linking, View } from "react-native";
import { callService } from "@services";
import { ENDPOINT } from "@services/endpoints";
import { styles } from "./styles";
import DetailHeader from "@components/DetailHeader";
import SuccessCard from "@components/SuccessCard";
import Button from "@components/Button";
import { Colors } from "@styles/colors";
import NavBar from "@components/Navbar";
import { useMentorContext } from "@context";
import moment from "moment";
import { StackActions } from "@react-navigation/native";

const SlotBookedScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const { selectedMentorData } = useMentorContext();
  const { sessionLink } = route.params;

  return (
    <View style={styles.container}>
      <NavBar hasBackArrow={false} hasRightIcon={false} />
      <DetailHeader
        borderBottom={true}
        title={selectedMentorData.mentor.name}
        description={`Date & time : ${moment(
          selectedMentorData.timingStart
        ).format("DD/MM/YYYY, hh:mm A")}`}
      />
      <SuccessCard
        title={"Yay!"}
        primaryText={"You have successfully booked a slot with your mentor!"}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="show session links"
          labelStyle={{ color: Colors.white }}
          onPress={() => Linking.openURL(sessionLink)}
        />
        <Button
          title="go back to home"
          style={styles.goBackButton}
          labelStyle={{ color: Colors.black }}
          onPress={() =>  navigation.reset({
            index: 0,
            routes: [
              {
                name: "Dashboard",
              },
            ],
          })}
        />
      </View>
    </View>
  );
};

export default SlotBookedScreen;
