import React, { useState, useContext, useEffect } from 'react';
import { STORAGE } from '../configs/Constant'
import { View, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Axios from 'axios';
import NavLink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';




const SignUpScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    Axios.post('https://heroespy.herokuapp.com/api/v1/auth/sign_in', {
      email: 'a@a.fr',
      password: 'azertyuiop'
    })
      .then(response => ({
        data: response.data,
        headers: {
          access_token: response.headers['access-token'],
          token_type: response.headers['token-name'],
          uid: response.headers['uid'],
          client: response.headers['client'],
          expiry: response.headers['expiry'],
        }

      }))
      .then(async response => {
        try {
          const headers = response.headers;
          const JsonResponse = JSON.stringify(headers)
          await AsyncStorage.setItem('headers', JsonResponse);
        } catch (error) {
          console.log(error.message);
        }

      })
      .then(() => {
        navigation.navigate('Influenceurs');

      });
  }, []);
  return (
    <View style={Styles.loginScreenContainer}>
      <View style={Styles.loginFormView}>
        <Text style={Styles.logoText}>Connexion</Text>


        <TextInput placeholder="Email" autoCapitalize='none' style={Styles.loginFormTextInput} value={email} onChangeText={text => setEmail(text)} />

        <TextInput placeholder='Password' autoCapitalize='none' style={Styles.loginFormTextInput} value={password} onChangeText={text => setPassword(text)} />

        <Button style={Styles.loginButton} title="Connexion" onPress={() => {
          Axios.post('https://heroespy.herokuapp.com/api/v1/auth/sign_in', {
            email: email,
            password: password
          })
            .then(response => ({
              data: response.data,
              headers: {
                access_token: response.headers['access-token'],
                token_type: response.headers['token-name'],
                uid: response.headers['uid'],
                client: response.headers['client'],
                expiry: response.headers['expiry'],
              }

            }))
            .then(async response => {
              try {
                const headers = response.headers;
                const JsonResponse = JSON.stringify(response.headers)
                await AsyncStorage.setItem('headers', JsonResponse);
              } catch (error) {
                console.log(error.message);
              }

            })
            .then(() => {
              navigation.navigate('ResultScreen');

            })
            .catch(error => { console.log(error.message) });
        }} />
        <NavLink routeName='Inscription' text='pas encore de compte?' />
      </View>
    </View>
  );
}

defaultProps = {
  initialValues: {
    username: '',
    email: '',
    Password: '',
    passwordConfirm: ''

  }
}
const Styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
    marginBottom: 200,
    flex: 1
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    marginHorizontal: 20,
    padding: 5
  },
});

export default SignUpScreen;