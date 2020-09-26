import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList,TouchableOpacity,Image } from 'react-native';
import InfluencerDetail from '../components/InfluencerDetail';



const ResultSearchScreen = ({navigation}) =>{
    const[searchResults,setResults]=useState();
    const[errorMessage, setErrorMessage]= useState('');
    const[isLoaded, setIsLoaded]= useState(false);
    // const searchterm ='f1842597-575a-459e-b9d8-76535ad8aadb'
    const searchTerm = navigation.getParam('term')
    console.log(searchTerm);
    const ResultSearch = async() =>{

        try{
        const response = await Axios.get('http://heroespy.herokuapp.com/api/v1/influencers',{
            params:{
                name:searchTerm
            },
            
        })
        .then(response=>{
            setResults(response.data.influencers);
            setIsLoaded(true);
    })
        
    }
       catch(err){
           console.log(err);
          setErrorMessage(err)
       }
    };


    useEffect(()=>{ResultSearch()},[])
   
    if(!isLoaded){
        return (
          <View style={[styles.Activitycontainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#696969" /> 
          </View>
          ) 
        }
        else {
        return  (
        <View >
            <Text>influencer(s) contenant '{searchTerm}'</Text>
           <FlatList
        data={searchResults}
        keyExtractor={search =>search.id.toString()}
        renderItem={({item}) =>{
      return  (
          <View>
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Show',{item: item })}}
          >
           <InfluencerDetail influencer={item}/>
           </TouchableOpacity>
           </View>
      )}}           
      /> 
      </View>

        )}}
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
          Activitycontainer: {
            flex: 1,
            justifyContent: "center"
          },
            itemButton: {
              height: 32,
              minWidth: 72,
              borderRadius: 50,
              backgroundColor: '#F38E93',
              justifyContent: 'center',
              alignItems: 'center',
            }})

        
export default ResultSearchScreen;