import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type tabDetails = {
  tabData: Array<{label: string; value: number}>;
}

const Tabs = ({tabData}: tabDetails) => {
  const [tabPressed, setTabPressed] = useState<number>(tabData[0].value);

  return (
    <View style={styles.tabSection}>
      {tabData.map(tabKey => {
        return (
          <TouchableOpacity
            key={tabKey.value}
            style={[
              styles.tabview,
              tabPressed === tabKey.value && styles.selectedTab,
            ]}
            onPress={() => setTabPressed(tabKey.value)}>
            <Text
              style={
                tabPressed === tabKey.value
                  ? styles.selectedTabText
                  : styles.tabText
              }>
              {tabKey.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Tabs;
