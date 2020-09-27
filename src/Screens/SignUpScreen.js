import React, { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Axios from 'axios';
import NavLink from '../components/Navlink'
import { NavigationEvents } from 'react-navigation';

const SignUpScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={Styles.loginScreenContainer}>
      <View style={Styles.loginFormView}>
        <Text style={Styles.logoText}>Inscription</Text>

        <TextInput placeholder="Email" autoCapitalize='none' style={Styles.loginFormTextInput} value={email} onChangeText={text => setEmail(text)} />

        <TextInput placeholder='Password' autoCapitalize='none' style={Styles.loginFormTextInput} value={password} onChangeText={text => setPassword(text)} />

        <Button style={Styles.loginButton} title="Inscription" onPress={() => {
          Axios.post('https://heroespy.herokuapp.com/api/v1/auth/', {
            email: email,
            password: password

          })
            .then(response => {
              if (response.data.status) {
                navigation.navigate('ResultScreen');

              }

            }).catch(error => { console.log(error.message) });
        }} />
        <NavLink style={Styles.LoginButton} routeName='Connexion' text='déjà un compte?' />
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