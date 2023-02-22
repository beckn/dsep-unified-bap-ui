import React, {useState} from 'react';
import {KeyValue} from '@interfaces/commonInterfaces';

export interface IItemType {
  
  }

  

//   export interface IProfileType {
//     profile: {
//       firstName: string;
//       lastName: string;
//       email: string;
//       mobile: string;
//   };
//   }



export interface Context {
  reqData: IItemType;
  headerData: IItemType;
  setreqData: (args: IItemType) => void;
  setHeaderData: (args: IItemType) => void;
}

export const ReqContext = React.createContext({
  reqData: {},
  headerData: {},
  setreqData: (args: IItemType) => {},
  setHeaderData: (args: IItemType) => {},
});

export const ReqContextView = (): Context => React.useContext(ReqContext);

export function ReqContextProvider({children}): JSX.Element {
  const [reqData, setreqData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  return (
    <ReqContext.Provider
      value={{
        reqData: reqData,
        headerData: headerData,
        setreqData : setreqData,
        setHeaderData: setHeaderData
        
      }}>
      {children}
    </ReqContext.Provider>
  );
}
