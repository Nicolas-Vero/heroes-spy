import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios'; 
import InfluencerDetail from '../components/InfluencerDetail';
import {SafeAreaView, withNavigation} from 'react-navigation';
const ResultScreen = ({navigation}) => {  
  
  const[results,setresults]=useState();
  const[isLoaded, setIsLoaded]= useState(false);
  const InfluenceList = async ()=> {
    try{

      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers')
      .then(res => {
        setresults(res.data.influencers);
        setIsLoaded(true);
      })
    }catch(err){
      console.log(err);
      
    }
  };
  
  useEffect(()=>{
    InfluenceList();
  },[])
  
  if(!isLoaded){
   
    return (
      <SafeAreaView style={[styles.container, styles.horizontal]} forceInset={{top: 'always'}}>

      <ActivityIndicator size="large" color="#696969" /> 
     
      </SafeAreaView>
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
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Show',{item: item })}}
            >
             <InfluencerDetail influencer={item}/>
             </TouchableOpacity>
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
            itemButton: {
              height: 32,
              minWidth: 72,
              borderRadius: 50,
              backgroundColor: '#F38E93',
              justifyContent: 'center',
              alignItems: 'center',
            },
      });

      export default withNavigation(ResultScreen);
