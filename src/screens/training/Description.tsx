import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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
function Description() {

  return (
   <ScrollView style={styles.container}>
     <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerHeading}>
        <View style={{left:10}}>
        <MaterialCommunityIcons name="arrowleft" color={'red'} size={26} />
        </View>
        <View style={{width: '60%'}}>
        <Text style={{textAlign: 'center', fontWeight:'900'}}>Design Thinking</Text>
        </View>
        <View style={{height:25, width:25,backgroundColor:'red'}}></View>
        <View style={{height:25, width:25,backgroundColor:'red', right:10}}></View>
        </View>
        <View style={{height:'60%'}}>
          <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Text>online</Text>
            <View style={{width:20}}></View>
            <Text>video & lecture</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.spacer} />
        <Text style={styles.heading}>About thr Course</Text>
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
           <View style={{flexDirection: 'row', alignItems:'center'}}>
            <View style={{height:3, width:3, backgroundColor:'black', borderRadius:20,top:1}}></View>
            <Text style={{left:10}}>{item.name}</Text>
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
           <View style={{flexDirection: 'row'}}>
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
      <View style={{backgroundColor:'#ffffff', margin:15,}}>
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
    flex:4,
    backgroundColor: 'gray',
    opacity:0.4,
    height: 140
  },
  body: {
    flex:8,
    padding:15,
    backgroundColor: '#E5E5E5'
  },
  headerHeading: {
   height: '40%',
   flexDirection:'row',
   justifyContent: 'space-between',
   alignItems:'center',
  },
  spacer: {
    height:10
  },
  heading: {
    color: '#000000'
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
    
   }
});

export default Description;
