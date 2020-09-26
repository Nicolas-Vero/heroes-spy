import React, { useState, useContext, useEffect} from 'react';
import {STORAGE} from '../configs/Constant'
import {View,StyleSheet,FlatList, Image,SafeAreaView,TouchableOpacity,ActivityIndicator,TextInput} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Axios from 'axios';
import NavLink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';




const SignUpScreen =  ({navigation}) =>{

  const [email, setEmail] = useState('')
  const[ password ,setPassword]= useState('')
    //const {addBLogPost} = useContext(Context)

    useEffect(()=>{
      Axios.post('https://heroespy.herokuapp.com/api/v1/auth/sign_in',{
      email : 'a@a.fr' ,
      password: 'azertyuiop'
    })
    .then(response => ({ 
      data :response.data,
     headers: {
       access_token: response.headers['access-token'],
       token_type: response.headers['token-name'],
       uid: response.headers['uid'],
       client: response.headers['client'],
       expiry: response.headers['expiry'],
     }  
     
    }))
    .then(async response=>{
    try {
    const headers = response.headers;
     const  JsonResponse = JSON.stringify(headers)
     await AsyncStorage.setItem('headers',JsonResponse);
    } catch (error) {
    console.log(error.message);
    }
     
    })
    .then(()=>{
      navigation.navigate('Influenceurs');
      
   });},[]);
return (
  <View style={Styles.container}>
<Text style={Styles.label}>Email</Text>
<Input autoCapitalize='none'style={Styles.input} value={email} onChangeText={text=>setEmail(text)}/>
<Text style={Styles.label} >Mot de passe</Text>
<Input autoCapitalize='none' style={Styles.input} value={password} onChangeText={text=>setPassword(text)}/>
<Button title ="Login" onPress={()=>{
 Axios.post('https://heroespy.herokuapp.com/api/v1/auth/sign_in',{
       email : email ,
       password: password
     })
     .then(response => ({ 
       data :response.data,
      headers: {
        access_token: response.headers['access-token'],
        token_type: response.headers['token-name'],
        uid: response.headers['uid'],
        client: response.headers['client'],
        expiry: response.headers['expiry'],
      }  
      
     }))
     .then(async response=>{
     try {
        const headers = response.headers;   
        const  JsonResponse = JSON.stringify(response.headers)
        await AsyncStorage.setItem('headers',JsonResponse);
        console.log('json');
        console.log(JsonResponse);
     } catch (error) {
     console.log(error.message);
     }
      
     })
     .then(()=>{
       navigation.navigate('ResultScreen');
       
    })
     .catch(error => {console.log(error.message)});
}}/>
 <NavLink routeName='Signup' text= 'pas encore de compte?'/>
</View>

);}

defaultProps={
  initialValues:{
      username:'',
      email:'',
      Password:'',
      passwordConfirm:''

  }
}
const Styles = StyleSheet.create({

  container:{
    display: "flex",
  justifyContent:"center",
  padding:5,
  marginBottom:200,
  flex:1
  },

  input:{
    fontSize:18,
    margin :10,
    marginHorizontal:20,
    padding:5   
},
label:{
    fontSize:20,
    marginLeft:15,
    marginBottom:5
},
button:{
   fontSize:20,
   margin:20,
   marginBottom:10
}
});

export default SignUpScreen;