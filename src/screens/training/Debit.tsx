import React from 'react';
import { View, Text, TextInput,Image,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images/index'
import Header from './Header';
import Spacer from '@components/Spacer';
import AppButton from '@components/AppButton';


function Debit({navigation}){
    return (
      <View style={styles.container}>
      <Header navigation={navigation} 
      heading='Design Thinking'  
      online= 'online'
      video = 'video & lecture'
      education={""}
      rating={4.8}
      />
      <View style={styles.body}>
      <Text style={styles.heading}>{'Credit / Debit card'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.debitCard}>
        <View style={styles.debitHalf}>
            <View style={{flex:2, backgroundColor:'#fff'}}>
             <Image source={images.yesBank}/>
            </View>
            <View style={{flex: 8}}>
            <View style={styles.rowDirection}>
            <Text>{'Yes bank debit card '}</Text>
            <Image source={images.masterCardBlueIcon} style={styles.debitNumber} />
            </View>
            <Text>{'1234 1243 7564 7364'}</Text>
            </View>
        </View>
        <View style={styles.debitHalf}>
       <View style={styles.smallButton}>
       <TextInput 
            maxLength={3}
            secureTextEntry={true}
            placeholder='***'
            style={styles.cvv}
        />
        <Text style={styles.cvvText}>{'CVV'}</Text>
       </View>
       <AppButton onPress={()=>{navigation.navigate("Confirmation")}} text={'Proceed to pay'} type="dark" style={styles.button}/>
        </View>
      </View>
      <View style={styles.spacer}  />
      <Text style={styles.heading}>{'E-wallets'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.smallCard}>
      <Spacer horizontal size={25}/>
      <Image  source={images.paytmCircle} />
      <Spacer horizontal size={30}/>
      <Image  source={images.paytmRactangle} />
      </View>
      <View style={styles.spacer}  />
      <Text style={styles.heading}>{'UPI’s'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.upiCard}>
      <Image  source={images.paytmCircle}/>
      <Image  source={images.gPay} />
      <Image  source={images.phonePay} />
      <Image  source={images.bhim} />
      </View>
      </View>
    </View>
    )
}

export default Debit;