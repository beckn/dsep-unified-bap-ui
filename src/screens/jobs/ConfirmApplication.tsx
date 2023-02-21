import { View, Text, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import {callService, ProfileCallService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {ApiMethods} from '@constant/common.constant';
import {Navigation} from '@interfaces/commonInterfaces';
import { userSkillView } from '@context';
import {styles}  from './styles';
import Spacer from '@components/Spacer';
import Button from '@components/AppButton';
import { ReqContextView } from '@context';
import Loader from '@components/Loader/Loader';
import NavBar from '@components/Navbar';
import { DetailHeader } from '@components/index';


const ConfirmApplication = ({navigation, route}: {navigation: Navigation, route: any}) => {
    const { respData, resumeUri, exp, sop } = route.params;
    const [data, setData] = useState([]);
    const { reqData, setreqData } = ReqContextView();
    const [init, setInit] = useState('init');
    const [loader, setLoader] = useState(false);
    const {languages, skills, profileInfo} = userSkillView();
    const email = profileInfo.profile?.email ;
    console.log("check email", email)
    let con = {
        "context" : reqData.context,
        "jobId": reqData.jobs.jobId,
        "confirmation": {
          "JobFulfillmentCategoryId": "1",
          "jobApplicantProfile": {
            "name":profileInfo.profile? profileInfo.profile.firstName : 'name empty',
            "languages": languages,
            "profileUrl": profileInfo.profile?.profileUrl,
            "creds": [
              {
                "url": "https://cbse.nic.in/link/to/college-marksheet.json",
                "type": "application/vc+json"
              },
              {
                "url": "https://drive.google.com/link/to/pass-certificate.json",
                "type": "application/vc+json"
              },
              {
                "url": "https://digilocker.com/link/to/python-skill-certificate.json",
                "type": "application/vc+json"
              },
              {
                "url": "https://drive.google.com/link/to/python-skill-certificate.pdf",
                "type": "application/pdf"
              },
              {
                "url": "https://drive.google.com/link/to/experience-certificate.pdf",
                "type": "application/pdf"
              }
            ],
            "skills": skills
          }
        }
      }


      const onClickApply = (bid) => {
        submitApplication();
       };


      //  {category}/{email}/{action}
    const AddItemToProfile = async (item) => {
     let req = 
     {
        "_id": profileInfo.profile?.id,
        "job_id": reqData?.jobs.jobId,
        "provider_id": reqData?.companyId,
        "application_id": item.applicationId,
        "role": item.confirmedJobs[0]?.role,
        "company": item.company.name,
        "city": item.confirmedJobs[0]?.locations[0].city,
        "data": "Response object from confirm api",
        "bpp_id": item.context.bppId,
        "bpp_uri": item.context.bppUri,
        "created_at": new Date()
      }
    // let a = 'test.user@gmail.com'
      console.log("check saved profile req", JSON.stringify(req))
    let end = ENDPOINT.SAVE_APPLIED_JOB_TO_PROFILE+'/job/'+email+'/applied'
    console.log("check saved profile end", JSON.stringify(end))
      try {
      const resp = await ProfileCallService(ApiMethods.POST, end, req); 
      console.log("check saved profile respo", JSON.stringify(resp.data)) 
      navigation.navigate('JobConfirmation');
      } catch (error) {
        
      }
    
    }


    const submitApplication = async () => {
        console.log("check context", JSON.stringify(con))
        // AddItemToProfile();
        if(email != '')
        {
        setLoader(true);
        const resp = await callService(ApiMethods.POST, ENDPOINT.SUBMIT_APLLICATION, con);
        console.log("check in confirm screen", JSON.stringify(resp));
        if (resp?.status === 200) {
          setData(resp.data);
         // console.log("check in confirm screen", JSON.stringify(resp.data));
          
          setLoader(false)
          if(resp.data.applicationId != ''){
             AddItemToProfile(resp.data);
            setLoader(false)
            
          }
        } else {
          setLoader(false)
          console.log(resp);
        }
      }else{
        alert("please fill profile details")
      }
      };
  return (
    <SafeAreaView style={styles.container}>
      <NavBar hasBackArrow={true} hasRightIcon = {false} title={respData?.initiatedJobs[0]?.role} />
      <DetailHeader
        // rating="4.9"
        title={respData?.company?.name}
        description= {respData?.initiatedJobs[0]?.locations[0].city}
        heading=""
        // time="1 days"
      />
    <View>
      {loader ? (
        <Loader />
      ) :(
      <View style={{ padding: 30, backgroundColor: 'white' }}>
      <Text style={styles.heading2}>Confirm Application</Text>
      <Spacer size={30} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>Role :</Text>
      <Text> {respData?.initiatedJobs[0]?.role}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>Applicant Name :</Text>
      <Text> {respData?.jobFulfillments[0]?.jobApplicantProfile.name}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>{respData?.initiatedJobs[0]?.employmentInformation?.employmentInfo[0].name} :</Text>
      <Text> {respData?.initiatedJobs[0]?.employmentInformation?.employmentInfo[0].value}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>{respData?.initiatedJobs[0]?.compensation?.salaryInfo[0].name} : </Text>
      <Text> {respData?.initiatedJobs[0]?.compensation?.salaryInfo[0].value}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}> Linked in URL : </Text>
      <Text> {profileInfo.profile?.profileUrl}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>Resume : </Text>
      <Text> {resumeUri}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={{ fontWeight : 'bold',  }}>Exp : </Text>
      <Text> {exp}</Text>
      </View>
      <Spacer size={20} />
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.heading2}>SOP : </Text>
      <Text> {sop}</Text>
      </View>
      <Spacer size={20} />
      <View style={styles.bottom}>
      <Button onPress={() => onClickApply('submit')} text={'SUBMIT APPLICATION'} type="dark" />
      </View>
     </View>
      ) }
    </View>
    </SafeAreaView> 
  )
}

export default ConfirmApplication