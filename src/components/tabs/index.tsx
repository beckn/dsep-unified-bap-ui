import {commonStyles} from '@styles/commonStyles';
import React, {ReactElement, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type tabDetails = {
  tabData: Array<{label: string; comp: ReactElement}>;
};

const Tabs = ({tabData}: tabDetails) => {
  const [tabPressed, setTabPressed] = useState<number>(0);

  return (
    <View style={commonStyles.flex1}>
      <View style={styles.tabSection}>
        {tabData.map((tabKey, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabview,
                tabPressed === index && styles.selectedTab,
              ]}
              onPress={() => setTabPressed(index)}>
              <Text
                style={
                  tabPressed === index ? styles.selectedTabText : styles.tabText
                }>
                {tabKey.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {tabData[tabPressed].comp}
    </View>
  );
}
export default Tabs;
