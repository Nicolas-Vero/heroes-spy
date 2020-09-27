import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';
import Axios from 'axios';

const AuthForm = ({ headerText, onSubmit, navigation }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    return (
        <View>
            <Text style={Styles.label}>{headerText}</Text>
            <Text style={Styles.label}>Email</Text>
            <TextInput style={Styles.input} value={email} onChangeText={text => setEmail(text)} />
            <Text style={Styles.label} >Password</Text>
            <TextInput style={Styles.input} value={password} onChangeText={text => setPassword(text)} />
            <Text style={Styles.label}>Password confirm</Text>
            <TextInput style={Styles.input} value={passwordConfirm} onChangeText={text => setPasswordConfirm(text)} />
            <Button title="Subscription" onPress={() => {
                Axios.post('https://heroespy.herokuapp.com/api/v1/auth/', {
                    email: email,
                    password: password

                })
                    .then(response => {
                        if (response.data.status) {
                            console.log(response.data);

                        }

                    }).catch(error => { console.log(error) });
            }} />
        </View>

    );
}

AuthForm.defaultProps = {
    initialValues: {
        username: '',
        email: '',
        Password: '',
        passwordConfirm: ''

    }
}
const Styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        marginBottom: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 5
    }
});


export default AuthForm;