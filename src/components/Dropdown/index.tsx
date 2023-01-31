import {useTheme} from '@context';
import {Colors} from '@styles/colors';
import {Fonts} from '@styles/fonts';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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

  //     [
  //     {label: 'Apple', value: 'apple'},
  //     {label: 'Banana', value: 'banana'},
  //   ]);

  const {theme} = useTheme();

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
      style={{
        borderColor: theme.borderColor,
      }}
      dropDownContainerStyle={{
        borderColor: theme.borderColor,
      }}
      placeholderStyle={{
        color: theme.black,
        fontWeight: Fonts.weight.w4,
        fontFamily: Fonts.family.OPEN_SANS_REGULAR,
      }}
      listItemLabelStyle={{
        color: theme.black,
        fontWeight: Fonts.weight.w4,
        fontFamily: Fonts.family.OPEN_SANS_REGULAR,
      }}
    />
  );
}
