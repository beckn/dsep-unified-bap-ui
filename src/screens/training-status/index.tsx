import Description from './Description';
import LessonPlan from './LessonPlan';
import React,{useState, useEffect} from 'react';
import Header from '../training/Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import { ReqContextView } from '@context';


const TrainingStatus = ({navigation, route}: {navigation: Navigation, route:any}) => {
  const [data, setData]: any = useState();
  const [loader, setLoader] = useState(true);
  const { reqData, setreqData, headerData, setHeaderData } = ReqContextView();

  const {searchData} = route.params;
  console.log('searchData',searchData);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    console.log("check req in jobs", JSON.stringify(reqData))
    const resp = await callService(ApiMethods.POST,ENDPOINT.COURSE_STATUS,
    {
      "applicationId": "123456",
      "context": {
        "transactionId": "a9aaecca-10b7-4d19-b640-b047a7c62210",
        "bppId": "bpp.dsep.samagra.io",
        "bppUri": "https://bpp.dsep.samagra.io"
      }
    }
    );
    if (resp?.status == 200) {
      console.log("check respone in cource status", JSON.stringify(resp.data))
      setData(resp?.data);
       
      
      setLoader(false)  
    } else {
      setLoader(false)
      console.log(resp);
    }
  };

 
  return (
    <>
   
    <Header navigation={navigation} 
    heading={data?.course?.name}
    online= 'online'
    video = 'video & lecture'
    education={""}
    rating={4.8}
    />
    <Tabs
        tabData={[
          {label: 'Description',comp : <Description navigation={navigation} data={data} loader={loader} headerData = {headerData} />},
          {label: 'Lesson Plan', 
          // comp : <LessonPlan  navigation={navigation} onClickBuyNow = {onClickBuyNow}/>
        },
        ]}
      />
    </>
  );
};
export default TrainingStatus;
