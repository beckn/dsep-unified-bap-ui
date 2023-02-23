import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Text } from "@components";
import { Fonts } from "@styles/fonts";
import { styles } from "./styles";
import Rating from "@components/Ratings";
import { useNavigation } from "@react-navigation/native";

type cardDetails = {
  data: Array<{ [key: string]: string }>;
  index: number;
  onPress?: (data: any) => void;
};

const MentorCard = ({ data, index, onPress }: cardDetails) => {
  const navigation = useNavigation();
  return data?.mentorships.map((mentorshipsData) => {
    return mentorshipsData.mentorshipSessions.map((mentorData) => {
      return (
        <TouchableOpacity
          style={styles.card}
          key={index}
          onPress={() =>
            onPress({
              ...mentorData,
              mentorshipId: mentorshipsData.id,
              mentorshipName: mentorshipsData.name,
              mentorshipDesc: mentorshipsData.description,
              userApplied : mentorshipsData.userAppliedItem,
              mentorshipProviderId: data?.id
            })
          }
        >
          {/* <View style={styles.imageView} /> */}
          <Image 
            source={{uri: mentorshipsData.imageLocations[0]}} 
            style={styles.imageView} 
          />
          <View style={styles.cardSpacing}>
            <Text
              style={styles.nameStyle}
              fontFamily={Fonts.family.OPEN_SANS_REGULAR}
            >
              {mentorData.mentor.name}
            </Text>
            <Text
              style={styles.designationText}
              fontFamily={Fonts.family.DM_SANS_REGULAR}
            >
              {mentorshipsData.name}
            </Text>
            {mentorData.mentor.rating && <Rating rating={mentorData.mentor.rating} />}
          </View>
        </TouchableOpacity>
      );
    });
  });
};
export default MentorCard;
