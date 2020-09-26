import React,{useContexts, useState,useEffect}from 'react';
import {View,Text,StyleSheet,FlatList, Button, TouchableOpacity,ActivityIndicator} from 'react-native';
import axios from 'axios'; 
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
const ShowList = ({navigation})=>{
    const[results,setresults]=useState();
    const[isLoaded, setIsLoaded]= useState(false);
   const influencer = navigation.getParam('item') 
   
   const PlacementList = async ()=> {
    try{
       
      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers/'+influencer.id)
      .then(res => {
        console.log('AAaaaazADDDDDDDDDDDDDDDDD',res.data);
        setresults(res.data);
        setIsLoaded(true);
    
    
      
      })
    }catch(err){
      console.log(err);
      
    }
  };
  useEffect(()=>{PlacementList();},[])
 
    if(!isLoaded){
        return (
          <View style={[styles.Activitycontainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#696969" /> 
          </View>
          ) 
        }
        else {
  console.log(results.placements);
  console.log(results.placements.length);
  
          return  (<View >
            {/* <FlatList
         data={results.placements}
         keyExtractor={result =>result.id.toString()}
         renderItem={({item}) =>{
       return  (
        <View >
        <Text>{item.id}</Text>
        </View>
       )}}           
       />  */}
       </View>)
        }
}

const styles = StyleSheet.create({

  Activitycontainer: {
    flex: 1,
    justifyContent: "center"
  }})

export default ShowList;