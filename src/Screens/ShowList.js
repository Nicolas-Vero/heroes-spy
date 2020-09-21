import React,{useContexts, useState,useEffect}from 'react';
import {View,Text,StyleSheet,FlatList, Button, TouchableOpacity,ActivityIndicator} from 'react-native';
import axios from 'axios'; 
const ShowList = ({navigation})=>{
    const[results,setresults]=useState();
    const[isLoaded, setIsLoaded]= useState(false);
   const influencer = navigation.getParam('item') 
   
   const PlacementList = async ()=> {
    try{
       
      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers/'+influencer.id)
      .then(res => {
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
          <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" /> 
          </View>
          ) 
        }
        else {
  console.log(results.placements);
  console.log(results.placements.length);
  
          return  (<View >
            <FlatList
         data={results.placements}
         keyExtractor={result =>result.id.toString()}
         renderItem={({item}) =>{
       return  (
        <View >
        <Text>{item.id}</Text>
        </View>
       )}}           
       /> 
       </View>)
        }
}

const styles = StyleSheet.create({

    container:{
      borderWidth: 1,
      borderColor : 'black',
      borderRadius :10,
      marginBottom:3,
      padding:5,
      marginLeft: 5,
      marginRight: 5
    },})

export default ShowList;