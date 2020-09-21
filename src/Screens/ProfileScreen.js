import React, { useContext } from 'react';
import { View, StyleSheet, Text,SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import  axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE } from '../configs/Constant';
import { getData } from '../configs/Global';

const ProfileScreen = ({navigation}) => {
    const header= getData();
  
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={{ fontSize: 48 }}>ProfileScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={()=>{
         
             axios({
                method :'DELETE',
                url:'https://heroespy.herokuapp.com/api/v1/auth/sign_out',
                headers:header
            }).then(navigation.navigate('Signin')) 
        } }
            />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
