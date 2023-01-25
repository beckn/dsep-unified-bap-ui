import {StyleSheet, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
type Styles = {
    container: ViewStyle;
    header: ViewStyle;
    headerHeading: ViewStyle;
    body: ViewStyle;
    spacer: ViewStyle;
    heading: ViewStyle;
    card: ViewStyle;
    buyButton:ViewStyle;
    getButton:ViewStyle;
    debitCard:ViewStyle;

    
};

export const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    header: {
      backgroundColor: 'gray',
      opacity:0.4,
      height: 140
    },
    headerHeading: {
      height: '40%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
     },
     body: {
      padding:15,
      backgroundColor: '#E5E5E5'
    },
    spacer: {
      height:10
    },
    heading: {
      color: '#000000',
      fontSize:14
    },
    card:{
     height:60,
     flexDirection:'row',
     flex:0,
  
    },
    buyButton: {
      height: 45,
      backgroundColor:'#000000',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 4
      
     },
     getButton: {
       height: 45,
       backgroundColor: '#E5E5E5',
       alignItems:'center',
       justifyContent:'center',
       borderRadius: 4
       
      },
      debitCard: {
        height: 100,
        width:'80%'
      }
  });
