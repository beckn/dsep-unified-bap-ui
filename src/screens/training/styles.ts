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
    dot: ViewStyle;
    left:ViewStyle;
    row:ViewStyle;
    comments: ViewStyle;
    lessonPlanCardHeader: ViewStyle;
    lessonPlanArrow: ViewStyle;
    lessionLine: ViewStyle;
    debitNumber: ViewStyle;
    align: ViewStyle;
    imageTop: ViewStyle;
    alignItem: ViewStyle;
    yesBank: ViewStyle;
    yesbankDetails: ViewStyle;
    outerCircle:ViewStyle;
    innerCircle: ViewStyle;
    saveResume: ViewStyle;


    
};

export const styles = StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: Colors.background,
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
         width:'45%',
      },
      button: {
        width:'55%',
        backgroundColor: Colors.black, 
        height:34, 
        alignItems:'center', 
        alignSelf:'center', 
        justifyContent:'center'
      },
      cvv:{  
        height: 32,
        borderWidth: 1,
        width: 48,
        padding: Metrics.padding.xSmall,
        borderRadius: Metrics.radius.xSmall,
        borderColor: Colors.liteGray,
    },
    cvvText:{
      left: Metrics.padding.xSmall, 
      justifyContent:'center',
      alignSelf:'center',
      fontSize: Fonts.size.small
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
  dot: {
    height:3, 
    width:3, 
    backgroundColor: Colors.black, 
    borderRadius: Metrics.radius.large,
    top:1
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
    top:Metrics.padding.xSmall
  },
  lessionLine: {
    backgroundColor:'gray', 
    height:0.7, 
    opacity:0.4
  },
  debitNumber: {
    top:7, 
    left: Metrics.padding.small,
  },
  align:{
    textAlign:'center'
  },
  imageTop: {
    // marginTop:-50
  },
  alignItem: {
    alignItems:'center',
    marginTop:-25
  },
  yesBank: {flex:2},
  yesbankDetails: {flex: 9},
  outerCircle: {
    height: 74,
    width: 74,
    backgroundColor: Colors.black10,
    borderRadius: 37,
    alignSelf: "center",
    marginTop: -37,
    justifyContent: "center",
    alignItems: "center",

  },
  innerCircle: {
    height: 52,
    width: 52,
    backgroundColor: Colors.black,
    borderRadius: 26,
    alignSelf: "center",
  },
  saveResume: {
    height: 74,
    width: '100%',
    borderWidth:1,
    borderRadius:10

  }
  });
