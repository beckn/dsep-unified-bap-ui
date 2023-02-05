import React from 'react';
import { View, Text, TextInput,Image } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images/index'
import Header from './Header';
import Spacer from '@components/Spacer';
import AppButton from '@components/AppButton';
import {ICONS, SVGIcon } from '@components';
import { Colors } from '@styles/colors';


function Debit({navigation}){
   const onClickPay =()=>{
    navigation.navigate("Confirmation",{
      id:1,
      heading:'Design Thinking course',
      time: '1 Month',
      imgPara: 'Successful',
      para1: 'Congratulations, your application has been sent',
    });
   }

    return (
      <View style={styles.container}>
      <Header 
      navigation={navigation} 
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
            <View style={styles.yesBank}>
            <SVGIcon
             name={ICONS.IC_YES_BANK}
             fill={Colors.oliveBlack}
             style={{ marginRight: 10 }}
           />
            </View>
            <View style={styles.yesbankDetails}>
            <View style={styles.rowDirection}>
            <Text>{'Yes bank debit card '}</Text>
            <SVGIcon
             name={ICONS.IC_MASTER_CARD}
             fill={Colors.oliveBlack}
             style={{ marginLeft: 10, top:5 }}
           />
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
       <AppButton onPress={onClickPay} text={'Proceed to pay'} type="dark" style={styles.button}/>
        </View>
      </View>
      <View style={styles.spacer}  />
      <Text style={styles.heading}>{'E-wallets'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.smallCard}>
      <Spacer horizontal size={25}/>
      <SVGIcon
             name={ICONS.IC_PAYTM_CIRCLE}
             fill={Colors.black10}
             style={{ marginRight: 10 }}
      />
      <Spacer horizontal size={30}/>
      <SVGIcon
             name={ICONS.PAYTM}
             fill={Colors.black10}
             style={{ marginRight: 10 }}
           />
      </View>
      <View style={styles.spacer}  />
      <Text style={styles.heading}>{'UPI’s'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.upiCard}>
      <SVGIcon
             name={ICONS.IC_PAYTM_CIRCLE}
             fill={Colors.black10}
             style={{ marginRight: 10 }}
      />
      <Image  source={images.gPay} />
      <Image  source={images.phonePay} />
      <Image  source={images.bhim} />
      </View>
      </View>
    </View>
    )
}

export default Debit;