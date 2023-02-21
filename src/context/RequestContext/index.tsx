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
  setreqData: (args: IItemType) => void;
}

export const ReqContext = React.createContext({
  reqData: {},
  setreqData: (args: IItemType) => {},
});

export const ReqContextView = (): Context => React.useContext(ReqContext);

export function ReqContextProvider({children}): JSX.Element {
  const [reqData, setreqData] = useState([]);
 
  return (
    <ReqContext.Provider
      value={{
        reqData: reqData,
        setreqData : setreqData,
        
      }}>
      {children}
    </ReqContext.Provider>
  );
}
