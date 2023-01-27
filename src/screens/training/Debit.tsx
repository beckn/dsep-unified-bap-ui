import React from 'react';
import { View, Text, TextInput,Image,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import images from '../../assets/images/index'

function Debit({navigation}){
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{'Design Thinking'}</Text>
        <Image source={images.vector} />
        </View>
          <View style={styles.video}>
            <Text>{'online'}</Text>
            <View style={styles.horizontalSpace}></View>
            <Text>{'video & lecture'}</Text>
          </View>
      </View>
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
            maxLength={4}
            secureTextEntry={true}
            placeholder='***'
            style={styles.cvv}
        />
        <Text style={styles.cvvText}>{'CVV'}</Text>
       </View>
       <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Confirmation")}}>
        <Text style={{color:'#fff'}}>{'Proceed to pay'}</Text>
       </TouchableOpacity>
        </View>
      </View>
      <View style={styles.spacer}  />
      <Text style={styles.heading}>{'E-wallets'}</Text>
      <View style={styles.spacer}  />
      <View style={styles.smallCard}>
      <Image  source={images.paytmCircle} />
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