import Tabs from '@components/Tabs';
import {ApiMethods} from '@constant/common.constant';
import React, {useEffect, useState} from 'react';
import {View, FlatList, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { ICONS, Text, SVGIcon,  } from '@components';
import Button from '@components/AppButton';
import {callService} from '@services';
import {ENDPOINT} from '@services/endpoints';
import {styles} from './styles';
import SearchBox from '@components/SearchBox';
import MentorCard from '@components/MentorCard';
import DetailHeader from '@components/DetailHeader';
import Header from './Header';
import ResultCard from './ResultCard';
import { Modal, Portal,  Provider } from 'react-native-paper';
import { Colors } from '@styles/colors';

const SearchResultScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const onFocus = () => alert("input pressed");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', position: 'absolute', bottom: 0, height: 300, width: 400  };

  useEffect(() => {
    getData();
  }, []);
  const onClickApply =() =>{
    showModal();
  }
  const ResultCards = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item, index}) => <ResultCard data={item} navigation={navigation} index={index} />}
       
      /> 
    )
  }

  const getData = async () => {
    const resp = await callService(ApiMethods.GET, ENDPOINT.GET_MENTORS);
    if (resp?.status === 200) {
      setData(resp.data);
    } else {
      console.log(resp);
    }
  };
  return (
    <SafeAreaView  style={styles.container}>
    <View >
      <Header navigation={navigation} 
    heading='UX Designer'
    onPress={onClickApply}
    />
   
  <ResultCards/>
    </View>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Search Jobs & InternShips.</Text>
          <View style={{ alignItems:'center'}}>      
            <TextInput style={styles.input}
              placeholder="Enter Skills / designations / companies"
              onFocus={ onFocus }
              onChangeText={newText => showModal()}
              // defaultValue={text} 
              />
              <TextInput style={styles.input}
              placeholder=" Location "
              onFocus={ onFocus }
              onChangeText={newText => showModal()}
              // defaultValue={text} 
              />
              <TextInput style={styles.input}
              placeholder="Type here to Search !"
              onFocus={ onFocus }
              onChangeText={newText => showModal()}
              // defaultValue={text} 
              />
              
              </View>
              <View style={styles.bottom}>
       <Button onPress={onClickApply} text={'Apply'} type="dark"/>
       
      </View> 
        </Modal>
    </SafeAreaView>
  );
};

export default SearchResultScreen;
