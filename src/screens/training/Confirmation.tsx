import React from "react";
import { View, Linking } from "react-native";
import { styles } from "./styles";
import { Navigation } from "@interfaces/commonInterfaces";
import { Button, DetailHeader, SucessCard } from "@components";
import { Colors } from "@styles/colors";
import NavBar from "@components/Navbar";

function Confirmation({
  navigation,
  route,
}: {
  navigation: Navigation;
  route: any;
}) {
  const {  heading, time, courseUrl, para1 } =
    route.params;

  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.navigate("Home");
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );
  //   return () => backHandler.remove();
  // }, []);

  const onClickConfirmation = (navigation) => {
    // navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
       <NavBar hasBackArrow={false} hasRightIcon={false} />
      <DetailHeader
        borderBottom={true}
        title={heading}
        description={`Course Length: ${time} `}
      />
      <SucessCard
        title={"Successful"}
        primaryText={para1}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="show course links"
          labelStyle={{ color: Colors.white }}
          onPress={() => Linking.openURL(courseUrl)}
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
}

export default Confirmation;
