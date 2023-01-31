import {useTheme} from '@context';
import {Fonts} from '@styles/fonts';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';

export interface IDropdown {
  data: ItemType[];
  onSelect: (value: string | undefined) => void;
}

interface ItemType {
  label: string;
  value: string;
}

export function Dropdown({data, onSelect}: IDropdown) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);
  const {theme} = useTheme();

  const styles = dropdownStyles(theme);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={item => {
        onSelect(item?.value);
      }}
      style={styles.dropdownStyle}
      dropDownContainerStyle={styles.dropdownStyle}
      placeholderStyle={styles.textStyle}
      listItemLabelStyle={styles.textStyle}
    />
  );
}

const dropdownStyles = theme =>
  StyleSheet.create({
    dropdownStyle: {
      borderColor: theme.borderColor,
    },
    textStyle: {
      color: theme.black,
      fontWeight: Fonts.weight.w4,
      fontFamily: Fonts.family.OPEN_SANS_REGULAR,
    },
  });
