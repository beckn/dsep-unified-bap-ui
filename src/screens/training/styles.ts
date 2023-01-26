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
    smallCard: ViewStyle;
    upiCard: ViewStyle;
    headerText: ViewStyle;
    video: ViewStyle;
    horizontalSpace: ViewStyle;
    rowDirection: ViewStyle;
    bottom: ViewStyle;
    debitHalf:ViewStyle;
    smallButton: ViewStyle;
    button: ViewStyle;
    cvv:ViewStyle;
    cvvText:ViewStyle;
    line: ViewStyle;
    success:ViewStyle;


    
};

export const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#E5E5E5',
      height: 140,
      opacity: .8,
      paddingLeft:10,
      paddingRight:10

    },
    headerHeading: {
      height: '40%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
     },
     body: {
      flex:8,
      padding:15,
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
        height: 146,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding:15
      },
      smallCard :{
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center'
      },
      upiCard:{
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around'

      },
      headerText: {
        textAlign: 'center', 
        fontWeight:'900'
      },
      video: {
        flexDirection: 'row', 
        justifyContent:'center'
      },
      horizontalSpace: {
        width:20
      },
      rowDirection: {
        flexDirection:'row'
      },
      bottom: {
        backgroundColor:'#ffffff',
         padding:15
      },
      debitHalf :{
        height:'50%',
        flexDirection:'row', 
        alignItems:'center'
      },
      smallButton: {
        flexDirection:'row',
         width:'45%'
      },
      button: {
        width:'55%',
        backgroundColor:'#000000', 
        height:40, 
        alignItems:'center', 
        alignSelf:'center', 
        justifyContent:'center'
      },
      cvv:{  
        height: 30,
        borderWidth: 1,
        padding: -5,
        width: 40
    },
    cvvText:{
      left:10, 
      top:5
    },
    line : {
      height:1, 
      width:'100%', 
      backgroundColor:'#000', 
      opacity: 0.2
    },
    success: {
      height:'80%', 
      width:'100%', 
      justifyContent:'center',
      alignItems:'center'
    }
  });
