import React, {useState} from 'react';
import {KeyValue} from '@interfaces/commonInterfaces';

export interface IItemType {
  
  }

  export interface IAppId {
  id: string
  }

  export interface IProfileType {
    profile: {
      firstName: string;
      lastName: string;
      email: string;
      mobile: string;
      id: string;
      profileUrl: string;

  };
  }
  export interface IEducationType{
    educationProfile: {
      collageName: string;
      collageAddress: string;
      startDate: string;
      endDate: string;
      information: string;
      education: string;
    }
  }

  export interface IExperienceType{
    workExperience: {
      companyName: string;
      startDate: string;
      endDate: string;
      information: string;
      profile: string;
    }
  }

export interface Context {
  profileInfo: IProfileType;
  skills: IItemType[];
  appid: IAppId;
  jobSearchSkills: IItemType[];
  jobsearchlocation: IItemType[];
  languages: IItemType[];
  educationInfo: IEducationType;
  experienceInfo: IExperienceType;
  setProfileInfo: (args: IProfileType) => void;
  setAppId: (args: IAppId) => void;
  setSkills: (args: IItemType[]) => void;
  setJobSearchSkills: (args: IItemType[]) => void;
  setLanguages: (args: IItemType[]) => void;
  setJobSearchlocation: (args: IItemType[]) => void;
  setEducationInfo: (args: IEducationType) =>void;
  setExperienceInfo: (args: IExperienceType) =>void;
}

export const UserSkillsContext = React.createContext({
  skills: [],
  profileInfo: {},
  jobSearchSkills: [],
  jobsearchlocation: [],
  languages: [],
  educationInfo: {},
  experienceInfo:{},
  setProfileInfo: (args: IProfileType) => {},
  setSkills: (args: IItemType[]) => {},
  setJobSearchSkills: (args: IItemType[]) => {},
  setLanguages: (args: IItemType[]) => {},
  setJobSearchlocation: (args: IItemType[]) => {},
  setEducationInfo: (args: IEducationType) =>{},
  setExperienceInfo: (args: IExperienceType) =>{},
});

export const userSkillView = (): Context => React.useContext(UserSkillsContext);

export function UserProfileDetailsProvider({children}): JSX.Element {
  const [profileInfo, setProfileInfo] = useState([]);
  const [skills, setSkills] = useState([]);
  const [jobSearchSkills, setJobSearchSkills] = useState([]);
  const [jobsearchlocation, setJobSearchlocation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [educationInfo,setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

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
        educationInfo:educationInfo,
        setEducationInfo: setEducationInfo,
        experienceInfo: experienceInfo,
        setExperienceInfo:setExperienceInfo,


        
      }}>
      {children}
    </UserSkillsContext.Provider>
  );
}
