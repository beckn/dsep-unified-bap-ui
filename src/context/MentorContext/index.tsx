import React, { useState } from "react";
import { KeyValue } from "@interfaces/commonInterfaces";

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
  mentorList: IItemType[];
  selectedMentorData: IItemType | null;
  setSelectedMentorData: (args: IItemType) => void;
  setMentorlist: (args: IItemType[]) => void;
  setTransactionId: (id: string) => void;
  transactionId: string;
  selectedMentorObject: IItemType | null;
  setSelectedMentorObject: (args: IItemType) => void;
}

export const MentorContext = React.createContext({
  mentorList: [],
  selectedMentorData: null,
  setSelectedMentorData: (args: IItemType) => {},
  setMentorlist: (args: IItemType[]) => {},
  setTransactionId: (id: string) => {},
  transactionId: "",
  selectedMentorObject: null,
  setSelectedMentorObject: (args: IItemType) => {},
});

export const useMentorContext = (): Context => React.useContext(MentorContext);

export function MentorProvider({ children }): JSX.Element {
  const [mentorList, setMentorlist] = useState([]);
  const [selectedMentorData, setSelectedMentorData] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [selectedMentorObject, setSelectedMentorObject] = useState(null);

  console.log("mentorlistcon", mentorList);

  return (
    <MentorContext.Provider
      value={{
        mentorList: mentorList,
        setMentorlist: setMentorlist,
        selectedMentorData: selectedMentorData,
        setSelectedMentorData: setSelectedMentorData,
        setTransactionId: setTransactionId,
        transactionId: transactionId,
        selectedMentorObject: selectedMentorObject,
        setSelectedMentorObject: setSelectedMentorObject
      }}
    >
      {children}
    </MentorContext.Provider>
  );
}
