import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
export default function App() {
  
  const[results,setResults]=useState();
  const[isLoaded, setIsLoaded]= useState(false);
  const InfluenceList = async ()=> {
    try{
      console.log('ici'); 
      const response = await axios.get('http://heroespy.herokuapp.com/api/v1/influencers')
      .then(res => {
        setResults(res.data.influencers);
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
        <View style={[styles.container, styles.horizontal]}>
        <Text>{results[0].name}</Text>
        {
          
          results.map(l => {
            return (
              <Text>{l.name}</Text>
              )
            }
            )
          }
          </View>
          )
          
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
