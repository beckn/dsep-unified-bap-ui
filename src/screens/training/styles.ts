import {StyleSheet, ViewStyle} from 'react-native';
import {Metrics} from '@styles/metrics';
import { Colors } from '@styles/colors';
import { Fonts } from '@styles/fonts';

type Styles = {
    container: ViewStyle;
    header: ViewStyle;
    headerHeading: ViewStyle;
    body: ViewStyle;
    spacer: ViewStyle;
    heading: ViewStyle;
    card: ViewStyle;
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
    course: ViewStyle;
    left:ViewStyle;
    row:ViewStyle;
    comments: ViewStyle;
    lessonPlanCardHeader: ViewStyle;
    lessonPlanArrow: ViewStyle;
    lessionLine: ViewStyle;
    debitNumber: ViewStyle;
  
};

export const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.backgound,
      height: 140,
      opacity: 0.8,
      paddingLeft: Metrics.padding.small,
      paddingRight: Metrics.padding.small

    },
    headerHeading: {
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
     },
     body: {
      flex:8,
      padding: Metrics.padding.medium,
    },
    spacer: {
      height:10
    },
    heading: {
      color: Colors.black,
      fontSize: Fonts.size.medium,
    },
    card:{
     height:60,
     flexDirection:'row',
     flex:0,
  
    },
      debitCard: {
        height: 146,
        backgroundColor: Colors.white,
        borderRadius: Metrics.radius.large,
        padding: Metrics.padding.medium,
      },
      smallCard :{
        height: 70,
        backgroundColor: Colors.white,
        borderRadius: Metrics.radius.large,
        flexDirection:'row',
        alignItems:'center'
      },
      upiCard:{
        height: 70,
        backgroundColor: Colors.white,
        borderRadius: Metrics.radius.large,
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
        backgroundColor: Colors.white,
         padding: Metrics.padding.medium,
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
        backgroundColor: Colors.black, 
        height:40, 
        alignItems:'center', 
        alignSelf:'center', 
        justifyContent:'center'
      },
      cvv:{  
        height: 30,
        borderWidth: 1,
        padding: -5,
        width: 40,
      },
      cvvText:{
      left: Metrics.padding.small, 
      top: Metrics.padding.xSmall
      },
      line : {
      height:1, 
      width:'100%', 
      backgroundColor:Colors.black, 
      opacity: 0.2
      },
    success: {
      height:'80%', 
      width:'100%', 
      justifyContent:'center',
      alignItems:'center'
    },
    course: {
    flexDirection: 'row', 
    alignItems:'center'
    },

  left:{
    left: Metrics.padding.small,
  },
  row:{
    flexDirection: 'row'
  },
  comments :{
    color:'#5D91CC'
  },
  lessonPlanCardHeader:{
    flex:10.5,
    top:1
  }, 
  lessonPlanArrow: {
    flex:1.5,  
    alignItems:'center', 
    top: Metrics.padding.small
  },
  lessionLine: {
    backgroundColor:'gray', 
    height:0.7, 
    opacity:0.4
  },
  debitNumber: {
    top: Metrics.padding.xSmall, 
    left: Metrics.padding.small,
  }
  });
