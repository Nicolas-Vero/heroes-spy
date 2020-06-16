import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios'; 
import InfluencerDetail from './.expo/src/components/InfluencerDetail';
export default function App() {
  
  const[results,setresults]=useState();
  const[isLoaded, setIsLoaded]= useState(false);
  const InfluenceList = async ()=> {
    try{
      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers')
      .then(res => {
        setresults(res.data.influencers);
        setIsLoaded(true);
        console.log(results[0]);
      })
    }catch(err){
      console.log(err);
      
    }
  };
  
  useEffect(()=>{
    InfluenceList();
    console.log('$$$$$$$$$$$');
    
    console.log('-------------');
    
  },[])
  
  if(!isLoaded){
    return (
      <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" /> 
      </View>
      ) 
    }
    else {
      return (

        <View >
             <FlatList
          data={results}
          keyExtractor={result =>result.id.toString()}
          renderItem={({item}) =>{
        return  (
            <TouchableOpacity onPress={()=>{navigation.navigate('resultsShow',{item :item })}}>
             <InfluencerDetail influencer={item}/>
           </TouchableOpacity>
        )}}           
        /> 
        </View>


        )}}
  //       {
  //   results..map((l) => (
  //     <View style={styles.container}>
  //     {/* <ListItem
  //       key={l => l.id.toString()}
  //       leftAvatar={{ source: { uri: l.avatar }, size:"large"} }
  //       title={l.name}
  //       subtitle={l.instagram_name}
  //       bottomDivider
        
  //     /> */}
   
  //     </View>
  //     ))
  // } 
  //       </View>
  //         )
          
      //  }
    //  }
      
      const styles = StyleSheet.create({
          container:{
            borderWidth: 1,
            borderColor : 'black',
            borderRadius :10,
            marginBottom:3,
            padding:5,
            marginLeft: 5,
            marginRight: 5
          },
            // topContainer: {
            //   flex: 1,
            //   marginVertical: 20,
            //   marginHorizontal: 20,
            // },
            // subContainer: {
            //   marginBottom: 15,
            // },
            // heading: {
            //   fontSize: 16,
            //   marginBottom: 20,
            // },
            // locationBar: {
            //   flexDirection: 'row',
            //   alignItems: 'center',
            //   borderWidth: 1,
            //   borderColor: '#ACACAC',
            //   borderRadius: wp('50%'),
            //   padding: 12,
            //   height: 42,
            // },
            // locationBarText: {
            //   color: '#ACACAC',
            //   fontSize: 15,
            //   marginLeft: 10,
            // },
            // itemTopContainer: {
            //   flex: 1,
            //   flexDirection: 'row',
            //   justifyContent: 'flex-end',
            //   alignItems: 'center',
            //   height: 130,
            //   marginTop: 15,
            // },
            // itemSubContainer: {
            //   paddingHorizontal: 20,
            //   paddingVertical: 10,
            //   width: wp("85%"),
            //   height: '100%',
            //   backgroundColor: '#FFF0F0',
            //   borderRadius: 20,
            // },
            // itemContentContainer: {
            //   flex: 1,
            //   flexDirection: 'row',
            //   justifyContent: 'space-between',
            //   alignItems: 'center',
            //   position: "relative",
            //   paddingLeft: wp("10%")
            // },
            // itemImageContainer: {
            //   position: 'absolute',
            //   left: -wp("10%"),
            // },
            // itemImage: {
            //   width: 66,
            //   height: 66,
            //   borderWidth: 4,
            //   borderRadius: 33,
             
            // },
            // itemButton: {
            //   height: 32,
            //   minWidth: 72,
            //   borderRadius: wp('50%'),
            //   backgroundColor: '#F38E93',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            // },
      });
