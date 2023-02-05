import React, {useState} from 'react';
import {KeyValue} from '@interfaces/commonInterfaces';

export interface IItemType {
  id: string;
  company: string;
  country: string;
  city: string;
  skills: string;
  jobType: string;
  type1: string;
  type2: string;
  type3: string;
  postedOn: string;
  bookmarked: boolean;
  byWhom: string;
  image: string;
}

export interface Context {
  list: IItemType[];
  selectedValue: IItemType | null;
  setSelectedValue: (args: IItemType) => void;
  setList: (args: IItemType[]) => void;
}

export const ListViewContext = React.createContext({
  list: [],
  selectedValue: null,
  setSelectedValue: (args: IItemType) => {},
  setList: (args: IItemType[]) => {},
});

export const useListView = (): Context => React.useContext(ListViewContext);

export function ListViewProvider({children}): JSX.Element {
  const [list, setList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <ListViewContext.Provider
      value={{
        list: list,
        setList: setList,
        selectedValue: selectedValue,
        setSelectedValue: setSelectedValue,
      }}>
      {children}
    </ListViewContext.Provider>
  );
}
