import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import images from '../../assets/images'


const courses = [
  {
    id: 1,
    name: 'Fundamentals in UX'
  },
  {
    id: 2,
    name: 'Research'
  },
  {
    id: 3,
    name: 'Prototyping'
  },
  {
    id: 4,
    name: 'Design'
  },
  {
    id: 5,
    name: 'Presentation skills'
  }
]

const prerequisites = [
  {
    id: 1,
    name: 'Sed ut perspiciatis unde omnis iste natus error sit.'
  },
  {
    id: 2,
    name: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.'
  },
  {
    id: 3,
    name: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  },
  {
    id: 4,
    name: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  }
]

const eligibility = [
  {
    id: 1,
    name:'Sed ut perspiciatis unde omnis iste natus error sit.'
  },
  {
    id: 2,
    name:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.'
  }
]
function Description({navigation}) {

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerHeading}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={images.leftArrow}  />
          </TouchableOpacity>
        <Text style={styles.headerText}>{'Design Thinking'}</Text>
          <Image source={images.vector} />
        </View>
        <View>
          <View style={styles.video}>
            <Text>{'online'}</Text>
            <View style={styles.horizontalSpace}></View>
            <Text>{'video & lecture'}</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.spacer} />
        <Text style={styles.heading}>{'About thr Course'}</Text>
        <View style={styles.spacer} />
        <Text>{'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.'}</Text>
        <View style={styles.spacer} />       
        <Text>{'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.'}</Text>
        <View style={styles.spacer} />  
        <Text style={styles.heading}>{'Course Highlights'}</Text>
        <View style={styles.spacer} />
        <FlatList 
         data={courses}
         renderItem ={({item, index})=>{
          return<>
           <View style={styles.course} key={index}>
            <View style={styles.dot}></View>
            <Text style={styles.left}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'General Information'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Duration'}</Text>
        <Text>{'23h 40m'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Language'}</Text>
        <Text>{'English, Hindi'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Number of enrollments'}</Text>
        <Text>{'1,271'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Specialization'}</Text>
        <Text>{'Interaction Design'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Course Creator'}</Text>
        <Text>{'Udemy'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Provider'}</Text>
        <Text>{'Ignou'}</Text>
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Prerequisites'}</Text>
        <FlatList 
         data={prerequisites}
         renderItem ={({item, index})=>{
          return<>
           <View style={{flexDirection: 'row'}} key={index}>
            <Text style={{height:3, width:3, backgroundColor:'black', borderRadius:20,top:10}}>.</Text>
            <Text style={{left:10}}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Eligibility'}</Text>
        <FlatList 
         data={eligibility}
         renderItem ={({item, index})=>{
          return<>
           <View style={{flexDirection: 'row'}}>
            <Text style={{height:3, width:3, backgroundColor:'black', borderRadius:20,top:10}}>.</Text>
            <Text style={{left:10}}>{item.name}</Text>
           </View>
          </>
         }}
        />
        <View style={styles.spacer}  />
        <Text style={styles.heading}>{'Course Fees'}</Text>
        <Text>{'₹2,500'}</Text>
      </View>  
      <View style={{backgroundColor:'#ffffff', margin:15}}>
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.buyButton}>
        <Text style={{color:'#ffffff'}}>{'Buy Now'}</Text>
        </View>
       </TouchableOpacity>
       <View style={styles.spacer} />
       <View style={styles.spacer} />
       <TouchableOpacity onPress={()=>{}}>
        <View style={styles.getButton}>
        <Text style={{color:'#000000'}} >{'GIFT THIS COURSE'}</Text>
        </View>
       </TouchableOpacity>
      </View> 
    </SafeAreaView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#E5E5E5',
    height: 140,
    opacity: .8,
    paddingLeft:10,
    paddingRight:10
  },
  body: {
    flex:8,
    padding:15,
    backgroundColor: '#E5E5E5',
    opacity:0.6
  },
  headerHeading: {
   height: '40%',
   flexDirection:'row',
   justifyContent: 'space-between',
   alignItems:'center',
   zIndex:3
  },
  spacer: {
    height:10
  },
  heading: {
    color: '#000000',
    zIndex:9
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
  course: {
    flexDirection: 'row', 
    alignItems:'center'
  },
  dot: {
    height:3, 
    width:3, 
    backgroundColor:'black', 
    borderRadius:20,
    top:1
  },
  left:{left:10}

});

export default Description;
