import React, {useState} from 'react';
import {KeyValue} from '@interfaces/commonInterfaces';

export interface IItemType {
  
  }

export interface Context {
  skills: IItemType[];
  jobSearchSkills: IItemType[];
  languages: IItemType[];
  setSkills: (args: IItemType[]) => void;
  setJobSearchSkills: (args: IItemType[]) => void;
  setLanguages: (args: IItemType[]) => void;
}

export const UserSkillsContext = React.createContext({
  skills: [],
  jobSearchSkills: [],
  languages: [],
  setSkills: (args: IItemType[]) => {},
  setJobSearchSkills: (args: IItemType[]) => {},
  setLanguages: (args: IItemType[]) => {},
});

export const userSkillView = (): Context => React.useContext(UserSkillsContext);

export function UserProfileDetailsProvider({children}): JSX.Element {
  const [skills, setSkills] = useState([]);
  const [jobSearchSkills, setJobSearchSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <UserSkillsContext.Provider
      value={{
        skills: skills,
        setSkills: setSkills,
        languages: languages,
        setLanguages: setLanguages,
        jobSearchSkills: jobSearchSkills,
        setJobSearchSkills: setJobSearchSkills,
        
      }}>
      {children}
    </UserSkillsContext.Provider>
  );
}
