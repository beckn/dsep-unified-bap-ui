import React, {useState} from 'react';
import {KeyValue} from '@interfaces/commonInterfaces';

export interface IItemType {
  
  }

  export interface IProfileType {
    profile: {
      firstName: string;
      lastName: string;
      email: string;
      mobile: string;
  };
  }

export interface Context {
  profileInfo: IProfileType;
  skills: IItemType[];
  jobSearchSkills: IItemType[];
  jobsearchlocation: IItemType[];
  languages: IItemType[];
  setProfileInfo: (args: IProfileType) => void;
  setSkills: (args: IItemType[]) => void;
  setJobSearchSkills: (args: IItemType[]) => void;
  setLanguages: (args: IItemType[]) => void;
  setJobSearchlocation: (args: IItemType[]) => void;
}

export const UserSkillsContext = React.createContext({
  skills: [],
  profileInfo: {},
  jobSearchSkills: [],
  jobsearchlocation: [],
  languages: [],
  setProfileInfo: (args: IProfileType) => {},
  setSkills: (args: IItemType[]) => {},
  setJobSearchSkills: (args: IItemType[]) => {},
  setLanguages: (args: IItemType[]) => {},
  setJobSearchlocation: (args: IItemType[]) => {},
});

export const userSkillView = (): Context => React.useContext(UserSkillsContext);

export function UserProfileDetailsProvider({children}): JSX.Element {
  const [profileInfo, setProfileInfo] = useState([]);
  const [skills, setSkills] = useState([]);
  const [jobSearchSkills, setJobSearchSkills] = useState([]);
  const [jobsearchlocation, setJobSearchlocation] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <UserSkillsContext.Provider
      value={{
        profileInfo: profileInfo,
        setProfileInfo : setProfileInfo,
        skills: skills,
        setSkills: setSkills,
        languages: languages,
        setLanguages: setLanguages,
        jobSearchSkills: jobSearchSkills,
        setJobSearchSkills: setJobSearchSkills,
        jobsearchlocation: jobsearchlocation,
        setJobSearchlocation: setJobSearchlocation,
        
      }}>
      {children}
    </UserSkillsContext.Provider>
  );
}
