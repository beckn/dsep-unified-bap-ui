import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text, FlatList, TouchableOpacity, Alert, Image} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Navigation} from '@interfaces/commonInterfaces';
// import {Text} from '@components/Text';
import {getString} from '@i18n';
import {commonStyles} from '@styles/commonStyles';
import {Fonts} from '@styles/fonts';
import {useTheme} from '@context';
import images from '../../assets/images';
import {styles} from './styles';
import { Modal, Portal,  Provider } from 'react-native-paper';
import { userSkillView } from '@context';
import Button from '@components/AppButton';
import SearchListJson from '../../data/search-list.json';
import ResultCard from '../search-result/ResultCard';
import {Dropdown} from '@components/Dropdown';
import {ReqContextView, useListView} from '@context';


function HomeScreen({navigation}: {navigation: Navigation}) {
  const {theme, setTheme} = useTheme();
  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [scholortitle, setScholorTitle] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [sessiontitle, setSessionTitle] = useState("");
  const [mentortitle, setMentorTitle] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  console.log("open state", open);
  const {profileInfo} = userSkillView();
  const [data, setData] = useState([
    {"name" : "Jobs & Internships", "icon":images.bag},{"name" : "Trainings & Courses", "icon":images.Training},
    {"name" : "Scholarships & Grants", "icon":images.Scholar},{"name" : "Tutoring & Mentorship", "icon":images.Mentor},
  ])

  const [dropdownData, setDropdownData] = useState([
    {label: 'Search by scholarship name', value: 'name'},
    {label: 'Search by gender criteria', value: 'gender'},
    {label: 'Search by by financial income criteria', value: 'finStatus'},
    {label: 'Search by by caste criteria', value: 'casteCategory'},
    {label: 'Search by categories for female students', value: 'femalecategories'},
  ]);
  const  [selectedValue, setSelectedValue] = useState();

  const onPress = () => {};
  const testData = {"company": {"id": "1", "imageLink": [[Object]], "name": "Google India Pvt Ltd"}, "jobs": [{"additionalDesc": [Object], "description": "Like Google's own ambitions, the work of a Software Engineer (SWE) goes way beyond just Search. SWE Managers have not only the technical expertise to take on and provide technical leadership to major projects, but also manage a team of engineers. You not only optimize your own code but make sure engineers are able to optimize theirs. As a SWE Manager you manage your project goals, contribute to product strategy and help develop your team. SWE teams work all across the company, in areas such as information retrieval, artificial intelligence, natural language processing, distributed computing, large-scale system design, networking, security, data compression, user interface design; the list goes on and is growing every day. Operating with scale and speed, our exceptional software engineers are just getting started -- and as a manager, you guide the way.Google Cloud accelerates organizations’ ability to digitally transform their business with the best infrastructure, platform, industry solutions and expertise. We deliver enterprise-grade solutions that leverage Google’s cutting-edge technology – all on the cleanest cloud in the industry. Customers in more than 200 countries and territories turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems", "jobId": "1", "locations": [Array], "role": "Software Engineering Manager II, Google Cloud"}]}
  const onClickApply =() =>{
    if(selectedCatagory == "Jobs & Internships"){
    let item = location?.split(',')
    let loc = item.map(i => {return({ "city":i })})
    let skilitem = skills?.split(',')
    let sk = skilitem.map(i => {return({"name":i, "code":i })})
    var searchData = {
      "loggedInUserEmail": profileInfo?.profile?.email,
      "title": {
        "key": jobtitle
      },
      "company": {
        "name": company,
        "locations": loc
      },
      "skills": sk
    }
    hideModal()
    navigation.navigate('SearchResult', {searchData});
  }else if(selectedCatagory == "Scholarships & Grants"){
   var scholtitle 
   if(selectedValue == 'name'){
    scholtitle =  {
      "loggedInUserEmail": profileInfo?.profile?.email,
      "name": scholortitle
    };
    }else if(selectedValue == 'gender'){
      scholtitle =   {
        "loggedInUserEmail": profileInfo?.profile?.email,
        "gender": scholortitle
      };
    }else if(selectedValue == 'finStatus'){
      scholtitle =   {
        "loggedInUserEmail": profileInfo?.profile?.email,
        "finStatus": {
          "family_income": scholortitle
        }
      };
    }else if(selectedValue == 'casteCategory'){
      scholtitle =   {
        "loggedInUserEmail": profileInfo?.profile?.email,
        "casteCategory": [
          {
            "caste": scholortitle
          }
        ]
      };
    }else{
      scholtitle =  {
        "loggedInUserEmail": profileInfo?.profile?.email,
        "categories": [
          {
            "code": scholortitle
          }
        ],
        "gender": scholortitle
      }
    }
    hideModal()
    console.log("scholtitle", JSON.stringify(scholtitle))
    navigation.navigate('ScholarshipList', {scholortitle: scholtitle});
  }else if(selectedCatagory == "Trainings & Courses"){
   
    hideModal()
    navigation.navigate('TrainingList', {courseTitle});
  }else if(selectedCatagory == "Tutoring & Mentorship"){
  let mentor = {
    "sessionTitle": {
      "key": sessiontitle
    },
    "mentor": {
      "name": mentortitle
    }
  }
   hideModal()
    navigation.navigate('MentoringList', {mentor});
  }
    
  }
  function onButtonClick(name){
    if(name == "Jobs & Internships"){
      setSelectedCatagory(name);
      showModal()
    }else if(name == "Trainings & Courses"){
      setSelectedCatagory(name);
      showModal()
    }else if(name == "Scholarships & Grants"){
      setSelectedCatagory(name);
      showModal()
    }else if(name == "Tutoring & Mentorship"){
      setSelectedCatagory(name);
      showModal()
    }
    
  }
  const onFocus = () => alert("input pressed");
  const [visible, setVisible] = React.useState(false);
  
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', position: 'absolute',borderRadius: 10, bottom: 0,  height: 410, width: 390  };
  const ScholarcontainerStyle = {backgroundColor: 'white', position: 'absolute', borderRadius: 10, bottom: 0, alignItems: 'center', height: 500, width: 400  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
      <View style={{ alignItems:'center'}}>
      <Text>Hello </Text>
      <Text style={styles.textlist}> {profileInfo?.profile?.firstName} </Text></View>
      <View style={{ alignItems:'flex-end'}}>
     </View>
      </View>
    <View style={{ alignItems:'center'}}>      
      <TextInput style={styles.input}
        placeholder="Type here to Search !"
        editable={false}
        /></View>
      </View>
      <View>
      <View style={{ paddingTop: 30, paddingLeft: 10 }}>
      <Text style={styles.textlist}>Featured Jobs</Text></View>
      <View style={styles.feature}>
      <ResultCard data={testData} onItemPressed={item => onPress()} />
      </View>
      </View>
      <View style={styles.listContainer}>
      <Text style={styles.textlist}>Browse by categories</Text>
      <View >
        <FlatList 
        horizontal={false}
        numColumns={2}

        data={data}
        renderItem={({item})=> (
          <View style={styles.list}>
            <TouchableOpacity
            style={styles.item}
            onPress={()=> onButtonClick(item.name) }
            >
            {/* <View style={styles.item}> */}
            
            <View style={styles.icon}>
            <Image source={item.icon} />
            {/* </View> */}
            </View>
            </TouchableOpacity>
            <View>
            <Text style={styles.textlist}>{item.name}</Text></View>
            
          </View>
        )}
        keyExtractor = {(item => item.name)}
        />
      </View>
      </View>
      {(selectedCatagory === 'Jobs & Internships')?(
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text style={styles.texttitle}>Search Jobs & Internships</Text>
        <View style={{ alignItems:'center'}}>
        <TextInput style={styles.input}
            placeholder="Enter job title "
            value={jobtitle}
            onChangeText={text => setJobTitle(text)}
            />      
          <TextInput style={styles.input}
            placeholder="Enter company Name"
            value={company}
            onChangeText={text => setCompany(text)}
            />
            <TextInput style={styles.input}
            placeholder="Enter Location "
            value={location}
            onChangeText={text => setLocation(text)}
            />
            <TextInput style={styles.input}
            placeholder="Enter Skills "
            value={skills}
            onChangeText={text => setSkills(text)}
            />
          <View style={styles.bottom}>
          <Button onPress={onClickApply} 
          disabled={(jobtitle == "" && company=="" && location == "" && skills == "")? true : false}  
          type={(jobtitle == "" && company=="" && location == "" && skills == "")? "grey": "dark" } 
          text={'SEARCH'} 
          style={styles.search}
          />
         </View> 
            </View>
      </Modal>  
      ):(selectedCatagory === 'Scholarships & Grants')?
      (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={ScholarcontainerStyle}>
          <Text style={styles.texttitle}>Search Scholorship</Text>

          <View style={{ height: 250, width: 350, margin: 10 }}>
             <Dropdown
          data={dropdownData}
          open={open}
         
          onSelect={value => {
            setOpen(true);
            setSelectedValue(value);
           
          }}
        />
        </View>
        <View style={{ alignItems: 'center'}}>
          
          <TextInput style={styles.input}
              placeholder="Enter value "
              value={scholortitle}
              onChangeText={text => setScholorTitle(text)}
              />      
            <View style={styles.bottom}>
        <Button onPress={onClickApply} 
          disabled={(scholortitle == "" )? true : false}  
          type={(scholortitle == "")? "grey": "dark" } 
          text={'SEARCH'}  />
           </View> 
              </View>
        </Modal>  
      ):(selectedCatagory === 'Trainings & Courses')?
      (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={styles.texttitle}>Search Course</Text>
          <View style={{ alignItems:'center'}}>
          <TextInput style={styles.input}
              placeholder="Enter category "
              value={courseTitle}
              onChangeText={text => setCourseTitle(text)}
              />      
            <View style={styles.bottom}>
            <Button onPress={onClickApply} 
              disabled={(courseTitle == "")? true : false}  
              type={(courseTitle == "" )? "grey": "dark" } 
              text={'Apply'}  />
           </View> 
              </View>
        </Modal>  
      ):(
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={styles.texttitle}>Search Mentor</Text>
          <View style={{ alignItems:'center'}}>
          <TextInput style={styles.input}
              placeholder="Enter session title "
              value={sessiontitle}
              onChangeText={text => setSessionTitle(text)}
              />
          <TextInput style={styles.input}
            placeholder="Enter mentor Name"
            value={mentortitle}
            onChangeText={text => setMentorTitle(text)}
            />      
            <View style={styles.bottom}>
            <Button onPress={onClickApply} 
              disabled={(mentortitle == "" && sessiontitle=="" )? true : false}  
              type={(mentortitle == "" && sessiontitle=="")? "grey": "dark" } 
              text={'Apply'}  />
           </View> 
              </View>
        </Modal> 
      )
    }
      
          
    </View>
  );
}

export default HomeScreen;
