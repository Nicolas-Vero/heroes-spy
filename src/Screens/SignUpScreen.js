import React,{useContext, useState} from 'react';
import {View,StyleSheet,FlatList, Image,SafeAreaView,TouchableOpacity,ActivityIndicator,TextInput} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Axios from 'axios';
import NavLink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation';

const SignUpScreen =  ({navigation}) =>{
  
  const [email, setEmail] = useState('')
  const[ password ,setPassword]= useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
    //const {addBLogPost} = useContext(Context)
return (
  <View style={Styles.container}>
      <Text style={Styles.label}>Email</Text>
      <TextInput autoCapitalize='none' style={Styles.input} value={email} onChangeText={text=>setEmail(text)}/>
      <Text style={Styles.label} >Password</Text>
      <TextInput autoCapitalize='none' style={Styles.input} value={password} onChangeText={text=>setPassword(text)}/>
      <Text style={Styles.label}>Password confirm</Text>
      <TextInput autoCapitalize='none' style={Styles.input} value={passwordConfirm} onChangeText={text=>setPasswordConfirm(text)}/>
      <Button style={Styles.button} title ="Subscription" onPress={()=>{
        Axios.post('https://heroespy.herokuapp.com/api/v1/auth/',{
            email : email ,
            password: password
            
          })
          .then(response => {
            if (response.data.status) {
              console.log(response.headers);
             navigation.navigate('ResultScreen');
            
            } 
      
          }).catch(error => {console.log(error.message)});
      }}/>
      <NavLink routeName='Signin' text= 'already a account?'/>
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
     borderWidth:1,
     borderColor: 'black',
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