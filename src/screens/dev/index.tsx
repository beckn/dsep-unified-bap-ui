import React from 'react';
import {Button, View} from 'react-native';
import {Navigation} from '@interfaces/commonInterfaces';
import {getString} from '@i18n';
import {commonStyles} from '@styles/commonStyles';
import {Fonts} from '@styles/fonts';
import {Text} from '@components';
import {useTheme} from '@context';
import {Dropdown} from '@components/Dropdown';
import {useState} from 'react';

function DevScreen({navigation}: {navigation: Navigation}) {
  const [dropdownData, setDropdownData] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const {theme, setTheme} = useTheme();
  return (
    <View style={[commonStyles.flex1, commonStyles.paddingHBase]}>
      <Text style={commonStyles.baseFontSize}>{getString('key1')}</Text>
      <Text
        fontFamily={Fonts.family.DM_SANS_REGULAR}
        style={{fontSize: 16, color: theme.black}}>
        This is DMSans-Regular
      </Text>
      <Text style={{fontSize: 16, color: 'green'}}>
        This is OpenSans-Regular
      </Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Dropdown
        data={dropdownData}
        onSelect={value => console.log('selected value:' + value)}
      />
    </View>
  );
}

export default DevScreen;
