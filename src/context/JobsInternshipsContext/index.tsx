import React, {useState} from 'react';

export interface aboutCompany {
    companyTabTitle:string;
    companyTabDetails:string;
    companyWebsiteTitle:string;
    companyWebsiteDetails:string;
    companyIndustryTitle:string;
    companyIndustryDetails:string;
    companySizeTitle:string;
    companySizeDetails:string;
}

export interface Context {

// description:  TODO: Put description details here
  aboutCompany: aboutCompany[];
  setAboutCompany: (args: aboutCompany[]) => void;

}

export const JobsInternshipsContext = React.createContext({
    aboutCompany: [],
  setAboutCompany: (args: aboutCompany[]) => {}
});

export const useJobsInternshipsView = (): Context => React.useContext(JobsInternshipsContext);

export function JobsInternshipsViewProvider({children}): JSX.Element {
  const [aboutCompany, setAboutCompany] = useState([]);

  return (
    <JobsInternshipsContext.Provider
      value={{
        aboutCompany,
        setAboutCompany
      }}>
      {children}
    </JobsInternshipsContext.Provider>
  );
}
