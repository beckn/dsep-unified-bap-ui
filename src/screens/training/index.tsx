import Description from './Description';
import LessonPlan from './LessonPlan';
import React,{useState, useEffect} from 'react';
import Header from './Header';
import Tabs from '@components/Tabs';
import {Navigation} from '@interfaces/commonInterfaces';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';


const Training = ({navigation, route}: {navigation: Navigation, route:any}) => {
  const [data, setData]: any = useState();
  const [loader, setLoader] = useState(true);
  // const {name} = route.params;
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const resp = await callService(ApiMethods.POST,ENDPOINT.SELECT_TRAINING,
      {
        "courseId": "Q291cnNlTGlzdDovbmQyX25jZTIyX3NjMjk=",
        "courseProviderId": "NCERT",
        "context": {
          "transactionId": "4f3a48bb-9ffe-4177-94c4-c3196d22c5e5",
          "messageId": "882447c5-5393-4ff1-b219-6829098da61b",
          "bppId": "bpp.dsep.samagra.io",
          "bppUri": "https://bpp.dsep.samagra.io"
      }
      }
    );
    if (resp?.status == 200) {
      setData(resp?.data);
      setLoader(false)
      console.log('resp?.data--->>>', resp?.data)
    } else {
      console.log(resp);
      setLoader(false)
    }
  };

  const onClickBuyNow = () =>{
    // navigation.navigate("InitTraining", {data, loader})
    navigation.navigate('ConfirmTraining',{data: data,loader});
    // navigation.navigate("Confirmation",{data: data,loader,  imgPara: 'Successful',
    // para1: 'Congratulations,  you have successfully unlocked the course',})
  }
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
          {label: 'Description',comp : <Description navigation={navigation} data={data} loader={loader} onClickBuyNow = {onClickBuyNow}/>},
          {label: 'Lesson Plan', 
          // comp : <LessonPlan  navigation={navigation} onClickBuyNow = {onClickBuyNow}/>
        },
        ]}
      />
    </>
  );
};
export default Training;
